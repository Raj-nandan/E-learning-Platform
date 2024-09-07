const PORT = 8000
const express = require('express')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config();
const uri = process.env.MONGODB_URI;

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json('backend')
});

app.get('/user-dashboard', async (req, res) => {
    const client = new MongoClient(uri)
    const userId = req.query.userId

    try {
        await client.connect()
        const database = client.db('tinder-data')
        const users = database.collection('users')
        const courses = database.collection('courses')
        const lectures = database.collection('lectures')
        const assessments = database.collection('assessments')
        const notes = database.collection('notes')

        const user = await users.findOne({ user_id: userId })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        const userCourses = await courses.find({ user_id: userId }).toArray()
        const userLectures = await lectures.find({ user_id: userId }).toArray()
        const userAssessments = await assessments.find({ user_id: userId }).toArray()
        const userNotes = await notes.find({ user_id: userId }).toArray()

        res.json({
            user: {
                email: user.email,
                created_at: user.created_at
            },
            courses: userCourses,
            lectures: userLectures,
            assessments: userAssessments,
            notes: userNotes
        })
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    } finally {
        await client.close()
    }
})

app.post('/signup', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    const generatedUserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await client.connect();
        const database = client.db('tinder-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({ email })

        if (existingUser) {
            return res.status(409).send('User already exists')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = await users.create( {
            user_id: generatedUserId,
            email: sanitizedEmail,
            hashed_password: hashedPassword,
            created_at: new Date()
        })

        const insertedUser = await users.insertOne(data)

        const token = jwt.sign({ user_id: generatedUserId }, process.env.JWT_SECRET, {
            expiresIn: '24h',
        })

        res.status(201).json({ token, userId: generatedUserId, email: sanitizedEmail })

    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    } finally {
        await client.close()
    }
})

app.post('/login', async (req, res) => {
    const client = new MongoClient(uri)
    const { email, password } = req.body

    try {
        await client.connect()
        const database = client.db('tinder-data')
        const users = database.collection('users')

        const user = await users.findOne({ email })

        if (user && await bcrypt.compare(password, user.hashed_password)) {
            const token = jwt.sign({ user_id: user.user_id }, process.env.JWT_SECRET, {
                expiresIn: '24h',
            })
            res.status(200).json({ token, userId: user.user_id, email })
        } else {
            res.status(400).json('Invalid Credentials')
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    } finally {
        await client.close()
    }
})


app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('tinder-data')
        const users = database.collection('users')

        const returnedUsers = await users.find().toArray()
        res.send(returnedUsers)
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error')
    } finally {
        await client.close()
    }
});


app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})