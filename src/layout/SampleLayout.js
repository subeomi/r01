const SampleLayout = ({children}) => {
    return ( 
        <div className="bg-blue-300 m-12 w-full p-12">
            <div className="h-[10vh] bg-red-100 m-12 p-12">
                Logo
            </div>
            {children}
        </div>
     );
}
 
export default SampleLayout;