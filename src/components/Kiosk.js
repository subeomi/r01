import { useState } from "react";


const products = [
    { pno: 1, pname: '마끼야또', price: 7000, imgFile: 'c1.png'},
    { pno: 2, pname: '프라페', price: 6000, imgFile: 'c2.png' },
    { pno: 3, pname: '콜드브루라떼', price: 9000, imgFile: 'c3.png' },
    { pno: 4, pname: '아이스크림카푸치노', price: 8000, imgFile: 'c4.png' },
    { pno: 5, pname: '아이스마끼야또', price: 7000, imgFile: 'c5.png'},
    { pno: 6, pname: '카라멜라떼', price: 6000, imgFile: 'c6.png' },
    { pno: 7, pname: '치즈크림플랫화이트(I)', price: 9000, imgFile: 'c7.png' },
    { pno: 8, pname: '치즈크림플랫화이트(H)', price: 8000, imgFile: 'c8.png' },
    { pno: 9, pname: '더블시그니처', price: 7000, imgFile: 'c9.png'},
    { pno: 10, pname: '바닐라플로트', price: 6000, imgFile: 'c10.png' },
    { pno: 11, pname: '아인슈페너', price: 9000, imgFile: 'c11.png' },
    { pno: 12, pname: '카페모카', price: 8000, imgFile: 'c12.png' }
]

const getTotal = (arr) => {
    if(!arr || arr.length === 0) {
        return 0
    }
    let sum = 0

    // reduce
    for(const ele of arr){
        sum += (ele.price * ele.qty)
    }
    return sum
}

const Kiosk = () => {

    const [items, setItems] = useState([]);

    const handleClickBuy = (product) => {
        console.log({ ...product, qty: 1 })

        const result = items.filter(ele => ele.pno === product.pno)

        console.log("result", result)

        if (result.length === 0) {
            setItems([...items, { ...product, qty: 1 }])
            return
        }

        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])
    }

    const handleClickQty = (pno, amount) => {
        console.log("pno", pno, "amount", amount)

        // 필터에 걸린 배열의 0번째 인덱스 값
        const target = items.filter(item => item.pno === pno)[0]

        console.log(target)

        // increse
        if(amount === 1){
            target.qty += 1
            setItems([...items])
        } else {
            if(target.qty === 1){
                // filter 결과값이 배열이기 때문에 바로 상태로 사용
                setItems(items.filter(ele => ele.pno !== pno))
            } else {
                target.qty -= 1
                setItems([...items])
            }
        }

    }

    return (
        <div className="w-full h-[100vh] flex font-sans bg-black">
            <div className="w-7/8 ">
                <div className="text-4xl font-extrabold text-white flex ">
                    <img className="w-auto h-12" src={`${process.env.PUBLIC_URL}/logo_2.png`}/>
                    </div>
                <ul className="flex flex-wrap justify-center">
                    {products.map(p =>
                        <li
                            key={p.pno}
                            className="text-base m-3 p-3 bg-m2c w-48 text-center"
                            onClick={() => { handleClickBuy(p) }}
                        >
                            <img className="h-32 w-32 m-auto"
                            src={`${process.env.PUBLIC_URL}/${p.imgFile}`}/>
                            {p.pname}<br/>
                            <p className="text-xs">￦ {p.price}</p>
                            {/* <button className="border-2 m-2 p-2 rounded-sm border-black">BUY</button> */}
                        </li>
                    )}
                </ul>
            </div>
            <div className="w-1/3">
                <div className="text-4xl font-extrabold text-white">
                <img className="w-auto h-14" src={`${process.env.PUBLIC_URL}/cart.jpg`}/>
                </div>
                <ul>
                    {items.map((item, idx) =>
                        <li key={idx} className="border-2 text-white h-30">
                            <div className="flex text-lg m-2 p-4 justify-between h-6">
                                <div>{item.pname}</div>
                                <div>\ {item.price * item.qty}</div>
                            </div>
                            <div className="flex justify-center text-2xl">
                                <button className="m-6 rounded-lg bg-orange-400 p-2 w-10"
                                onClick={() => handleClickQty(item.pno, 1)}
                                >
                                    +
                                </button>

                                <p className="m-6 text-white p-2">{item.qty}</p>

                                <button className="m-6 rounded-lg bg-orange-400 p-2 w-10"
                                onClick={() => handleClickQty(item.pno, -1)}
                                >
                                    -
                                </button>
                            </div>
                        </li>
                    )}
                </ul>

                <div className="text-2xl justify-between text-white flex">
                        <div>합계:</div>
                        <div>\ {getTotal(items)}</div>
                </div>

            </div>
        </div>
    );
}

export default Kiosk;