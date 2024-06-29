import { useState } from 'react';
import Counter from './components/counter';
import CustomerEditor from './components/customerEditor';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <CustomerEditor />
    </>
  )
}

export default App
