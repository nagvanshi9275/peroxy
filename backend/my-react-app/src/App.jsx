import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

import {useEffect} from "react"

function App() {
  const [jokes, setjokes] = useState([])

  const render = jokes.map((joke, index) => (

        <div key={joke.id}>

           <h2>{joke.title}</h2>




        </div>




  ))

   //useEffect(() => {

       // axios.get('https://localhost:3000/jokes')  https://localhost:3000/jokes

      //  .then((response) => {
          
         // setjokes()


       // })

    
  // })

  useEffect(() => {
    // Axios GET request
    axios.get('/api/jokes')
      .then(response => {
        // Handle successful response
        setjokes(response.data);
      })
      .catch(error => {
        // Handle error
        console.log(error);
      });
  });




  return (
    <>


         <h1>DATA OF JOKES</h1>


            {render}



    
    </>
  )
}

export default App



