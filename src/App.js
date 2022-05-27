import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  // Number Of Birthday == NOB
  const [newData, setNewData] = useState(data)
  const [nob, setNob] = useState(newData.length)
  const [show, setShow] = useState(true)
  const handleClear = () => {
    setNewData([])
    setNob(0)
    setShow(false)
  }
  function removeHandler(id) {
    setNewData(prevData => {
      return prevData.filter(eachData => eachData.id !== id)
    })
    setNob(prevValue => prevValue-1)
    console.log(nob)
    if (nob-1 === 0) {
      setShow(false)
    }
  }
  return (
    <main>
    <div className='container'>
      <h3>You have {nob} birthdays Today</h3>
    {newData.map(people => {
      return <List key={people.id} {...people} removeHandler={removeHandler}/>
    })}
    {show && <button onClick={handleClear}>Clear All Birthday</button>}
    </div>
    </main>
  );
}

export default App;
