import { useState } from 'react'
import './App.css'
import AllBoxes from './25Things/AllBoxes';
import ShowReminder from './25Things/ShowReminder';

function App() {
  const [boxNumber, setBoxNumber] = useState(0)
  const [backButtonClicked, setBackButtonClicked] = useState(false)

  return (
    <div>
      {backButtonClicked == false ? <AllBoxes setBoxNumber={setBoxNumber} setBackButtonClicked={setBackButtonClicked} /> : <ShowReminder boxNumber={boxNumber} setBackButtonClicked={setBackButtonClicked} />}
    </div>
  )
}

export default App
