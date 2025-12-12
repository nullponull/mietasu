import { Search, Folder, FileText } from "lucide-react";

export default function Knowledge() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ナレッジベース</h1>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
          <input 
            type="text" 
            placeholder="ナレッジを検索..." 
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-2">
          <div className="font-medium text-sm text-muted-foreground mb-2">フォルダ</div>
          {['営業部', '開発部', '人事・総務', 'プロジェクトA', '社内規定'].map((folder) => (
            <div key={folder} className="flex items-center gap-2 p-2 hover:bg-slate-100 rounded cursor-pointer">
              <Folder size={18} className="text-yellow-500" />
              <span>{folder}</span>
            </div>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-4 border-b font-medium">最近更新されたドキュメント</div>
            <div className="divide-y">
              {[
                { title: '2024年度 営業戦略資料', date: '2024/03/14', author: '田中 太郎' },
                { title: '新製品開発ロードマップ', date: '2024/03/13', author: '鈴木 一郎' },
                { title: '就業規則改定のお知らせ', date: '2024/03/12', author: '人事部' },
                { title: 'クライアントMTG議事録_A社', date: '2024/03/10', author: '佐藤 健太' },
              ].map((doc, i) => (
                <div key={i} className="p-4 hover:bg-slate-50 flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-blue-500" />
                    <div>
                      <div className="font-medium">{doc.title}</div>
                      <div className="text-xs text-muted-foreground">{doc.author} • {doc.date}</div>
                    </div>
                  </div>
                  <div className="text-xs bg-slate-100 px-2 py-1 rounded">AI要約済</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
