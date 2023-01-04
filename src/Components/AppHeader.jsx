import './AppHeader.css'
import { useDispatch } from 'react-redux'
import {addOpen,addAll} from '../features/controlSlice/controlSlice'

const AppHeader = ({setFilter}) => {
  const dispatch=useDispatch()
  return (
    <div className='appHeader'>
        <h1>
            TODO LIST
        </h1>

        <div className="buttons">
          <div className="add_delete">
               <button className='btn primary'
            onClick={()=>{dispatch(addOpen())}}>Add Todo</button>
            <button className='btn secondary' onClick={()=>{dispatch(addOpen());dispatch(addAll())}}>Delete All</button>
            
            </div>
         

            <div>
                <label htmlFor="show"> Show</label>
                <select id='show' className='select' onChange={(e)=>setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">COMPLETED</option>
                <option value="incomplete">INCOMPLETE</option>
            </select>
        </div></div>
            
    </div>
  )
}

export default AppHeader