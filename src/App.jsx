import { useState } from 'react'
import './App.css'
import { Menu } from './components/Menu.jsx'
import { PendingOrders } from './components/PendingOrders.jsx'
import { Bartenders } from './components/Bartenders.jsx'
import { Levels } from './components/Levels.jsx'
import { Barrels } from './components/Barrels.jsx'
import { SoldBeers } from './components/SoldBeers.jsx'
import { Queue } from './components/Queue.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
     <Menu />
     <PendingOrders/>
     <Bartenders />
     <Levels />
     <Barrels />
     <SoldBeers />
     <Queue />

   </div>
  )
}

export default App
