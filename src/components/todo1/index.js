import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid';

// 컴포넌트 밖에 꺼내놓으면 리렌더가 되어도 유지
const viewMap = {}

const Todo1 = () => {

    console.log("Todo1.....")

    const [todos, setTodos] = useState([])
    const [current, setCurrent] = useState(null)

    const addTodo = (todoObj) => {

        console.log(uuid(), todoObj)

        // todos에 새 todo 추가시키고 list페이지로 이동
        setTodos([...todos, {tno:uuid(), ...todoObj}])
    }

    const requestView = (tno) => {
        // 현재 갖고있는 todo의 tno와 가져온 tno가 같은 것만 target에 넣음
        const target = todos.filter(todo => todo.tno === tno)[0]

        console.log("requestView", target)

        setCurrent(target)
    }

    const remove = (tno) => {

        setTodos( todos.filter(todo => todo.tno !== tno) )
        setCurrent(null)
    }

    const modify = (modifiedTodo) => {
        const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]

        target.title = modifiedTodo.title
        
        setTodos([...todos])
        setCurrent(null)
    }


    return ( 
        <>
        <div className="text-5xl">Todo 1</div>
        <div>
            <Todo1Input addTodo={addTodo}></Todo1Input>
            <Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
            <Todo1List requestView={requestView} todos={todos}></Todo1List>
        </div>
        </>
     );
}
 
export default Todo1;