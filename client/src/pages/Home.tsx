import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Shield, Mic, Brain, Search, Server, Lock, Database, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 font-bold text-xl tracking-tighter text-primary">
            <img 
              src="/images/logo-symbol-transparent.png" 
              alt="Mietasu Logo" 
              className="w-9 h-9 object-contain"
            />
            <span>みえタス</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="transition-colors hover:text-primary">機能</a>
            <a href="#comparison" className="transition-colors hover:text-primary">他社比較</a>
            <a href="#cases" className="transition-colors hover:text-primary">導入事例</a>
            <a href="#pricing" className="transition-colors hover:text-primary">料金プラン</a>
            <a href="#flow" className="transition-colors hover:text-primary">導入フロー</a>
            <a href="#/demo" className="transition-colors hover:text-primary font-bold text-primary">デモ画面を見る</a>
            <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              お問い合わせ
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-b border-border bg-background p-4 space-y-4">
            <a href="#features" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>機能</a>
            <a href="#comparison" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>他社比較</a>
            <a href="#cases" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>導入事例</a>
            <a href="#flow" className="block text-sm font-medium hover:text-primary" onClick={toggleMenu}>導入フロー</a>
            <Button className="w-full bg-primary text-primary-foreground">お問い合わせ</Button>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/key-visual-abstract.png" 
              alt="Secure Data Flow Abstract Visual" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="space-y-6"
              >
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                  <Shield className="mr-2 h-3.5 w-3.5" />
                  次世代オンプレミスAI・ナレッジ基盤
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight">
                  クラウドに情報を渡さない、<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">唯一のAIナレッジ基盤。</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
                  会議も、ドキュメントも、チャットも。社内のあらゆる情報を、セキュアな環境で資産に変える。NotionやConfluenceでは実現できない、最高レベルのセキュリティと業務効率化を両立します。
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                    資料をダウンロード
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <a href="#/demo">
                    <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary bg-white/80 backdrop-blur-sm">
                      デモ画面を見る
                    </Button>
                  </a>
                  <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 text-primary">
                    お問い合わせ
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden md:block"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-2">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 z-0"></div>
                  <div className="relative z-10 bg-card rounded-xl overflow-hidden border border-border">
                    {/* Mock UI of the dashboard */}
                    <div className="h-10 border-b border-border flex items-center px-4 gap-2 bg-muted/30">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <div className="ml-4 h-6 w-64 bg-background rounded-md border border-border flex items-center px-2 text-xs text-muted-foreground">
                        <Lock className="w-3 h-3 mr-1" /> secure-local-server/knowledge-base
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">プロジェクトA 定例会議議事録</h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                          <Check className="w-3 h-3 mr-1" /> AI要約完了
                        </span>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-muted/30 rounded-lg border border-border/50">
                          <h4 className="font-semibold text-sm mb-2 flex items-center text-primary">
                            <Brain className="w-4 h-4 mr-2" /> AIサマリー
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            本日の会議では、新機能のリリーススケジュールについて合意しました。開発チームは来週までにAPIの実装を完了し、QAチームはテスト計画を作成します。セキュリティ要件については、オンプレミス環境での動作検証を追加で行うことが決定しました。
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 border border-border rounded-lg">
                            <div className="text-xs text-muted-foreground mb-1">決定事項</div>
                            <div className="font-medium text-sm">API実装完了：12/20</div>
                          </div>
                          <div className="p-3 border border-border rounded-lg">
                            <div className="text-xs text-muted-foreground mb-1">ネクストアクション</div>
                            <div className="font-medium text-sm">QAテスト計画作成</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 z-20"
                >
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">セキュリティ</div>
                    <div className="font-bold text-sm">100%ローカルで安全</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 z-20"
                >
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ナレッジベース</div>
                    <div className="font-bold text-sm">自動更新</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="py-12 container">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border group cursor-pointer">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <img 
              src="/images/demo-thumbnail-abstract.png" 
              alt="Mietasu Demo Interface Abstract" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <div className="font-bold text-lg drop-shadow-md">製品デモを見る</div>
              <div className="text-sm opacity-90 drop-shadow-md">1分でわかる「みえタス」の操作感</div>
            </div>
          </div>
        </section>

        {/* Problem & Solution Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                その「情報管理の悩み」、<br/>みえタスが解決します。
              </h2>
              <p className="text-muted-foreground">
                セキュリティへの不安や、非効率な手作業から解放され、本来の業務に集中できる環境を提供します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">クラウドへの不安</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <div className="text-xs font-bold text-red-600 mb-1">BEFORE</div>
                    <p className="text-sm text-muted-foreground">
                      機密情報をクラウドに上げるリスクがあり、便利なAIツールが使えない。
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="text-xs font-bold text-green-600 mb-1">AFTER</div>
                    <p className="text-sm text-foreground font-medium">
                      完全オンプレミス完結。データが社外に出るリスクゼロで、最新AIを活用可能。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Problem 2 */}
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                    <Mic className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">議事録作成の負担</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <div className="text-xs font-bold text-red-600 mb-1">BEFORE</div>
                    <p className="text-sm text-muted-foreground">
                      60分の会議後、30分かけて手作業で議事録作成。抜け漏れも発生。
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="text-xs font-bold text-green-600 mb-1">AFTER</div>
                    <p className="text-sm text-foreground font-medium">
                      AIが5分で要約・ToDo抽出。作成工数を83%削減し、即座に共有。
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Problem 3 */}
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                    <Search className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">情報の属人化</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <div className="text-xs font-bold text-red-600 mb-1">BEFORE</div>
                    <p className="text-sm text-muted-foreground">
                      過去の経緯やノウハウが個人のPCや記憶に埋もれ、探せない。
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ArrowRight className="text-muted-foreground rotate-90 md:rotate-0" />
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <div className="text-xs font-bold text-green-600 mb-1">AFTER</div>
                    <p className="text-sm text-foreground font-medium">
                      全情報がナレッジベース化。チャットで質問するだけで、AIが必要な情報を提示。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                3つのコア機能
              </h2>
              <p className="text-muted-foreground">
                セキュリティ、自動化、そして知性。企業のナレッジ活用に必要なすべてを統合しました。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                <div className="mb-6 relative">
                  <img src="/images/feature-security.png" alt="Security" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">完全オンプレミス完結</h3>
                <p className="text-muted-foreground leading-relaxed">
                  データは一切外部に出ません。ローカルLLMとローカル音声認識により、インターネット接続がない閉域網でも動作可能です。
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
                <div className="mb-6 relative">
                  <img src="/images/feature-voice.png" alt="Voice" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">議事録自動生成</h3>
                <p className="text-muted-foreground leading-relaxed">
                  会議の録音から文字起こし、要約、ToDo抽出までを全自動で実行。話者分離にも対応し、誰が何を言ったかを正確に記録します。
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors"></div>
                <div className="mb-6 relative">
                  <img src="/images/feature-ai.png" alt="AI" className="w-16 h-16 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">ナレッジ統合・検索</h3>
                <p className="text-muted-foreground leading-relaxed">
                  議事録やドキュメントを自動的にナレッジベース化。TeamsやSlackと連携し、チャットから自然言語で社内情報を検索できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="comparison" className="py-20 bg-primary/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                なぜ「みえタス」なのか？
              </h2>
              <p className="text-muted-foreground">
                一般的なクラウドツールや、単機能のオンプレミス製品との違いは明確です。
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-card rounded-xl shadow-lg border border-border overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-6 text-left font-medium text-muted-foreground w-1/4">機能・特徴</th>
                      <th className="p-6 text-center font-bold text-primary text-xl bg-primary/10 border-t-4 border-primary w-1/4">
                        みえタス
                      </th>
                      <th className="p-6 text-center font-medium text-muted-foreground w-1/6">Notion</th>
                      <th className="p-6 text-center font-medium text-muted-foreground w-1/6">Confluence</th>
                      <th className="p-6 text-center font-medium text-muted-foreground w-1/6">QuickSolution</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-6 font-medium">デプロイ環境</td>
                      <td className="p-6 text-center font-bold bg-primary/5 text-primary">オンプレミス</td>
                      <td className="p-6 text-center text-muted-foreground">クラウド</td>
                      <td className="p-6 text-center text-muted-foreground">クラウド/オンプレ</td>
                      <td className="p-6 text-center text-muted-foreground">オンプレミス</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">データ送信</td>
                      <td className="p-6 text-center font-bold bg-primary/5 text-primary">クラウド送信ゼロ</td>
                      <td className="p-6 text-center text-muted-foreground">クラウドへ送信</td>
                      <td className="p-6 text-center text-muted-foreground">クラウドへ送信</td>
                      <td className="p-6 text-center text-muted-foreground">クラウドへ送信(AI時)</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">ローカルLLM搭載</td>
                      <td className="p-6 text-center bg-primary/5">
                        <div className="flex justify-center"><Check className="text-primary w-6 h-6" /></div>
                      </td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                      <td className="p-6 text-center text-sm text-muted-foreground">△ (外部連携)</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">議事録自動生成</td>
                      <td className="p-6 text-center bg-primary/5">
                        <div className="flex justify-center"><Check className="text-primary w-6 h-6" /></div>
                      </td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-6 font-medium">ナレッジ自動蓄積</td>
                      <td className="p-6 text-center bg-primary/5">
                        <div className="flex justify-center"><Check className="text-primary w-6 h-6" /></div>
                      </td>
                      <td className="p-6 text-center text-sm text-muted-foreground">△ (手動)</td>
                      <td className="p-6 text-center text-sm text-muted-foreground">△ (手動)</td>
                      <td className="p-6 text-center"><X className="text-muted-foreground/30 w-6 h-6 mx-auto" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                選べる2つの提供形態
              </h2>
              <p className="text-muted-foreground">
                セキュリティ要件や運用体制に合わせて、最適なプランをお選びいただけます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Cloud Plan */}
              <Card className="relative overflow-hidden border-border bg-muted/10 flex flex-col">
                <div className="absolute top-4 right-4 bg-muted-foreground text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                  Coming Soon
                </div>
                <CardHeader className="text-center pb-2 opacity-70">
                  <div className="text-sm font-medium text-muted-foreground mb-2">手軽に始めたい企業向け</div>
                  <CardTitle className="text-2xl font-bold">クラウドプラン</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">¥10,000</span>
                    <span className="text-muted-foreground">/月〜</span>
                  </div>
                  <CardDescription className="mt-2">
                    現在開発中・事前登録受付中
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6 pt-6 opacity-70">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span>最短3営業日で利用開始</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span>サーバー管理・保守不要</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span>常に最新のAIモデルを利用可能</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-muted-foreground mr-2 flex-shrink-0" />
                      <span>セキュアなプライベートクラウド環境</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full" variant="outline" disabled>準備中</Button>
                </div>
              </Card>

              {/* On-Premise Plan */}
              <Card className="relative overflow-hidden border-primary shadow-md flex flex-col transform md:-translate-y-4 bg-card">
                <div className="absolute top-0 inset-x-0 h-1 bg-primary"></div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                  受付中
                </div>
                <CardHeader className="text-center pb-2">
                  <div className="text-sm font-medium text-primary mb-2">セキュリティ重視の企業向け</div>
                  <CardTitle className="text-2xl font-bold">オンプレミスプラン</CardTitle>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold">¥1,000,000</span>
                    <span className="text-muted-foreground">/年〜</span>
                  </div>
                  <CardDescription className="mt-2">
                    ハードウェア構成により変動
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-6 pt-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>完全なデータ主権とセキュリティ</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>社内ネットワーク（イントラネット）で完結</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>専用ローカルLLMサーバーの提供</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>既存システムとの柔軟な連携開発</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>専任エンジニアによる導入サポート</span>
                    </li>
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">お問い合わせ</Button>
                </div>
              </Card>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                ※ 価格は税抜表示です。ユーザー数やデータ量に応じて変動する場合があります。<br/>
                ※ オンプレミスプランには、ハードウェア費用が含まれる場合があります。
              </p>
            </div>

            {/* SaaS Integration Option */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-background rounded-xl border border-border p-8 shadow-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 mb-4">
                      オプション機能
                    </div>
                    <h3 className="text-xl font-bold mb-2">外部SaaS連携オプション</h3>
                    <p className="text-muted-foreground mb-4">
                      NotionやBacklogなどの外部ツールと連携し、タスク管理やドキュメント共有をシームレスに行えます。
                      社内のあらゆる情報を「みえタス」に集約し、検索・活用することが可能です。
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">Notion</span>
                      <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">Backlog</span>
                      <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">Slack</span>
                      <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">Teams</span>
                      <span className="px-3 py-1 bg-muted rounded-md text-xs font-medium">Google Drive</span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 bg-muted/50 rounded-lg p-6 flex items-center justify-center border border-dashed border-border">
                    <div className="text-center">
                      <div className="flex justify-center -space-x-2 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm z-30">
                          <img src="/images/logo-symbol-transparent.png" className="w-6 h-6" alt="Mietasu" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm z-20 text-xs font-bold text-slate-700">
                          N
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center shadow-sm z-10 text-xs font-bold text-green-600">
                          B
                        </div>
                      </div>
                      <p className="text-sm font-medium">データ連携で<br/>さらに便利に</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="cases" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">
                導入事例
              </h2>
              <p className="text-muted-foreground">
                セキュリティ要件の厳しい業界を中心に、多くの企業で成果を上げています。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="h-2 bg-blue-600 w-full"></div>
                <CardHeader>
                  <div className="text-sm font-bold text-blue-600 mb-2">製造業 A社 設計部門</div>
                  <CardTitle>開発リードタイムを15%短縮</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">課題</div>
                    <p className="text-sm text-muted-foreground">
                      設計図や技術仕様書などの機密情報が多く、クラウドツールの利用が禁止されていた。ナレッジ共有が進まず、ベテランのノウハウが属人化していた。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">導入効果</div>
                    <p className="text-sm text-muted-foreground">
                      みえタスを導入し、全ての情報をオンプレミス環境で一元管理。過去の設計トラブルに関する議事録をAIが解析し、新人でも即座に解決策を発見できるようになった。
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-colors">
                <div className="h-2 bg-green-600 w-full"></div>
                <CardHeader>
                  <div className="text-sm font-bold text-green-600 mb-2">金融機関 B社 コンプライアンス部門</div>
                  <CardTitle>監査対応コストを70%削減</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">課題</div>
                    <p className="text-sm text-muted-foreground">
                      顧客情報を含む会議が多く、議事録作成が大きな負担に。また、監査対応で過去の議事録を探すのに数日かかることもあった。
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-sm">導入効果</div>
                    <p className="text-sm text-muted-foreground">
                      ローカル音声認識・LLMにより、セキュリティを担保したまま議事録作成を完全自動化。監査時には、AI検索で必要な情報を数分で特定できるようになった。
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
          <div className="container relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              まずは、その効果を実感してください。
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              煩雑なドキュメント管理から解放され、チームの生産性を最大化しませんか？
              お客様の課題に合わせた最適なプランをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold">
                お問い合わせ・資料請求
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                導入フローを確認
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                  <Brain className="w-5 h-5" />
                </div>
                <span>みえタス</span>
              </div>
              <p className="text-sm leading-relaxed max-w-xs">
                次世代オンプレミスAI・AIドキュメント要約。<br/>
                セキュアな環境で、組織の知的資産を最大化します。
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">製品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">機能一覧</a></li>
                <li><a href="#" className="hover:text-white transition-colors">導入事例</a></li>
                <li><a href="#" className="hover:text-white transition-colors">料金プラン</a></li>
                <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">会社情報</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">運営会社</a></li>
                <li><a href="#" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            © 2025 ORENDA WORLD Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
