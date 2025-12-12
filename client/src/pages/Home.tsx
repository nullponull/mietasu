import React from 'react';
import { Link } from "wouter";
import { Check, Shield, Lock, Zap, Server, Database, MessageSquare, FileText, Search } from 'lucide-react';
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
                  <button className="btn btn-primary">資料ダウンロード</button>
                  <Link href="/demo"><button className="btn btn-outline">デモを試す</button></Link>
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

        {/* Pricing Section */}
        <section id="pricing" className="section pricing-section">
          <div className="container">
            <h2 className="section-title">料金プラン</h2>
            <p className="section-subtitle">
              企業の規模やセキュリティ要件に合わせて選べる2つのプラン
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
                    <li><Check className="check-icon" /> 完全なデータ主権（外部送信ゼロ）</li>
                    <li><Check className="check-icon" /> ローカルLLM搭載</li>
                    <li><Check className="check-icon" /> 既存の社内ネットワーク内で完結</li>
                    <li><Check className="check-icon" /> 専任エンジニアによる導入サポート</li>
                    <li><Check className="check-icon" /> カスタマイズ可能なセキュリティポリシー</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <button className="btn btn-primary btn-full">お問い合わせ・見積もり</button>
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
                <li><a href="#">セキュリティ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">サポート</h4>
              <ul className="footer-links text-sm">
                <li><a href="#">お問い合わせ</a></li>
                <li><a href="#">ヘルプセンター</a></li>
                <li><a href="#">プライバシーポリシー</a></li>
                <li><a href="#">運営会社</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            &copy; 2025 Mietasu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
