import { ShieldCheck, Database, Users, Activity } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ダッシュボード</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">システム状態</h3>
            <ShieldCheck className="text-green-500" size={20} />
          </div>
          <div className="text-2xl font-bold">Secure</div>
          <p className="text-xs text-muted-foreground mt-1">ローカルネットワーク接続中</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">ナレッジ数</h3>
            <Database className="text-blue-500" size={20} />
          </div>
          <div className="text-2xl font-bold">1,248</div>
          <p className="text-xs text-muted-foreground mt-1">前月比 +12%</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">アクティブユーザー</h3>
            <Users className="text-orange-500" size={20} />
          </div>
          <div className="text-2xl font-bold">42</div>
          <p className="text-xs text-muted-foreground mt-1">現在オンライン: 8名</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">AI処理数</h3>
            <Activity className="text-purple-500" size={20} />
          </div>
          <div className="text-2xl font-bold">856</div>
          <p className="text-xs text-muted-foreground mt-1">今月の要約・回答生成数</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-bold mb-4">最近のアクティビティ</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded border-b last:border-0">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">定例会議の議事録が追加されました</p>
                <p className="text-xs text-muted-foreground">2024/03/15 14:30 • 佐藤 健太</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
