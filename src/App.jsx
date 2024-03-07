import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = usestate(8);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(false);
  const [password, setpassword] = useState("");

  return (
    <>
      <h1 className='text-4xl text-center'>Password generator</h1>
    </>
  )
}

export default App
