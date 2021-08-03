import './index.css'
const Todolist = (props) =>{
   
    return(
        <>
        <div className ="div-5">
              <button type="submit" style={{ backgroundColor: "yellow", color: "black" }} 
              onClick={()=>{
              props.onSelect(props.id)
              }}>Delete</button>
            </div>
              <li>{props.text}</li>
        </>
    )
}
export default Todolist;