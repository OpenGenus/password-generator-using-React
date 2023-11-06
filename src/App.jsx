import { useState } from 'react'
import PswdGen from './PswdGen'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="" className="container-fluid">
       <PswdGen />
    </div>
  )
}

export default App
