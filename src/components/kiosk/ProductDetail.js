import axios from "axios";
import { useEffect, useState } from "react";

// 들어올 데이터와 같은 케이스의 빈 initState를 미리 만들어 둔다.
const initState = {
    id:0,
    pname:'',
    price:0
}

const ProductDetail = ({target, requestBuy}) => {

    // useState에 빈 껍데기(initState) 땜빵시키기.
    const [product, setProduct] = useState(initState)

    useEffect(() => {

        console.log("useEffect. . . . .", target)

        const id = target.pno

        if(id !== 0){
            axios.get(`http://localhost:80/products/${id}`).then(res => {
                setProduct(res.data)
            })
        }
    // useEffect 2번째 파라미터 - 조건
    // 빈 배열 -> 최초 렌더링 시
    // [id] -> id가 변경 시
    }, [target])

    return ( 
        <div>
            <div>Product Detail</div>
            <div>
                <div>ID {product.id}</div>
                <div>PNAME {product.pname}</div>
                <div>PRICE {product.price}</div>
            </div>

            {/* requestBuy를 받아왔으니 ADD Cart 버튼을 만들고 onClick으로 requestBuy(상품) 삽입 */}
            <div>
                <button className="bg-red-500 text-white"
                onClick={() => requestBuy(product)}
                >
                ADD Cart</button>
            </div>
        </div>
     );
}
 
export default ProductDetail;