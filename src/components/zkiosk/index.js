import { useState } from "react"
import ZProductList from "./ZProductList"
import ZCart from "./ZCart"

const ZKiosk = () => {

    const [items, setItems] = useState([])

    const buyProduct = (product) => {
        console.log("buy product...", product)
        // 해당 상품이 카트에 있는가?
        // 현재 items에 담긴 상품의 번호와 가져온 상품의 번호가 같은 상품만 필터링
        const targetArr = items.filter(item => item.pno === product.pno)

        // 중복상품 배열이 텅텅 비었을 때
        // 기존 상품 목록에, 새 상품 추가
        if(targetArr.length === 0 ){
            setItems([...items, {...product, qty: 1}])
            return
        }

        // 기존상품과 가져온상품이 일치하다는 결과가 나왔을 때(중복상품)
        // 가져온 상품이 하나밖에 없기 때문에 중복상품도 하나. 때문에 [0]번째 인덱스의 상품갯수 += 1
        targetArr[0].qty += 1
        setItems([...items])
        
    }

    const viewProduct = () => {
        console.log("view product...")
    }

    const changeQty = (pno, amount) => {
        console.log("change Qty...")

        const targetItem = items.filter(item => item.pno === pno)[0]
        targetItem.qty += amount

        if(targetItem.qty === 0){

            setItems(items.filter(item => item.pno !== pno))
            return
        }
        setItems([...items])
    }

    return ( 
        <>
        <ZProductList buyProduct={buyProduct} viewProduct={viewProduct}></ZProductList>
        <ZCart arr={items} changeQty={changeQty}></ZCart>
        </>
     );
}
 
export default ZKiosk;
