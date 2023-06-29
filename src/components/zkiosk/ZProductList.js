const ZProductList = ({ buyProduct, viewProduct }) => {

    const products = [
        { pno: 1, pname: '마끼야또', price: 7000, imgFile: 'c1.png' },
        { pno: 2, pname: '프라페', price: 6000, imgFile: 'c2.png' },
        { pno: 3, pname: '콜드브루라떼', price: 9000, imgFile: 'c3.png' },
        { pno: 4, pname: '아이스크림카푸치노', price: 8000, imgFile: 'c4.png' },
        { pno: 5, pname: '아이스마끼야또', price: 7000, imgFile: 'c5.png' },
        { pno: 6, pname: '카라멜라떼', price: 6000, imgFile: 'c6.png' },
        { pno: 7, pname: '치즈크림플랫화이트(I)', price: 9000, imgFile: 'c7.png' },
        { pno: 8, pname: '치즈크림플랫화이트(H)', price: 8000, imgFile: 'c8.png' },
        { pno: 9, pname: '더블시그니처', price: 7000, imgFile: 'c9.png' },
        { pno: 10, pname: '바닐라플로트', price: 6000, imgFile: 'c10.png' },
        { pno: 11, pname: '아인슈페너', price: 9000, imgFile: 'c11.png' },
        { pno: 12, pname: '카페모카', price: 8000, imgFile: 'c12.png' }
    ]

    return (
        <div className="w-full bg-orange-100 text-3xl m-12 p-10">
            <ul>
                {products.map(( p ) =>
                    <li key={p.pno}>
                        {p.pname}
                        <button 
                        className="bg-red-400"
                        onClick={() => buyProduct({...p})}
                        >BUY</button>
                    </li>)}
            </ul>
        </div>
    );
}

export default ZProductList;