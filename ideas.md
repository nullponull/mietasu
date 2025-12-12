# みえタス LPデザインコンセプト

## デザイン哲学の選択

### 選択したアプローチ：Trust & Intelligence (信頼と知性)

**Design Movement**: Modern Enterprise Tech / Neo-Swiss Style
**Core Principles**:
1. **Clarity & Precision**: 情報の透明性と正確さを視覚的に表現。余計な装飾を削ぎ落とし、コンテンツを際立たせる。
2. **Security & Stability**: 堅牢なセキュリティと安定性を、落ち着いた配色とグリッドレイアウトで表現。
3. **Human-Centric AI**: AIの冷たさを排除し、人間の業務を支援する温かみのある知性を表現。

**Color Philosophy**:
- **Primary**: Deep Navy (#0F172A) - 信頼、安定、知性、深海のような静けさ（セキュリティ）
- **Secondary**: Electric Blue (#3B82F6) - テクノロジー、先進性、エネルギー
- **Accent**: Emerald Green (#10B981) - 安全、成功、成長
- **Background**: Off-White / Light Gray (#F8FAFC) - 清潔感、読みやすさ

**Layout Paradigm**:
- **Asymmetric Grid**: 左右非対称のグリッドを使用し、動的でありながら秩序あるレイアウト。
- **Card-Based UI**: 情報をカードに整理し、ナレッジベースの構造化されたデータを想起させる。
- **Split Screen**: ファーストビューなどで画面を分割し、メッセージとビジュアルを対比させる。

**Signature Elements**:
- **Glassmorphism**: すりガラスのような効果を使用し、情報の層（レイヤー）と透明性を表現。
- **Abstract Data Flow**: データの流れを抽象化したラインやドットのアニメーション。
- **Clean Typography**: 可読性の高いサンセリフ体を使用し、情報の階層を明確にする。

**Interaction Philosophy**:
- **Micro-interactions**: ボタンのホバーやスクロールに応じた微細な動きで、システムの応答性を表現。
- **Smooth Transitions**: 画面遷移や要素の表示を滑らかにし、シームレスな体験を提供。

**Animation**:
- **Fade-in & Slide-up**: コンテンツが下からふわっと浮き上がるようなアニメーションで、上品さを演出。
- **Parallax**: スクロールに応じた視差効果で、奥行きを感じさせる。

**Typography System**:
- **Headings**: Noto Sans JP (Bold) - 力強く、信頼感のある見出し。
- **Body**: Noto Sans JP (Regular) - 読みやすく、ニュートラルな本文。
- **Monospace**: JetBrains Mono - コードやデータ、技術的な要素に使用し、エンジニアリングの信頼性を表現。

---

## ページ構成案

1. **Hero Section**:
   - キャッチコピー：「クラウドに情報を渡さない、唯一のAIナレッジ基盤」
   - ビジュアル：抽象的なデータフローとシールド（セキュリティ）の融合イメージ
   - CTA：お問い合わせ / 資料請求

2. **Problem & Solution (Before/After)**:
   - 左右比較レイアウト
   - 課題（Before）と解決策（After）を対比
   - アイコンと短いテキストで視覚的に分かりやすく

3. **Value Proposition (3つの柱)**:
   - オンプレミス完結
   - 議事録自動化
   - ナレッジ統合
   - カード型レイアウトで並列表示

4. **Comparison Table**:
   - 具体的な競合製品（Notion, Confluence等）との比較
   - チェックマークと×印で明確に差別化
   - みえタスの列を強調（背景色や影で浮き立たせる）

5. **Use Cases**:
   - タブ切り替えで複数のユースケースを表示（製造業、金融、自治体など）
   - 具体的なストーリーと効果（数値）

6. **How it Works (Flow)**:
   - ステップバイステップのフロー図
   - アニメーションでデータの流れを表現

7. **Trust & Security**:
   - セキュリティ機能のアイコン一覧
   - 信頼性を高めるメッセージ

8. **Footer**:
   - サイトマップ、連絡先、著作権表示

---

## 実装計画

1. **Global Styles**: Tailwind CSSの設定、フォントの読み込み、カラーパレットの定義。
2. **Components**:
   - Button (Primary, Secondary, Outline)
   - Card (Feature Card, Use Case Card)
   - Section (Container, Background)
   - Typography (H1, H2, H3, Body, Caption)
3. **Sections**:
   - Hero
   - ProblemSolution
   - Features
   - Comparison
   - UseCases
   - Flow
   - Footer
4. **Page Assembly**: Homeページへの組み込み。
5. **Refinement**: アニメーション、レスポンシブ対応、微調整。
