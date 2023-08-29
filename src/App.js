
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import Contacts from './components/Contacts'
import { createContext,useState } from 'react';
import Newcontact from './components/Newcontact';
export const Context=createContext();
function App() {
  const[add,setAdd]=useState(false)
  
  return (
    <>

<Context.Provider value={{add,setAdd}}>
   <div className='relative'>
   <Nav />
   <Search />
   <Contacts />
 
   </div>
   </Context.Provider>
 
    </>
  );
}

export default App;
