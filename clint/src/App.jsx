import { useState } from 'react'
import './App.css'
import Profile from "./Pages/Profile/Profie"

function App() {
  const [Authenticated, setAuthenticated] = useState(true);

  return (
    <main className='ParentContainer'>
      {
        Authenticated ? <Profile /> : null
      }
    </main>
  )
}

export default App
