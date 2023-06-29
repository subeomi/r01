import { useState } from "react";

const initState = {title:'', content:''}

let tno = 1

const TodoInput = () => {

  const [obj, setObj] = useState(initState)

  const handleChange = (e) => {
    obj[e.target.name] = e.target.value 
    setObj({...obj})
  }

  const handleShow = () => {
    console.log(obj)
  }

  const handleClear = () => {
    setObj({...initState})
  }

  return ( 
    <>
      <div>
        <label>제목</label>
        <input 
        className="border-8" 
        type='text'
        name='title' 
        value={obj.title}
        onChange={ handleChange }/>
      </div>

      <div>
        <label>내용</label>
        <input 
        className="border-8" 
        type='text'
        name='content' 
        value={obj.content}
        onChange={ handleChange}/>
      </div>

      <div>
        <button onClick={handleShow}>SHOW</button>
        <button onClick={handleClear} className="ml-6">CLEAR</button>
      </div>
      
    </>
  );
}
 
export default TodoInput;