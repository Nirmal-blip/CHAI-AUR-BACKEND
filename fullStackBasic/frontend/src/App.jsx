import { useState,useEffect } from 'react'
import axios from 'axios'
function App() {
 
const [jokes, setJokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes').then((response)=>{
    setJokes(response.data)
    console.log(response.data);
  }).catch((error)=>{
    console.error('Error fetching jokes:', error)
  })
},[])


  return (
    <>
    <h1 className=" text-center text-6xl text-green-400"> Full Stack Nirmal</h1>
    <p className="text-gray-500 text-center mt-40 text-3xl"> Jokes:{jokes.length}</p>
    { 
      jokes.map((joke)=>(
        <div className="text-center mt-5" key={joke.id}>
          <h2 className=" text-center text-62l text-[#312e2e]">{joke.title}</h2>
          <p>{joke.content}</p>
          </div>
      ))
    }
    </>
  )
}

export default App
