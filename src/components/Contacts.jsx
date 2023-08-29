import React from 'react'
import { useContext} from 'react'
import {Context} from '../App'
import {BiUserCircle} from 'react-icons/bi'
import {BsFillTrashFill} from 'react-icons/bs'
import {db} from '../config/firebase'
import { collection,getDocs,deleteDoc,doc,set,updateDoc } from 'firebase/firestore'
import { useState,useEffect } from 'react'
import Newcontact from './Newcontact'

const Contacts = () => {
  const[contacts,setContacts]=useState([])
  // const{add,setAdd}=useContext(Context)
  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const[id,setId]=useState()
  const[add,setAdd]=useState(false)

useEffect(()=>{
  const getcontacts=async()=>{
    const data=collection(db,'contacts')
    const resp=await getDocs(data)

  const lists=resp.docs.map((doc)=>{return(
      {
        id:doc.id,
        ...doc.data()
      }
    
    )},[])
    setContacts(lists)
  
  


   
 
   
  

  }

  getcontacts()

},[])






const handleupdate=(v)=>{
  setAdd(!add)
setName(v.name)
setEmail(v.email)
setId(v.id)




}
const handleedit=async(e)=>{
e.preventDefault()
  console.log(id)
  const update=doc(db,'contacts',id)
  await updateDoc(update,{email,name})
}


const handledelete=async(v)=>{
  // console.log(v.id)
await deleteDoc(doc(db,'contacts',v))



  setContacts(
    contacts.filter((i)=>i.id!=v)



  )
}




  return (
    <>
    {
      contacts.map((v)=> <div className='flex  w-[90%] m-auto justify-between bg-yellow rounded-md outline-none mt-4' key={v.id}>
      <div className=' w-[70%] flex pl-[10px] items-center'>
  <BiUserCircle className='text-orange' size={40}/>
  <div className="names">
      <h2 className='text-[20px] font-bold'>{v.name}</h2>
      <h2>{v.email}</h2>
  </div>
  </div>
  <div className='flex items-center w-[25%] justify-between m-auto'>
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8V2m6.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38l-2.5-2.5Z" className='cursor-pointer'onClick={()=>handleupdate(v)}/></svg>
  <BsFillTrashFill size={30} className='cursor-pointer' onClick={()=>handledelete(v.id)} />
  </div>
  </div>)
    }
      {
        (add)? 
        
        <form >
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
         <button className='border w-[50%] h-[30px] bg-[#FCCA3F] font-bold' onClick={handleedit} >Edit contact</button>
        </div>
        </div>
        </form>
        :''
    }
  
    
    
    
    
    
    
    </>
    // <div className='flex  w-[90%] m-auto justify-between bg-yellow rounded-md outline-none mt-4'>
    //     <div className=' w-[70%] flex pl-[10px] items-center'>
    // <BiUserCircle className='text-orange' size={40}/>
    // <div className="names">
    //     <h2 className='text-[20px] font-bold'>Dummy Name</h2>
    //     <h2>anshu@dosomecoding.com</h2>
    // </div>
    // </div>
    // <div className='flex items-center w-[25%] justify-between m-auto'>
    // <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10h-2a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8V2m6.78 1a.69.69 0 0 0-.48.2l-1.22 1.21l2.5 2.5L20.8 5.7c.26-.26.26-.7 0-.95L19.25 3.2c-.13-.13-.3-.2-.47-.2m-2.41 2.12L9 12.5V15h2.5l7.37-7.38l-2.5-2.5Z" className='cursor-pointer'/></svg>
    // <BsFillTrashFill size={30} className='cursor-pointer' />
    // </div>
    // </div>
  )
}

export default Contacts
