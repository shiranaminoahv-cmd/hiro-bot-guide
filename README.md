# HIRO BOT Webマニュアル

ダークテーマの技術ドキュメント風にした、GitHub Pages用の静的サイトです。
サーバーやデータベースは不要です。Discord Bot本体とも独立して動作します。

## ファイル構成

```text
hiro-bot-guide/
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── content.js
    └── app.js
```

## GitHub Pagesで公開する手順

1. GitHubにログインします。
2. 右上の「＋」→「New repository」を選びます。
3. Repository nameを `hiro-bot-guide` などにします。
4. Publicを選び、「Create repository」を押します。
5. このフォルダ内の `index.html`、`README.md`、`assets` フォルダをリポジトリ直下にアップロードします。
   - ZIPファイルそのものを置くだけでは公開されません。必ず解凍した中身をアップロードしてください。
6. リポジトリの「Settings」→「Pages」を開きます。
7. Build and deployment の Source を「Deploy from a branch」にします。
8. Branchを `main`、フォルダを `/(root)` にして「Save」を押します。
9. 数分後、Pages欄に表示されたURLを開きます。

公開URLは通常、次の形式です。

`https://あなたのGitHubユーザー名.github.io/hiro-bot-guide/`

## DiscordにURLを掲載

公開できたら、Discordの案内チャンネルに次のような短い案内を投稿します。

> 📘 **篠澤広 Bot の使い方**
> コマンド・記憶機能・散歩記録などの説明はこちら：
> `https://あなたのGitHubユーザー名.github.io/hiro-bot-guide/`
>
> マニュアルは随時更新されます。

## マニュアル本文の更新方法

本文は `assets/content.js` にまとまっています。

1. GitHubリポジトリで `assets/content.js` を開きます。
2. 鉛筆アイコン（Edit this file）を押します。
3. 該当ページの文章を編集します。
4. 下部の「Commit changes」を押します。
5. 数分後、Webページに反映されます。

左メニューに新しいページを追加する場合は、`index.html` の `#navigation` にボタンを追加し、`assets/content.js` の `pages` に同じ `data-page` と同じキーのページ定義を追加してください。

## 更新日の変更

`assets/content.js` 冒頭の

`updated: "2026-11-21"`

を更新してください。

## 注意事項

- Discord Botのトークン、`.env`、SQLiteデータベース、個人情報をこのリポジトリにアップロードしないでください。
- GitHub Pagesは公開サイトです。誰でもURLを知れば閲覧できる内容だけを掲載してください。
- このマニュアルのコマンド例は、現在把握できている機能をもとにした初期案です。実際の `main.py` のコマンド判定と異なる箇所は、稼働中の実装に合わせて編集してください。
- 予定・通知、過去の会話要約による話題再利用は、実装後に該当ページを更新する想定です。


## 更新履歴ページ

サイトの左メニューに「更新履歴」を追加しています。更新内容は `assets/content.js` の `changelog` ページに追記してください。サイドメニューの項目は `index.html` で編集できます。
