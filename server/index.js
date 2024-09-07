const PORT = 8000
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json('backend')
});

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error starting server:', err)
    } else {
        console.log(`Server is running on port ${PORT}`)
    }
})