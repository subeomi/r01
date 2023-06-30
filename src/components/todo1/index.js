import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from 'react-uuid';
import TodoSaver from "./TodoSaver";

// 컴포넌트 밖에 꺼내놓으면 리렌더가 되어도 유지

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
        // 가져온 tno로 필터링한걸 todos로 즉시 적용
        setTodos( todos.filter(todo => todo.tno !== tno) )

        // Read페이지 닫음
        setCurrent(null)
    }

    const modify = (modifiedTodo) => {
        // 가져온 객체의 tno로 필터링
        const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]

        // 같은 tno를 가진 객체의 title을 가져온 title로 수정
        target.title = modifiedTodo.title
        
        // 수정 상태 적용
        setTodos([...todos])
        // Read페이지 닫음
        setCurrent(null)
    }

    useEffect(() => {
        // localStorage에 저장된 key:todos의 value을 가져옴
        const jsonStr = localStorage.getItem("todos")

        // 값이 존재한다면 value 내용을 todos 안에 넣음
        if(jsonStr){
            setTodos(JSON.parse(jsonStr))
        }

    }, [])

    const saveAll = (todo) => {
        // JSON.stringify는 JS의 객체나 배열을 JSON 형태로 바꿔준다.
        const str = JSON.stringify(todos)

        // localStorage -> 브라우저의 로컬스토리지에 데이터를 저장함.
        // localStorage.setItem(key,value) 저장, localStorage.getItem(key) 키의 값을 가져옴
        localStorage.setItem("todos", str)
    }


    return ( 
        <>
        <div className="text-5xl">Todo 1</div>
        <div>
            <Todo1Input addTodo={addTodo}></Todo1Input>
            <Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
            <Todo1List requestView={requestView} todos={todos}></Todo1List>
            <TodoSaver saveAll={saveAll}></TodoSaver>
        </div>
        </>
     );
}
 
export default Todo1;