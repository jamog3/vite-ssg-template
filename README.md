# 自分用 vite-ssg のひな形

以下、メモ。

## node.js と yarn をインストール

## npm パッケージをインストール

```
$ yarn install
```

## ファイルの監視

```
$ yarn dev
```

## html

### title, meta タグまわり

`src/helper/Constants.ts` の `DOMAIN`, `TITLE`, `DESCRIPTION` あたりを設定する

各ページごとの設定は、下記が基本の形

```
import head from '@/functions/Head'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead(
  head({
    title: 'hoge',
    description: 'fuga',
    path: useRoute().path
  })
)
```

### ファイルの指定

`@` で `/src` を参照するので、 `@/assets/images/hoge.png` のように指定する

## 納品ファイル生成

`/dist/` にファイルを生成

```
$ yarn run build
```

## ディレクトリ構成

基本的に src を編集

```
├── dist/（納品ファイルがここに生成される）
│
├── node_modules/
│   └── パッケージ各種
│
├── public/（そのまま公開するファイル）
│   └── favicon.png
│
├── src/（ビルド前のソース）
│   ├── assets/
│   │    ├── images/（画像）
│   │    └── styles/（postcssの変数など）
│   ├── components/（vueのコンポーネント）
│   ├── helper/
│   │    └── Constants.ts（定数用）
│   ├── layouts/（vueのレイアウト）
│   └── pages/（各ページはこの配下に作成）
│        └── index.vue（これがトップページになる）
│
├── .git/
├── .gitignore
├── package.json
└── README.md
```

thanks: https://github.com/antfu/vite-ssg
