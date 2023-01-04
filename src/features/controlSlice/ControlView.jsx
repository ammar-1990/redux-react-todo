import './ControlView.css'
import { useSelector,useDispatch } from 'react-redux'
import {AiFillCloseSquare} from  'react-icons/ai'
import {addClose, addDelete, addEdit,addNone} from './controlSlice'
import { editTodo,addTodo,deleteTodo,deleteAll } from '../todoSlice/todoSlice'
import { useState } from 'react'
import uuid from 'react-uuid'
import { toast } from 'react-hot-toast'
import { motion } from 'framer-motion'
const ControlView = () => {

const dispatch=useDispatch()
const all =useSelector(state=>state.control.all)
const {toDelete,edit}=useSelector(state=>state.control)

const [title,setTitle]=useState(edit? edit.title :'')
const [status,setStatus]=useState( edit? edit.status : 'incomplete')


const handleClick =(e)=> {
    e.preventDefault()

    if(edit) {
    
        if(title)
            if(title !==edit?.title || edit?.status!==status){
       
       
         dispatch(editTodo({...edit,title:title,status:status}))
       dispatch(addEdit(null))
       dispatch(addClose())
       toast.success('successfully edited',{position:'bottom-center' ,style:{fontSize:'2rem'}})
       
        }
        else 
        toast.error('you should enter new informations',{position:'bottom-center',style:{fontSize:'1.5rem'}})
        }
     else{ 
        if(title){
        dispatch(addTodo({ 
        id:uuid(),
        title:title,
        status:status,
        date: new Date().toLocaleDateString()

    }))
    dispatch(addClose())

    toast.success('Successfully created!',{position:'bottom-center',style:{fontSize:'2rem'}});}
    else 
    !title&&(toast.error('you should enter a title',{position:'bottom-center',style:{fontSize:'1.5rem'}}))
}

    

}

const handleDelete =(e)=> {
    e.preventDefault()
    if (all){
dispatch(deleteAll())
dispatch(addNone())
toast.success('Successfully Deleted!',{position:'bottom-center',style:{fontSize:'2rem'}})
    }
    else{
        dispatch(deleteTodo(toDelete)) 
        dispatch(addDelete(null))
        toast.success('Successfully Deleted!',{position:'bottom-center',style:{fontSize:'2rem'}})
    }

    dispatch(addClose())
}

  return (
    
    <motion.div className='controlView'
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
    
     

  >
      
        <motion.div className="content"
initial={{scale:0.2,filter:'blur(60px)'}}
animate={{scale:1,filter:'blur(0px)'}}
transition={{duration:0.3,}}
        
       
        
       
       >
        
            <div className="icon" onClick={()=>{dispatch(addClose());dispatch(addDelete(null));dispatch(addEdit(null));dispatch(addNone())}}><AiFillCloseSquare/></div>
{toDelete||all? (<>
    <h1>{all? 'are you sure you want to delete all?':'Are you sure you want to delete this todo?'}</h1>
    <div className="buttons">
        <button onClick={handleDelete}className='btn primary'>Yes</button>
        <button onClick={(e)=>{dispatch(addDelete(null));dispatch(addClose());dispatch(addNone());e.preventDefault()}} className='btn secondary'>Cancel</button>
    </div>
    </>
)
:
(<>
<h1>{edit? 'editi todo' : 'add todo'}</h1>

<form >
    <label htmlFor="title">title </label>
    <input type="text"  id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
    <label htmlFor="state">state</label>
    <select id="state" value={status} onChange={(e)=>{setStatus(e.target.value);console.log(status,edit)}}>
        <option value='completed'>Completed</option>
        <option value='incomplete'>incomplete</option>
    </select>

    <div className="buttons">
        <button type='submit' className='btn primary' onClick={handleClick}>{edit?'edit' : 'add'}</button>
        <button className='btn secondary' onClick={(e)=>{dispatch(addClose());dispatch(addEdit(null));e.preventDefault()}}>cancel</button>
    </div>
    
</form>

</>)}
        </motion.div>
        
    </motion.div>
   
  )
}

export default ControlView