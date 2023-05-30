import React, {  useState } from 'react'
import './App.css';
import StudentForm from './components/StudentForm';

function App() {
  const[name,setName] = useState('')
  const[finalName,setFinalName] = useState('CSIT CLASS')

  const onCLickinButon =()=>{
    setFinalName(name)
  }

  // useEffect(()=>{
  //   alert("website is opened!!!")
  // },[])

  // useEffect(()=>{
  //   alert("first name is changed")
  // },[finalName]) //when the finalName is changed it will show alert

  return (
    <>
      <div className="App">
        {/* <div className='formInput'>
          <button onClick={()=>onCLickinButon()}>Click to change title</button>
          <input value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div> */}
          
          <StudentForm />
      </div>
    </>
   
  );
}

export default App;
