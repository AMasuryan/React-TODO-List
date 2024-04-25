// import "./ToDo.style.scss"
import {useState} from "react"
import "./ToDo.jsx"
import { FiEdit3, FiCheck, FiX  } from "react-icons/fi"
 

const ToDo = ({complated, description, title, id, weekDay, fnComplate, fnDelete, fnEditToto}) => {
    
  return (
    <article className={complated ? "done" : ""}>
      

     <div className="content">
     <h2>{title}</h2>
     <p>{description}</p>
     </div>
     <div className="controls">
      <FiCheck onClick={()=> fnComplate(id)}/>
      <FiEdit3 onClick={()=> fnEditToto(id)}/>
      <FiX onClick={()=> fnDelete(id)}/>
     </div>

 


    </article>
  )
   
  
}

export default ToDo