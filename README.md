

```
TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`  && curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-hostname
```


https://stackoverflow.com/questions/47754183/typescript-cannot-add-headers-to-a-fetch-api-using-react-native


http://ec2-18-178-87-70.ap-northeast-1.compute.amazonaws.com:3000/

```
   // Token の取得
                const my_token: string = (await fetchAuthSession()).tokens?.idToken?.toString() || ""
                // リクエストヘッダーの生成
                const requestHeaders: HeadersInit = new Headers();
                requestHeaders.set('Authorization', my_token);   
                // 商品取得 API 発行  
                const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/item/getall`, {method: "GET", headers: requestHeaders, cache: "no-store"})
```

* メモ
    -  Amplify UI の Cognito の UI は元のページの描画を一度実行してから認証画面を出す。
    - その後、認証を終えると、すでに描画した後のページを表示する
    - よって、React や Next.js の場合、useEffectは認証前に実行されてしまい、認証後にページが表示されてもuseEffectは実行されない（return 文は実行される）
    - また、認証後の IdToken を取得するコードをuseEffectに記述しても認証前にuseEffectが実行されてしまうので、Tokenを取得できない
    - よって、return 文の中にIdToken を取得すればいいのだが、userEffect 内でAPIを投げており、そのヘッダーにTokenが必要な場合はどうすべきか
        - return 文で Stateを更新---> userEffectの第2引数にstateの変数指定をやってみるか