import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  Settings, 
  Shield, 
  LogOut,
  Wifi,
  Lock,
  Database,
  Link as LinkIcon,
  Upload
} from 'lucide-react';
import '../styles/Demo.css';

interface DemoLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const DemoLayout: React.FC<DemoLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="demo-container">
      {/* Sidebar */}
      <aside className="demo-sidebar">
        <div className="demo-logo">
          <img src="/images/logo-symbol.png" alt="Logo" className="w-8 h-8" />
          <span>みえタス</span>
        </div>

        <div className="demo-nav-section">
          <div className="demo-nav-label">メイン</div>
          <nav className="demo-nav">
            <NavLink to="/demo/dashboard" className={({isActive}) => isActive ? 'active' : ''}>
              <LayoutDashboard size={20} />
              ダッシュボード
            </NavLink>
            <NavLink to="/demo/knowledge" className={({isActive}) => isActive ? 'active' : ''}>
              <BookOpen size={20} />
              ナレッジベース
            </NavLink>
            <NavLink to="/demo/minutes" className={({isActive}) => isActive ? 'active' : ''}>
              <FileText size={20} />
              議事録・録音
            </NavLink>
            <NavLink to="/demo/chat" className={({isActive}) => isActive ? 'active' : ''}>
              <MessageSquare size={20} />
              AIチャット
            </NavLink>
          </nav>
        </div>

        <div className="demo-nav-section">
          <div className="demo-nav-label">データ連携</div>
          <nav className="demo-nav">
            <NavLink to="/demo/files" className={({isActive}) => isActive ? 'active' : ''}>
              <Upload size={20} />
              ファイル取込
            </NavLink>
            <NavLink to="/demo/integration" className={({isActive}) => isActive ? 'active' : ''}>
              <LinkIcon size={20} />
              外部連携
            </NavLink>
          </nav>
        </div>

        <div className="demo-nav-section">
          <div className="demo-nav-label">管理</div>
          <nav className="demo-nav">
            <NavLink to="/demo/settings" className={({isActive}) => isActive ? 'active' : ''}>
              <Settings size={20} />
              設定・ユーザー
            </NavLink>
          </nav>
        </div>

        <div className="demo-sidebar-footer">
          <div className="security-status">
            <div className="status-item">
              <Lock size={12} className="text-green-500" />
              <span>Secure Local Network</span>
            </div>
            <div className="status-item">
              <Wifi size={12} className="text-gray-400" />
              <span>Internet: Restricted</span>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={16} />
            デモ終了
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="demo-main">
        <header className="demo-header">
          <div className="header-search">
            <div className="search-input-wrapper">
              <Database size={16} className="text-gray-400" />
              <input type="text" placeholder="ナレッジベース内を検索..." />
            </div>
          </div>
          <div className="header-user">
            <div className="user-avatar">デモ</div>
            <div className="user-info">
              <div className="user-name">デモユーザー</div>
              <div className="user-role">管理者権限</div>
            </div>
          </div>
        </header>
        <div className="demo-content">
          <div className="demo-warning-banner">
            <Shield size={16} />
            これはデモ環境です。実際のAI処理は行われませんが、UI/UXの体験が可能です。
          </div>
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default DemoLayout;
