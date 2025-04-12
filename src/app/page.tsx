"use client"
import { Item } from "@/utils/types";
import  {useState, useEffect} from "react"

// Home ページ
const Home =  () => {

    const [itemName, setItemName] = useState("")
    const [category, setCategory] = useState("all")
    const [items, setItems] = useState([] as Item[])
    //const [items, setItems] = useState(display_items)

    useEffect( () => {
        const getItems = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/getall`, {cache: "no-store"})
            const jsonData = await response.json()
            const display_items = jsonData.allItems
            setItems(display_items)
        }
        getItems()

    },[])


    // 価格をフォーマット
    const getFormattedPrice =  (price:number) => {
        return new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
             }).format(price)
    }

    return (
            <div className="container">
                <h1>商品リスト</h1>
                
                <div className="filter-container">
                    <input value={itemName} onChange={(e)=> setItemName(e.target.value)} type="text" id="search-input" placeholder="商品名で検索..."/>
                    <select id="category-filter"
                        value={category}
                        onChange={(e) => {
                        setCategory(e.target.value);
                        }}
                    >
                        <option value="all">すべてのカテゴリ</option>
                        <option value="electronics">電化製品</option>
                        <option value="clothing">衣類</option>
                        <option value="food">食品</option>
                        <option value="books">書籍</option>
                    </select>
                    <button id="search-btn">検索実行</button>
                </div>

                <div id="products-container" className="products-container">
                    {items.map( (item) => 
                    <div className="product-card" key={item.id}>
                        <img src={item.image}  alt="A" className="product-image" />
                        <div className="product-info">
                            <h3 className="product-name">{item.name}</h3>
                            <p className="product-category">{item.category}</p>
                            <p className="product-price">{getFormattedPrice(item.price)}</p>
                            <p className="product-description">{item.description}</p>
                        </div>
                    </div>

                    )}
                </div>
            </div>
    );
}

export default Home