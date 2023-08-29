import React from 'react'
import {AiOutlinePlusCircle,AiOutlineSearch} from 'react-icons/ai'
import { useContext } from 'react'
import {Context} from '../App'

const Search = () => {
    const{add,setAdd}=useContext(Context)
  return (
   <>
   <div className='flex w-[90%] m-auto mt-[10px]'>
   
   <input type="text" className='relative border w-[90%] pl-[50px] py-[2px] rounded-lg bg-[#5D5A5A] text-white outline-none' placeholder='Search Contact'/>
   <AiOutlineSearch className='absolute top-[95px] left-[30px] text-white' size={20}/>
   <AiOutlinePlusCircle size={50} className='text-white ml-[30px] cursor-pointer' onClick={()=>setAdd(!add)}/>
   </div>
   </>
  )
}

export default Search
