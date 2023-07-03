import axios from "axios"

export const getList = async() => {
    
    const rest = await axios.get(`http://localhost:8080/api/todos/list`)

    return rest.data
}

export const postTodo = async(todo) => {

    const rest = await axios.post('http://localhost:8080/api/todos/', todo)

    return rest.data
}