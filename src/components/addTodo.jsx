// import "./addTodo.style.scss"


const addTodo = ({fnAdd}) => {


    function handleSubmit(e){
      e.preventDefault()
      const dataSubmitted = {...Object.fromEntries(new FormData(e.target)),  complated: false, id: crypto.randomUUID()}
      fnAdd(dataSubmitted)
    }
  return (
    <div className="modal addtodo">
      <div className="wnd">
      <form action="" onSubmit={handleSubmit}>
      <input name="title" type="title" />
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <select name="weekDay" id="">
            <option value="0">SUNDAY</option>
            <option value="1">MONDAY</option>
            <option value="2">THUESDAY</option>
            <option value="3">WEDNESDAY</option>
            <option value="4">THURSDAY</option>
            <option value="5">FRIDAY</option>
            <option value="6">SATRUDAY</option>
        </select>
        <div className="ctrl">
        <button>Add</button>
        <button>Dismiss</button>
        </div>
      </form>
      </div>
   
    </div>
  )
}

export default addTodo