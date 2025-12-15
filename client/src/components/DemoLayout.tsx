import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { 
  LayoutDashboard, 
  Database, 
  FileText, 
  MessageSquare, 
  Settings, 
  Menu, 
  X,
  LogOut,
  Bell,
  Search,
  User,
  Check
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DemoLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const DemoLayout: React.FC<DemoLayoutProps> = ({ children, title = "みえタス" }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'ダッシュボード', icon: <LayoutDashboard size={20} /> },
    { path: '/projects', label: 'プロジェクト一覧', icon: <Database size={20} /> },
    { path: '/chat', label: 'チャット一覧', icon: <MessageSquare size={20} /> },
    { path: '/upload', label: 'ファイルアップロード', icon: <FileText size={20} /> },
    { path: '/settings', label: '個人設定', icon: <User size={20} /> },
    { path: '/admin', label: '管理者設定', icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-200 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="text-xl font-bold tracking-wider">みえタス</span>
          <span className="ml-2 text-xs bg-blue-600 px-2 py-0.5 rounded text-white">DEMO</span>
          <button 
            className="ml-auto lg:hidden text-gray-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${location === item.path 
                  ? 'bg-blue-600 text-white' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
              `}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-400">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <span className="text-sm font-bold">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">管理者 ユーザー</p>
              <p className="text-xs truncate">admin@example.com</p>
            </div>
            <Link href="/" className="text-slate-400 hover:text-white" title="ログアウト">
              <LogOut size={18} />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
          </div>

          <div className="flex items-center gap-4">
           <div className="relative hidden md:block w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="検索..." 
              className="pl-9 pr-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setLocation(`/search?q=${e.currentTarget.value}`);
                }
              }}
            />
          </div>          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative text-gray-500 hover:text-gray-700 outline-none">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>通知</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                {[
                  { title: "新しい議事録が追加されました", desc: "次世代基盤開発 / 定例進捗会議 #13", time: "10分前", unread: true },
                  { title: "メンションされました", desc: "田中: @管理者 資料の確認をお願いします", time: "1時間前", unread: true },
                  { title: "AI要約が完了しました", desc: "マーケティング施策2024 / キックオフMTG", time: "3時間前", unread: false },
                ].map((notification, i) => (
                  <DropdownMenuItem key={i} className="flex flex-col items-start p-3 cursor-pointer">
                    <div className="flex justify-between w-full mb-1">
                      <span className={`font-medium text-sm ${notification.unread ? "text-blue-600" : "text-gray-700"}`}>
                        {notification.title}
                      </span>
                      {notification.unread && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
                    </div>
                    <p className="text-xs text-gray-500 mb-1 line-clamp-1">{notification.desc}</p>
                    <span className="text-[10px] text-gray-400">{notification.time}</span>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-blue-600 cursor-pointer">
                すべての通知を見る
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DemoLayout;
