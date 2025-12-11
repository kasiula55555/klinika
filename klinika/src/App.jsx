import { useState } from 'react'
import VisitList from './components/VisitsList'
import  BokingForm from './components/BookingForm'


function App() {
  const [visits,setVisits] = useState([])

  function addVisit(visit){
    setVisits([...visits,visit]);
  }

  return (
    <div style={{padding:"20px", fontFamily:"sans-serif"}}>
      <h1>klinika-umawianie wizyt</h1>
      <BokingForm addVisit={addVisit}/>
      <hr/>
      <VisitList visits={visits}/>
    </div>
    
  );
}

export default App
