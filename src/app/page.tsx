import { Item } from "@/utils/types";


// 商品データを取得
const getAllItems = async() => {
    const response = await fetch(`${process.env.PUBLIC_URL}/api/item/getall`, {cache: "no-store"})    
    const jsonData = await response.json()
    const items: Item[] =  jsonData.allItems
    return items
}

// 価格をフォーマット
const getFormattedPrice = async (price:number) => {
    return new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
             }).format(price)
}

// Home ページ
const Home = async () => {
  const items = await getAllItems()

  return (
        <div className="container">
            <h1>商品リスト</h1>
            <div className="filter-container">
                <input type="text" id="search-input" placeholder="商品名で検索..."/>
                <select id="category-filter">
                    <option value="all">すべてのカテゴリ</option>
                    <option value="electronics">電化製品</option>
                    <option value="clothing">衣類</option>
                    <option value="food">食品</option>
                    <option value="books">書籍</option>
                </select>
                <button id="sort-price-btn">価格順</button>
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