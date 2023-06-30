const TodoSaver = ({saveAll}) => {
    return ( 
        <div className="bg-blue-600 text-3xl text-white text-center">
            <button onClick={saveAll}>save All</button>
        </div>
     );
}
 
export default TodoSaver;