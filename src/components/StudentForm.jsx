import React, { useState } from 'react'
import './StudentForm.css'
import { creaetUser } from '../apis/users';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

function StudentForm() {
    const[student,setStudent] = useState({name:'',job:'',gender:''});
    const[showSnackBar,setShowSnackBar] = useState(false)


    const handelSubmit=()=>{
        creaetUser(student).then((res)=>{
            console.log("user aded successfully",res);
            setShowSnackBar(true)
        })
    }
    
  return (
    <>
    <div className='stdform'>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handelSubmit()
        }}>
            <input 
                type="text" 
                placeholder={'name'} 
                value={student.name}
                required
                onChange={(e)=>{student.name=e.target.value; setStudent({...student})}}
            /><br/>
            <input  
                type="text" 
                required
                placeholder={'job'}
                value={student.job}
                onChange={(e)=>{student.job=e.target.value; setStudent({...student})}}  
            /><br/>
            <select placeholder={'gender'} value={student.gender}  onChange={(e)=>{student.gender=e.target.value; setStudent({...student})}}>
                <option value={'Male'}>Male</option>
                <option value={'FEMALE'}>Female</option>
                <option value={'OTHER'}>Other</option>
            </select><br/>
            <button type='submit'>Submit</button>
        </form>
        <Snackbar open={showSnackBar} autoHideDuration={6000} onClose={()=>{setShowSnackBar(false)}}>
            <Alert onClose={()=>{
                setShowSnackBar(false)
            }} severity="success" sx={{ width: '100%' }}>
                User Added Successfully!!!!
            </Alert>
        </Snackbar>

    </div>
    </>
  )
}

export default StudentForm