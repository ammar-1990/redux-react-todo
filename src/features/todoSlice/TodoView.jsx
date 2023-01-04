import './todoView.css'

import {FaCheckSquare} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { editTodo } from './todoSlice'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin6Line} from 'react-icons/ri'
import { addOpen,addEdit, addDelete } from '../controlSlice/controlSlice'
import { motion,AnimatePresence} from 'framer-motion'
const TodoView = ({todo}) => {
const dispatch = useDispatch()
const handleEdit =()=> {
dispatch(addOpen())
dispatch(addEdit(todo))


}

const handleDelete=()=> {
  dispatch(addOpen())
  dispatch(addDelete(todo))
}


const child ={
  hidden:{
    x:-1500},
visible:{
x :0,
transition:{duration:0.1}

},
no:{x:2000},
}
  
  return (

 
    <motion.div className="todoview" key={todo.id}  style={{opacity:todo.status==='completed'&& '0.5'}}
   variants={child} exit='no' initial='hidden' animate='visible'
    >
       <div className="left">
        <span className="icon" onClick={()=>{dispatch(editTodo({...todo ,status:todo.status==='completed'? 'incomplete':'completed'}));console.log(todo.status)}}><AnimatePresence>{todo.status==='completed' &&<motion.span key='span'        initial={{translateY:-30}}
        animate={{translateY:0}}
        exit={{translateY:-30}}>
          <FaCheckSquare  /></motion.span>}</AnimatePresence></span>
        <div className="content">
            <div className="title" style={{textDecoration:todo.status==='completed' && 'line-through'}}>{todo.title}</div>
            <div className="date">{todo.date}</div>
            
        </div>
       </div>
       <div className="right">
<span onClick={handleEdit}><AiOutlineEdit/></span>
<span onClick={handleDelete}><RiDeleteBin6Line/></span>
       </div>
    </motion.div>
    

  )
}

export default TodoView