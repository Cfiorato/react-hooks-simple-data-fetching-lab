// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
  const [dogImage, setDogImage] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(resp => resp.json())
      .then(data => {
        setDogImage(data.message)
        setIsLoaded(!isLoaded)
      })
  }, [])
  
  return(
    <div>
      {isLoaded ? 
        <img src={dogImage} alt='A Random Dog'></img>
        : 
        <p>Loading...</p>  
      }
    </div>
  )
}

export default App