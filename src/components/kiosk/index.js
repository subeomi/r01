import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Kiosk = () => {

    // ProductList에서 받아온 id를 ProductDetail에게 전해주기 위해 상태 생성.
    // 숫자로 주면 useEffect가 한번만 발생.
    // 객체로 감싸서 보내면 매번 같은 값의 새 객체가 가기 때문에 useEffect가 계속 발생
    const [target, setTarget] = useState({pno:0})
    const [wanted, setWanted] = useState(null)

    const requestViewProduct = (id) => {
        console.log("requestViewProduct", id)
        setTarget({pno:id})
    }

    // 1. Cart 껍데기 만듦 
    // 2. Buy버튼을 누르면 Cart에게 데이터를 보내는 함수 생성 - requestBuy
    // 3. ProductDetail에서 ADD Cart버튼의 requestBuy로 받아온 product를 wanted 안에 set 
    const requestBuy = (product) => {
        console.log("requestBuy")
        console.log(product)
        setWanted(product)
    }

    return ( 
        <div>
            <ProductList requestViewProduct={requestViewProduct}></ProductList>
            <ProductDetail target={target} requestBuy={requestBuy}></ProductDetail>
            <Cart {...wanted}></Cart>
        </div>
     );
}
 
export default Kiosk;