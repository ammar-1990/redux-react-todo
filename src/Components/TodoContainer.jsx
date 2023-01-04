import  './TodoContainer.css'
import { useSelector } from 'react-redux'
import TodoView from '../features/todoSlice/TodoView'
import { AnimatePresence } from 'framer-motion'




const TodoContainer = ({filter}) => {


let arr=[];
    const {todos} = useSelector(state=>state.todos)
    switch (filter)
    {
      case 'all':
        arr=[...todos]
        break;
        case 'completed':
          arr=todos.filter((ar)=>ar.status==='completed')
          break;
          case 'incomplete':
            arr=todos.filter((ar)=>ar.status==='incomplete')
            break;
            default:
            arr=[...todos];
    }
 



  return (
    <div className='todoContainer'
 >
      <AnimatePresence>
        {arr.length>0? arr.map((todo)=>(<TodoView todo={todo}  key ={ todo.id }/>)) : <p className='no'
       
        >
          no todos found</p>}
        </AnimatePresence>
    </div>
  )
}

export default TodoContainer