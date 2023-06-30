import axios from "axios";
import { useEffect, useState } from "react";


const ProductList = ({requestViewProduct}) => {

    const [obj, setObj] = useState([])
    // null 콘솔 로그가 찍힘
    console.log(obj)

    useEffect(() => {
        // 이 안에는 제약이 있어 await 사용 불가능
        axios.get('http://localhost/products').then(res => {
            // http://localhost/products의 JSON 데이터가 찍힘
            console.log("effect inside", res.data)
            // setObj로 상태가 변경, 리렌더링이 되므로 console.log(obj)가 한번 더 찍히고 3개의 로그로 끝.
            setObj(res.data)
        })
    }, [])

    // 데이터를 불러오기 전까지(배열이 비어있는 동안) Loading 메시지 혹은 스피너를 화면에 출력
    if (obj.length === 0) {
        return(
            <div className="text-4xl">Loading . . . . . . .</div>
        )
    }

    return ( 
        <ul>
            {obj.map(p => 
            <li key={p.id}
            onClick={() => requestViewProduct(p.id)}>
                {p.id} - {p.pname}: {p.price}
            </li>)}
        </ul>
     );
}
 
export default ProductList;