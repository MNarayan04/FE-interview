import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sign from './Sign'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='my-17 ml-19 mt-10  gap-12 ' >
      <h1 className='text-5xl '>Sign in your account</h1>
      <Sign/>
    </div>
    </>
  )
}

export default App
