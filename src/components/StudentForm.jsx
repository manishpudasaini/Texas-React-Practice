import React, { useState } from 'react'
import './StudentForm.css'
import { creaetUser } from '../apis/users';

function StudentForm() {
    const[student,setStudent] = useState({name:'',job:'',gender:''});
    const handelSubmit=()=>{
        creaetUser(student).then((res)=>{
            console.log("user aded successfully",res);
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

    </div>
    </>
  )
}

export default StudentForm