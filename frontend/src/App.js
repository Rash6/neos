import logo from './logo.svg';
import './App.css';
import Todo from './todo/Todo';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
         {/* <Todo/> */}
         <Routes>
         <Route path = "/" element= {<Home/>}/>
         <Route path = "/signup" element= {<Signup/>}/>
         <Route path = "/login" element= {<Login/>}/>
        <Route path = "/tasks" element= {<Tasks/>}/>
         </Routes>
    </div>
  );
}

export default App;
