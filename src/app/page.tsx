import { Princess_Sofia } from "next/font/google";
import Image from "next/image"
import Link  from "next/link"

// サンプル商品データ
const products = [
    {
        id: 1,
        name: '4Kテレビ 55インチ',
        category: 'electronics',
        categoryName: '電化製品',
        price: 89800,
        description: '高精細な4K解像度で映像を楽しめる大画面テレビ。スマート機能搭載。',
        image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        id: 2,
        name: 'ノートパソコン',
        category: 'electronics',
        categoryName: '電化製品',
        price: 128000,
        description: '最新のプロセッサーと高速SSDを搭載した軽量ノートパソコン。',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
    },
    {
        id: 3,
        name: 'コットンTシャツ',
        category: 'clothing',
        categoryName: '衣類',
        price: 2980,
        description: '肌触りの良い100%コットン素材のシンプルなTシャツ。',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 4,
        name: 'デニムジーンズ',
        category: 'clothing',
        categoryName: '衣類',
        price: 6980,
        description: '耐久性のある高品質デニム素材のジーンズ。スタイリッシュなデザイン。',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1626&q=80'
    },
    {
        id: 5,
        name: '有機野菜セット',
        category: 'food',
        categoryName: '食品',
        price: 3200,
        description: '無農薬で栽培された新鮮な季節の野菜セット。',
        image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80'
    },
    {
        id: 6,
        name: 'プレミアムコーヒー豆',
        category: 'food',
        categoryName: '食品',
        price: 1800,
        description: '厳選された高品質のコーヒー豆。深いコクと豊かな香り。',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 7,
        name: 'ベストセラー小説',
        category: 'books',
        categoryName: '書籍',
        price: 1500,
        description: '話題のベストセラー小説。感動のストーリーが読者を魅了します。',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 8,
        name: '料理レシピ本',
        category: 'books',
        categoryName: '書籍',
        price: 2400,
        description: '初心者から上級者まで楽しめる多彩なレシピを掲載。',
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80'
    },
    {
        id: 9,
        name: 'ワイヤレスイヤホン',
        category: 'electronics',
        categoryName: '電化製品',
        price: 15800,
        description: 'ノイズキャンセリング機能付きの高音質ワイヤレスイヤホン。',
        image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    },
    {
        id: 10,
        name: 'スマートウォッチ',
        category: 'electronics',
        categoryName: '電化製品',
        price: 32000,
        description: '健康管理機能と通知機能を搭載したスタイリッシュなスマートウォッチ。',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    }
  ]

// 商品データを取得
const getAllProducts = async() => {
    return products
}

// 価格をフォーマット
const getFormattedPrice = async (price:number) => {
    return new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
             }).format(price)
}

export default async function Home() {
  const products = await getAllProducts()

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
                {products.map(product => 
                
                <div className="product-card" key={product.id}>
                    <img src={product.image}  alt="A" className="product-image" />
                    <div className="product-info">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-category">{product.category}</p>
                        <p className="product-price">{getFormattedPrice(product.price)}</p>
                        <p className="product-description">{product.description}</p>
                    </div>
                </div>

                )}
            </div>
        </div>
  );
}
