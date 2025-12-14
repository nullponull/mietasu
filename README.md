# みえタス (Mietasu) - 次世代オンプレミスAI・ナレッジ基盤 LP & デモモックアップ

「みえタス」のランディングページ(LP)およびデモ環境のモックアッププロジェクトです。
React + TypeScript + Vite + Tailwind CSS で構築されています。

## プロジェクト概要

クラウドに情報を渡さない、完全オンプレミス型のAIナレッジ基盤「みえタス」のWebサイトおよびデモアプリケーションのフロントエンド実装です。

### 主な機能

1.  **ランディングページ (LP)**
    *   ヒーローセクション（アニメーション付き）
    *   機能紹介
    *   他社比較テーブル
    *   導入事例
    *   料金プラン
    *   導入フロー
    *   お問い合わせフォーム（モック）

2.  **デモ環境 (Mockup)**
    *   **ダッシュボード**: ナレッジ活用状況の可視化
    *   **ナレッジベース**: ドキュメント管理、検索
    *   **議事録・録音**: 音声入力、AI要約（シミュレーション）
    *   **AIチャット**: ナレッジベースに基づくQA（シミュレーション）
    *   **設定・ユーザー**: ユーザー管理、セキュリティ設定

## 技術スタック

*   **Frontend Framework**: React 18
*   **Build Tool**: Vite
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **UI Components**: shadcn/ui (Radix UI based)
*   **Routing**: wouter
*   **Icons**: Lucide React
*   **Animation**: Framer Motion
*   **Charts**: Recharts

## 開発環境のセットアップ

### 必要要件

*   Node.js >= 18.0.0
*   pnpm >= 8.0.0

### インストールと起動

1.  リポジトリのクローン
    ```bash
    git clone https://github.com/nullponull/mietasu.git
    cd mietasu
    ```

2.  依存関係のインストール
    ```bash
    pnpm install
    ```

3.  開発サーバーの起動
    ```bash
    pnpm dev
    ```
    ブラウザで `http://localhost:3000` にアクセスしてください。

4.  ビルド
    ```bash
    pnpm build
    ```

## ディレクトリ構成

```
client/
  src/
    components/     # 共通コンポーネント (DemoLayoutなど)
    pages/
      demo/         # デモ環境の各ページ (Dashboard, Chat, etc.)
      Home.tsx      # ランディングページ
    styles/         # グローバルスタイル
    App.tsx         # ルーティング設定
```

## デモ機能について

デモ環境はモックアップであり、実際のバックエンドAPIやAIモデルとは通信しません。
チャットや議事録要約の応答は、フロントエンド側でシミュレートされた固定または簡易ロジックによる応答となります。

## ライセンス

MIT License

## テスト (Playwright Agents)

本プロジェクトでは、E2Eテストフレームワークとして Playwright を採用しており、Playwright Agents (Planner, Generator, Healer) に対応した構成になっています。

### テストの実行

以下のコマンドでテストを実行できます：

```bash
pnpm exec playwright test
```

### Playwright Agents のセットアップ

`specs/` ディレクトリには、Playwright Agents がテストを生成するためのシナリオ（Markdown形式）が格納されています。

*   `specs/basic-operations.md`: 基本的なナビゲーションや操作のシナリオ定義
*   `tests/seed.spec.ts`: 環境初期化用のシードテスト

Playwright Agents を活用する（VS Code拡張機能やCLIが必要）ことで、これらのMarkdown仕様書から自動的にテストコードを生成・保守することが可能です。
