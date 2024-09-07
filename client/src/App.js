import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Lectures from './components/Lectures';
import Notes from './components/Notes';
import Cources from './components/Cources';
import Assesments from './components/Assesments';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/lectures" element = {<Lectures/>}/>
      <Route path= "/notes" element = {<Notes/>}/>
      <Route path= "/assessments" element = {<Assesments/>}/>
      <Route path= "/courses" element = {<Cources/>}/>
      <Route path= "/dashboard" element = {<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
