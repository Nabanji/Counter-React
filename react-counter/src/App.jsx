import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="counter">
        <h1>{count}</h1>
      </div>
      <div className='buttons'>
        <button onClick={() => setCount((count) => count - 1)} className='decrease'>decrement</button>
        <button onClick={() => setCount((count) => count = 0)} className='reset'>reset</button>
        <button onClick={() => setCount((count) => count + 1)} className='increase'>increment</button>
      </div>
    </>
  )
}

export default App
