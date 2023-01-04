import AppHeader from "./Components/AppHeader"
import ControlView from "./features/controlSlice/ControlView"
import { useSelector } from "react-redux"
import TodoContainer from "./Components/TodoContainer"
import { useEffect ,useState} from "react"
import { Toaster } from "react-hot-toast"





const App = () => {
  const [filter,setFilter]=useState('')
    const open =useSelector(state=>state.control.open)
    const {todos}=useSelector(state=>state.todos)


    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])



    
  return (
    <div className="app">
<AppHeader setFilter={setFilter} />

{open &&  <ControlView />}


<TodoContainer filter={filter}/>
<Toaster />
    </div>
  )
}

export default App