import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
    <Portfolio/>
    </div>
  )
}

export default App
