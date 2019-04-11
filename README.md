# nuxt_firebase_kpt

Nuxt.js + Firebase で作ったKPTボード。

![](https://s3-ap-northeast-1.amazonaws.com/toybox/images/yutoogi/github/FireKPT_1.png)

![](https://s3-ap-northeast-1.amazonaws.com/toybox/images/yutoogi/github/FireKPT.png)

## Setup

``` bash
yarn add
mv .env_base .env # set Firebase API key
source .env
yarn dev
```

## Deploy

**Amazon S3**

[s3_website](https://github.com/laurilehmijoki/s3_website)を使ってAmazonS3へデプロイ。
事前にs3_websiteをインストールしておく。

```
source .env
yarn generate
bundle exec s3_website push
```

**Firebase hosting**

[Firebase CLI](https://firebase.google.com/docs/cli/?hl=ja) を使って [Firebase Hosting](https://firebase.google.com/docs/hosting/?hl=ja) へデプロイ。
事前にFirebase CLIをインストールしておく。

```
yarn generate
firebase deploy
```