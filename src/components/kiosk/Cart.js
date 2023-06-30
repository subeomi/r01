import { useEffect, useState } from "react";

const Cart = ({id, pname, price}) => {

    const [items, setItems] = useState([])

    console.log("Cart >>> ", id, pname, price)

    // 새로운 상품이 왔으니 useEffect
    useEffect(() => {

        console.log("Cart useEffect. . . . .")
        // 처음에 id: undefined로 가져오기 때문
        if(!id || id === 0){
            return
        }
        setItems([...items, {id, pname, price, qty:1}])

    // id, pname, price가 변경 시 useEffect 실행
    }, [id, pname, price])

    return ( 
        <div>
            <div className="text-5xl">cart</div>
            <div>
                <ul>
                    {/* 람다식은 기본이 return. => 뒤에 {}로 감싸면 return 없이 반환 x */}
                    {items.map( (cartItem, idx) => 
                        <li key={idx}>{cartItem.id} - {cartItem.pname}: {cartItem.price} - {cartItem.qty}</li>
                    )}
                </ul>
            </div>
        </div>
     );
}
 
export default Cart;