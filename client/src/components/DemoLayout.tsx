import { Link, useLocation } from "wouter";
import { LayoutDashboard, Book, FileText, MessageSquare, LogOut } from "lucide-react";
import { ReactNode } from "react";

export default function DemoLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { href: "/demo", icon: LayoutDashboard, label: "ダッシュボード" },
    { href: "/demo/knowledge", icon: Book, label: "ナレッジベース" },
    { href: "/demo/minutes", icon: FileText, label: "議事録作成" },
    { href: "/demo/chat", icon: MessageSquare, label: "AIチャット" },
  ];

  return (
    <div className="flex h-screen bg-slate-100">
      <aside className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <div className="font-bold text-xl">みえタス Demo</div>
          <div className="text-xs text-slate-400 mt-1">Secure Local Environment</div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a className={`flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                  isActive ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}>
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <Link href="/">
            <a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors">
              <LogOut size={20} />
              <span>LPに戻る</span>
            </a>
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
