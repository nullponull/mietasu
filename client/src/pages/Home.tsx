import React from 'react';
import { Check, Shield, Lock, Zap, Database, ArrowRight, X, Server, FileText, MessageSquare, Search } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <img src="/images/logo-symbol.png" alt="Mietasu Logo" className="logo-img" />
            <span>みえタス</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <div className="nav-links">
              <a href="#features">機能</a>
              <a href="#comparison">他社比較</a>
              <a href="#cases">導入事例</a>
              <a href="#pricing">料金プラン</a>
              <a href="#flow">導入フロー</a>
            </div>
            <a href="#/demo" className="btn btn-primary mr-4">デモ画面を見る</a>
            <button className="btn btn-primary">お問い合わせ</button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <img src="/images/hero-bg.png" alt="Background" />
          </div>
          <div className="hero-overlay"></div>
          
          <div className="container hero-content">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="hero-badge">
                  <Shield className="w-4 h-4 mr-2" />
                  次世代オンプレミスAI・ナレッジ基盤
                </div>
                <h1 className="hero-title">
                  クラウドに情報を渡さない、<br />
                  <span className="hero-highlight">唯一のAIナレッジ基盤。</span>
                </h1>
                <p className="hero-desc">
                  会議も、ドキュメントも、チャットも。社内のあらゆる情報を、セキュアな環境で資産に変える。
                  NotionやConfluenceでは実現できない、最高レベルのセキュリティと業務効率化を両立します。
                </p>
                <div className="hero-actions">
                  <button className="btn btn-primary">資料をダウンロード</button>
                  <a href="#/demo" className="btn btn-outline">デモ画面を見る</a>
                  <button className="btn btn-outline">お問い合わせ</button>
                </div>
              </div>

              <div className="mock-ui">
                <div className="mock-window">
                  <div className="mock-header">
                    <div className="window-dots">
                      <div className="dot" style={{backgroundColor: '#ef4444'}}></div>
                      <div className="dot" style={{backgroundColor: '#eab308'}}></div>
                      <div className="dot" style={{backgroundColor: '#22c55e'}}></div>
                    </div>
                    <div className="address-bar">
                      <Lock className="w-3 h-3 mr-2" />
                      secure-local-server/knowledge-base
                    </div>
                    <div style={{marginLeft: 'auto'}} className="flex items-center gap-2 px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-200">
                      <Shield className="w-3 h-3" />
                      100%ローカルで安全
                    </div>
                  </div>
                  <div className="mock-body">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-lg">プロジェクトA 定例会議議事録</h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                        <Check className="w-3 h-3 mr-1" /> AI要約完了
                      </span>
                    </div>
                    
                    <div className="ai-summary">
                      <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-primary">
                        <Zap className="w-4 h-4" /> AIサマリー
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        本日の会議では、新機能のリリーススケジュールについて合意しました。
                        開発チームは来週までにAPIの実装を完了し、QAチームはテスト計画を作成します。
                        セキュリティ要件については、オンプレミス環境での動作検証を追加で行うことが決定しました。
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="border rounded p-3">
                        <div className="text-xs text-gray-500 mb-1">決定事項</div>
                        <div className="text-sm font-medium">API実装完了：12/20</div>
                      </div>
                      <div className="border rounded p-3">
                        <div className="text-xs text-gray-500 mb-1">ネクストアクション</div>
                        <div className="text-sm font-medium">QAテスト計画作成</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">ナレッジベース</div>
                    <div className="font-bold text-sm">自動更新</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">その「情報管理の悩み」、<br/>みえタスが解決します。</h2>
              <p className="section-subtitle">
                セキュリティへの不安や、非効率な手作業から解放され、本来の業務に集中できる環境を提供します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">クラウドへの不安</h3>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-400 mb-1">BEFORE</div>
                  <p className="text-sm text-gray-600">機密情報をクラウドに上げるリスクがあり、便利なAIツールが使えない。</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-primary mb-1">AFTER</div>
                  <p className="text-sm font-medium">完全オンプレミス完結。データが社外に出るリスクゼロで、最新AIを活用可能。</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">議事録作成の負担</h3>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-400 mb-1">BEFORE</div>
                  <p className="text-sm text-gray-600">60分の会議後、30分かけて手作業で議事録作成。抜け漏れも発生。</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-primary mb-1">AFTER</div>
                  <p className="text-sm font-medium">AIが5分で要約・ToDo抽出。作成工数を83%削減し、即座に共有。</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Search className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg">情報の属人化</h3>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-400 mb-1">BEFORE</div>
                  <p className="text-sm text-gray-600">過去の経緯やノウハウが個人のPCや記憶に埋もれ、探せない。</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-xs font-bold text-primary mb-1">AFTER</div>
                  <p className="text-sm font-medium">全情報がナレッジベース化。チャットで質問するだけで、AIが必要な情報を提示。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section id="features" className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">3つのコア機能</h2>
              <p className="section-subtitle">
                セキュリティ、自動化、そして知性。企業のナレッジ活用に必要なすべてを統合しました。
              </p>
            </div>

            <div className="space-y-24">
              {/* Feature 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img src="/images/feature-security.png" alt="Security" className="rounded-xl shadow-lg border border-gray-100" />
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    <Server className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">完全オンプレミス完結</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    データは一切外部に出ません。ローカルLLMとローカル音声認識により、インターネット接続がない閉域網でも動作可能です。
                    機密情報を扱う金融機関や製造業の研究開発部門でも安心してご利用いただけます。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 外部へのデータ送信ゼロ
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 閉域網（イントラネット）での動作保証
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 自社専用の学習モデル構築も可能
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">議事録自動生成</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    会議の録音から文字起こし、要約、ToDo抽出までを全自動で実行。話者分離にも対応し、誰が何を言ったかを正確に記録します。
                    作成された議事録は自動的にナレッジベースに蓄積され、後から検索可能です。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 高精度な日本語音声認識
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 話者分離と重要箇所の自動タグ付け
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 決定事項とToDoの自動抽出
                    </li>
                  </ul>
                </div>
                <div>
                  <img src="/images/feature-voice.png" alt="Voice" className="rounded-xl shadow-lg border border-gray-100" />
                </div>
              </div>

              {/* Feature 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img src="/images/feature-ai.png" alt="AI Chat" className="rounded-xl shadow-lg border border-gray-100" />
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">ナレッジ統合・検索</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    議事録やドキュメントを自動的にナレッジベース化。TeamsやSlackと連携し、チャットから自然言語で社内情報を検索できます。
                    「あの件どうなった？」と聞くだけで、AIが関連する議事録や資料を提示し、回答を作成します。
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 自然言語での高度な検索
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 社内チャットツールとのシームレスな連携
                    </li>
                    <li className="flex items-center text-sm font-medium">
                      <Check className="w-5 h-5 text-green-500 mr-3" /> 回答の根拠となるソースの提示
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">なぜ「みえタス」なのか？</h2>
              <p className="section-subtitle">
                一般的なクラウドツールや、単機能のオンプレミス製品との違いは明確です。
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 text-left font-bold text-gray-600">機能・特徴</th>
                    <th className="p-4 text-center font-bold text-primary bg-blue-50 border-x border-blue-100 w-1/4">みえタス</th>
                    <th className="p-4 text-center font-bold text-gray-600 w-1/5">Notion</th>
                    <th className="p-4 text-center font-bold text-gray-600 w-1/5">Confluence</th>
                    <th className="p-4 text-center font-bold text-gray-600 w-1/5">QuickSolution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">デプロイ環境</td>
                    <td className="p-4 text-center font-bold text-primary bg-blue-50/30 border-x border-blue-100">オンプレミス</td>
                    <td className="p-4 text-center text-gray-600">クラウド</td>
                    <td className="p-4 text-center text-gray-600">クラウド/オンプレ</td>
                    <td className="p-4 text-center text-gray-600">オンプレミス</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">データ送信</td>
                    <td className="p-4 text-center font-bold text-primary bg-blue-50/30 border-x border-blue-100">クラウド送信ゼロ</td>
                    <td className="p-4 text-center text-gray-600">クラウドへ送信</td>
                    <td className="p-4 text-center text-gray-600">クラウドへ送信</td>
                    <td className="p-4 text-center text-gray-600">クラウドへ送信(AI時)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">ローカルLLM搭載</td>
                    <td className="p-4 text-center font-bold text-primary bg-blue-50/30 border-x border-blue-100">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-gray-400"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-400"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-600">△ (外部連携)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">議事録自動生成</td>
                    <td className="p-4 text-center font-bold text-primary bg-blue-50/30 border-x border-blue-100">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-gray-400"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-400"><X className="w-5 h-5 mx-auto" /></td>
                    <td className="p-4 text-center text-gray-400"><X className="w-5 h-5 mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">ナレッジ自動蓄積</td>
                    <td className="p-4 text-center font-bold text-primary bg-blue-50/30 border-x border-blue-100">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                    <td className="p-4 text-center text-gray-600">△ (手動)</td>
                    <td className="p-4 text-center text-gray-600">△ (手動)</td>
                    <td className="p-4 text-center text-gray-600">
                      <Check className="w-5 h-5 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section pricing-section">
          <div className="container">
            <h2 className="section-title">選べる2つの提供形態</h2>
            <p className="section-subtitle">
              セキュリティ要件や運用体制に合わせて、最適なプランをお選びいただけます。
            </p>

            <div className="grid-2" style={{maxWidth: '900px', margin: '0 auto'}}>
              {/* Cloud Plan */}
              <div className="card pricing-card" style={{opacity: 0.8}}>
                <div className="coming-soon">Coming Soon</div>
                <div className="pricing-header">
                  <div className="text-sm font-medium text-gray-500 mb-2">手軽に始めたい企業向け</div>
                  <h3 className="text-2xl font-bold">クラウドプラン</h3>
                  <div className="price">
                    <span className="price-amount">¥10,000</span>
                    <span className="text-gray-500">/月〜</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">現在開発中・事前登録受付中</div>
                </div>
                <div className="pricing-content">
                  <ul className="feature-list">
                    <li><Check className="check-icon" /> 最短3営業日で利用開始</li>
                    <li><Check className="check-icon" /> サーバー管理・保守不要</li>
                    <li><Check className="check-icon" /> 常に最新のAIモデルを利用可能</li>
                    <li><Check className="check-icon" /> セキュアなプライベートクラウド環境</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <button className="btn btn-outline btn-full" disabled>準備中</button>
                </div>
              </div>

              {/* On-Premise Plan */}
              <div className="card pricing-card" style={{borderColor: 'var(--primary-color)', transform: 'translateY(-1rem)'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: 'var(--primary-color)'}}></div>
                <div className="popular-tag">受付中</div>
                <div className="pricing-header">
                  <div className="text-sm font-medium text-primary mb-2">セキュリティ重視の企業向け</div>
                  <h3 className="text-2xl font-bold">オンプレミスプラン</h3>
                  <div className="price">
                    <span className="price-amount">¥1,000,000</span>
                    <span className="text-gray-500">/年〜</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">ハードウェア構成により変動</div>
                </div>
                <div className="pricing-content">
                  <ul className="feature-list">
                    <li><Check className="check-icon" /> 完全なデータ主権とセキュリティ</li>
                    <li><Check className="check-icon" /> 社内ネットワーク（イントラネット）で完結</li>
                    <li><Check className="check-icon" /> 専用ローカルLLMサーバーの提供</li>
                    <li><Check className="check-icon" /> 既存システムとの柔軟な連携開発</li>
                    <li><Check className="check-icon" /> 専任エンジニアによる導入サポート</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <button className="btn btn-primary btn-full">お問い合わせ</button>
                </div>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '3rem', fontSize: '0.875rem', color: 'var(--text-light)'}}>
              <p>※ 価格は税抜表示です。ユーザー数やデータ量に応じて変動する場合があります。</p>
              <p>※ オンプレミスプランには、ハードウェア費用が含まれる場合があります。</p>
            </div>

            {/* SaaS Integration Option */}
            <div className="saas-option container" style={{maxWidth: '900px'}}>
              <div className="saas-content">
                <div style={{flex: 1}}>
                  <div className="saas-badge">オプション機能</div>
                  <h3 className="text-xl font-bold mb-2">外部SaaS連携オプション</h3>
                  <p className="text-gray-600 mb-4">
                    NotionやBacklogなどの外部ツールと連携し、タスク管理やドキュメント共有をシームレスに行えます。
                    社内のあらゆる情報を「みえタス」に集約し、検索・活用することが可能です。
                  </p>
                  <div className="saas-tags">
                    <span className="saas-tag">Notion</span>
                    <span className="saas-tag">Backlog</span>
                    <span className="saas-tag">Slack</span>
                    <span className="saas-tag">Teams</span>
                    <span className="saas-tag">Google Drive</span>
                  </div>
                </div>
                <div style={{width: '100%', maxWidth: '300px', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '0.5rem', border: '1px dashed #e2e8f0', display: 'flex', justifyContent: 'center'}}>
                  <div style={{textAlign: 'center'}}>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '0.75rem'}}>
                      <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 30}}>
                        <img src="/images/logo-symbol.png" style={{width: '1.5rem', height: '1.5rem'}} alt="Mietasu" />
                      </div>
                      <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-0.5rem', zIndex: 20, fontSize: '0.75rem', fontWeight: 'bold', color: '#334155'}}>N</div>
                      <div style={{width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: 'white', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-0.5rem', zIndex: 10, fontSize: '0.75rem', fontWeight: 'bold', color: '#16a34a'}}>B</div>
                    </div>
                    <p className="text-sm font-medium">データ連携で<br/>さらに便利に</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section id="cases" className="section bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="section-title">導入事例</h2>
              <p className="section-subtitle">
                セキュリティ要件の厳しい業界を中心に、多くの企業で成果を上げています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Case 1 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-500">A社</div>
                  <div>
                    <div className="text-sm text-gray-500">製造業 A社 設計部門</div>
                    <div className="font-bold text-lg">開発リードタイムを15%短縮</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-1">課題</div>
                    <p className="text-sm text-gray-600">設計図や技術仕様書などの機密情報が多く、クラウドツールの利用が禁止されていた。ナレッジ共有が進まず、ベテランのノウハウが属人化していた。</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-primary mb-1">導入効果</div>
                    <p className="text-sm font-medium">みえタスを導入し、全ての情報をオンプレミス環境で一元管理。過去の設計トラブルに関する議事録をAIが解析し、新人でも即座に解決策を発見できるようになった。</p>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-500">B社</div>
                  <div>
                    <div className="text-sm text-gray-500">金融機関 B社 コンプライアンス部門</div>
                    <div className="font-bold text-lg">監査対応コストを70%削減</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-gray-400 mb-1">課題</div>
                    <p className="text-sm text-gray-600">顧客情報を含む会議が多く、議事録作成が大きな負担に。また、監査対応で過去の議事録を探すのに数日かかることもあった。</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-xs font-bold text-primary mb-1">導入効果</div>
                    <p className="text-sm font-medium">ローカル音声認識・LLMにより、セキュリティを担保したまま議事録作成を完全自動化。監査時には、AI検索で必要な情報を数分で特定できるようになった。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-primary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">まずは、その効果を実感してください。</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              煩雑なドキュメント管理から解放され、チームの生産性を最大化しませんか？
              お客様の課題に合わせた最適なプランをご提案します。
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                お問い合わせ・資料請求
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors flex items-center">
                導入フローを確認 <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/images/logo-symbol.png" alt="Logo" style={{width: '1.5rem', height: '1.5rem', filter: 'brightness(0) invert(1)'}} />
                みえタス
              </div>
              <p className="text-sm text-gray-400 mt-4 max-w-xs">
                セキュアな環境で、企業の知を資産に変える。<br/>
                次世代のオンプレミスAI・ナレッジ基盤。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">製品</h4>
              <ul className="footer-links text-sm">
                <li><a href="#">機能一覧</a></li>
                <li><a href="#">導入事例</a></li>
                <li><a href="#">料金プラン</a></li>
                <li><a href="#">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">サポート</h4>
              <ul className="footer-links text-sm">
                <li><a href="#">運営会社</a></li>
                <li><a href="#">お問い合わせ</a></li>
                <li><a href="#">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright flex justify-between items-center">
            <div>&copy; 2025 Mietasu. All rights reserved.</div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with Manus</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
