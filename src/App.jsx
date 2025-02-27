import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button variant="outline" className="text-black-500">Click me</Button>
    </>
  )
}

export default App
