import './App.css';
import UserList from './UserList';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
.then(function (response) {
  // handle success
  setUser(response.data);
  response.map((el) => {
    console.log(el);
    
  })
})
.catch(function (error) {
  // handle error
  console.log(error);
})

}, []);
  return (
    
      <header className="App-header">
      
     <UserList user={user}/>
        
      </header>
  
  );
}

export default App;
