# みえタス (Mietasu) LP & Demo Mockup

「みえタス」のランディングページおよびデモ環境のモックアッププロジェクトです。
React + Vite + Tailwind CSS で構築されています。

## 🚀 動作環境

- Node.js: v18以上
- pnpm: v8以上 (推奨)
- Docker (オプション)

## 🛠️ ローカルでの起動方法

開発モードで起動する場合の手順です。

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/nullponull/mietasu.git
   cd mietasu
   ```

2. **依存関係のインストール**
   ```bash
   pnpm install
   # または npm install
   ```

3. **開発サーバーの起動**
   ```bash
   pnpm dev
   # または npm run dev
   ```

4. **ブラウザで確認**
   `http://localhost:5173` (ポート番号は状況により変わる場合があります) にアクセスしてください。

## 🐳 Dockerでの起動方法

本番環境に近い構成（Nginx配信）で確認する場合の手順です。
レイアウト崩れが発生する場合は、こちらの方法での起動を推奨します。

1. **Dockerイメージのビルド**
   ```bash
   docker build -t mietasu-lp .
   ```

2. **コンテナの起動**
   ```bash
   docker run -p 8080:80 mietasu-lp
   ```

3. **ブラウザで確認**
   `http://localhost:8080` にアクセスしてください。

## ⚠️ トラブルシューティング

### レイアウトが崩れる場合
CSSファイルが正しく読み込まれていない可能性があります。以下の点を確認してください。

1. **ブラウザのキャッシュクリア**
   - `Ctrl + Shift + R` (Windows/Linux) または `Cmd + Shift + R` (Mac) で強制リロードしてください。

2. **ビルドアーティファクトの確認 (ローカル起動時)**
   - `dist` フォルダや `node_modules/.vite` キャッシュが古いまま残っている場合があります。
   - 一度削除して再インストールをお試しください。
     ```bash
     rm -rf node_modules dist
     pnpm install
     pnpm dev
     ```

3. **Docker環境での確認**
   - Docker環境ではNginxの設定 (`nginx.conf`) により、SPAのルーティングやMIMEタイプが適切に処理されるよう構成しています。
   - ローカル環境で再現しない問題がDocker環境で発生する場合は、ブラウザのデベロッパーツール (F12) の「Network」タブで、`.css` ファイルが 404 エラーになっていないか確認してください。

### 画面が真っ白になる場合
- このプロジェクトはSPA (Single Page Application) です。
- URLのパス（例: `/demo/dashboard`）に直接アクセスした場合、サーバー側の設定によっては 404 になることがあります。
- Docker起動時は `nginx.conf` でこれを回避していますが、簡易的なHTTPサーバーでホストする場合は `index.html` にフォールバックする設定が必要です。

## 📁 プロジェクト構成

```
.
├── src/
│   ├── pages/          # 各ページコンポーネント (Home, Demoなど)
│   ├── components/     # 共通コンポーネント
│   ├── styles/         # CSSファイル
│   ├── App.tsx         # ルーティング設定
│   └── main.tsx        # エントリーポイント
├── public/             # 静的アセット (画像など)
├── Dockerfile          # Dockerビルド設定
├── nginx.conf          # Nginx設定
└── vite.config.ts      # Vite設定
```
