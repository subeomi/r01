import TodoInput from "./TodoInput";

const todo = () => {

    const [todo, setTodo] = useState([])

    const insertTodo = (todo) => {

        setTodo([...todo])
    }

    return ( 
        <>
        <TodoInput></TodoInput>
        </>
     );
}
 
export default todo;