# nuxt_firebase_kpt

Nuxt.js + Firebase で作ったKPTボード。

![](https://s3-ap-northeast-1.amazonaws.com/toybox/images/yutoogi/github/FireKPT_1.png)

![](https://s3-ap-northeast-1.amazonaws.com/toybox/images/yutoogi/github/FireKPT.png)

## Setup

``` bash
$ yarn add
$ mv .env_base .env # set Firebase API key
$ yarn dev
```

## Deploy

[s3_website](https://github.com/laurilehmijoki/s3_website)を使ってAmazonS3へデプロイ。

```
npm run generate
bundle exec s3_website push
```

**memo**

※ npm run generateで生成されたdist以下の静的ファイルには開発時に環境変数から読み込んでいたFirebaseの認証情報が含まれていなかったので、一時的にfirebase.jsに認証情報を直書きしてgenerateした。
