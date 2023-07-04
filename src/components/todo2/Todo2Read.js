import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../../api/TodoAPI";

const initState = {
    tno: 0,
    title: ''
}

const Todo2Read = ({ target, changeView }) => {

    const [todo, setTodo] = useState(initState)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {

        getTodo(target).then(data => setTodo(data))

    }, [target, refresh])

    // 함수로 비동기처리 async가 가능하나. 위험하니 조심
    const handleClickDel = async () => {

        const { result } = await removeTodo(target)

        // return Map.of("result", "success"); -> {result: 'success'}
        if (result === 'success') {
            alert("삭제되었습니다.")
        }
        changeView('list')
    }

    const handleClickMod = async () => {

        const { result } = await putTodo(todo)

        // return Map.of("result", "success"); -> {result: 'success'}
        if (result === 'success') {
            alert("수정되었습니다.")
        }
        setRefresh(!refresh)
    }

    return (
        <div>
            <div>Todo2 Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div><input type="text" value={todo.title} onChange={e => {
                todo.title = e.target.value
                setTodo({ ...todo })
            }}>  
            </input>
            </div>
            <div className="flex p-4">
                <button
                className="m-2 p-2 border-2"
                onClick={handleClickMod}
                >MOD</button>

                <button
                className="m-2 p-2 border-2"
                onClick={handleClickDel}
                >DEL</button>
            </div>
        </div>
    );
}

export default Todo2Read;