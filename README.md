

```
TOKEN=`curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`  && curl -H "X-aws-ec2-metadata-token: $TOKEN" http://169.254.169.254/latest/meta-data/public-hostname
```


https://stackoverflow.com/questions/47754183/typescript-cannot-add-headers-to-a-fetch-api-using-react-native


http://ec2-18-178-87-70.ap-northeast-1.compute.amazonaws.com:3000/


* メモ
    -  Amplify UI の Cognito の UI は元のページの描画を一度実行してから認証画面を出す。
    - その後、認証を終えると、すでに描画した後のページを表示する
    - よって、React や Next.js の場合、useEffectは 認証前に実行されてしまい、認証後にページが表示されても useEffect は実行されない(ただし return 文は実行される）
    - また、認証後の IdToken を取得するコードを useEffect に記述しても認証前に useEffect が実行されてしまうので、Tokenを取得できない
    - userEffect 内で API を投げており、そのヘッダーに Token が必要な場合はどうすべきか
        - return 文の中で token を取得し　Stateを更新---> useEffectの第2引数にstateの変数指定
        - これにより、認証後に return 文が実行されるとき、token ステートを更新し、それをトリガーに useEffectを再実行できる
        - useEffect では State の token を参照する