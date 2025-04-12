import { Item } from "@/utils/types";

// サンプル商品データ
const items: Item[] = [
    {
        id: '1',
        itemName: '4Kテレビ 55インチ',
        category: 'electronics',
        categoryName: '電化製品',
        price: 89800,
        description: '高精細な4K解像度で映像を楽しめる大画面テレビ。スマート機能搭載。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/TV.png'
    },
    {
        id: '2',
        itemName: 'ノートパソコン',
        category: 'electronics',
        categoryName: '電化製品',
        price: 128000,
        description: '最新のプロセッサーと高速SSDを搭載した軽量ノートパソコン。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/laptop.png'
    },
    {
        id: '3',
        itemName: 'コットンTシャツ',
        category: 'clothing',
        categoryName: '衣類',
        price: 2980,
        description: '肌触りの良い100%コットン素材のシンプルなTシャツ。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/T-shirt.png'
    },
    {
        id: '4',
        itemName: 'デニムジーンズ',
        category: 'clothing',
        categoryName: '衣類',
        price: 6980,
        description: '耐久性のある高品質デニム素材のジーンズ。スタイリッシュなデザイン。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/jeans.png'
    },
    {
        id: '5',
        itemName: '有機野菜セット',
        category: 'food',
        categoryName: '食品',
        price: 3200,
        description: '無農薬で栽培された新鮮な季節の野菜セット。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/vegetables.png'
    },
    {
        id: '6',
        itemName: 'プレミアムコーヒー豆',
        category: 'food',
        categoryName: '食品',
        price: 1800,
        description: '厳選された高品質のコーヒー豆。深いコクと豊かな香り。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/coffee-beans.png'
    },
    {
        id: '7',
        itemName: 'ベストセラー小説',
        category: 'books',
        categoryName: '書籍',
        price: 1500,
        description: '話題のベストセラー小説。感動のストーリーが読者を魅了します。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/novel.png'
    },
    {
        id: '8',
        itemName: '料理レシピ本',
        category: 'books',
        categoryName: '書籍',
        price: 2400,
        description: '初心者から上級者まで楽しめる多彩なレシピを掲載。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/recipe-book.png'
    },
    {
        id: '9',
        itemName: 'ワイヤレスイヤホン',
        category: 'electronics',
        categoryName: '電化製品',
        price: 15800,
        description: 'ノイズキャンセリング機能付きの高音質ワイヤレスイヤホン。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/wireless-earphones.png'
    },
    {
        id: '10',
        itemName: 'スマートウォッチ',
        category: 'electronics',
        categoryName: '電化製品',
        price: 32000,
        description: '健康管理機能と通知機能を搭載したスタイリッシュなスマートウォッチ。',
        image: 'https://tnobep-next-serverless.s3.ap-northeast-1.amazonaws.com/smartwatch.png'
    }
];
// GET メソッド時に実行する関数
export async function GET() {
  const response = {"allItems": items}
  return Response.json(response)
}
