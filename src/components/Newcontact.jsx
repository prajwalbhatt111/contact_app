import React from 'react'
import { useContext } from 'react'
import {Context} from '../App'
import {db} from '../config/firebase'
import { addDoc,collection, getDoc ,doc} from 'firebase/firestore'
import { useRef ,useState} from 'react'



const Newcontact = () => {
const[name,setName]=useState("")
const[email,setEmail]=useState("") 
const [c,newC]=useState()

const handleonsubmit=async(e)=>{
e.preventDefault();
const newcontact={
  email,
  name
}
try{
  const data=collection(db,'contacts')
  await addDoc(data,newcontact)
}
catch(error){
  console.log(error)
}

console.log(newcontact)
}



    const{add,setAdd}=useContext(Context)
   
  return (
    <>
    {
        (add)? 
        
        <form onSubmit={handleonsubmit}>
        <div className=' w-[70%] bg-white absolute top-[150px] left-[60px]' >
        <div className=' px-[20px] py-[10px]'>
         <h2>Name</h2>
         <input type="text" className='border w-[250px] py-[5px]' value={name} onChange={(e)=>setName(e.target.value)}  />
        </div>
        <div className='px-[20px] py-[10px]'>
         <h2>Email</h2>
         <input type="email" name="" id="" className='border w-[250px] py-[5px]' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="button py-[5px] flex justify-end px-9">
         <button className='border w-[50%] h-[30px] bg-[#FCCA3F] font-bold' >Add contact</button>
        </div>
        </div>
        </form>
        :''
    }
    </>

    



    
   
  )
}

export default Newcontact
