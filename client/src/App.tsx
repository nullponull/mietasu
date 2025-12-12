import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/demo/Dashboard';
import Knowledge from './pages/demo/Knowledge';
import Minutes from './pages/demo/Minutes';
import Chat from './pages/demo/Chat';
import Settings from './pages/demo/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Dashboard />} />
        <Route path="/demo/dashboard" element={<Dashboard />} />
        <Route path="/demo/knowledge" element={<Knowledge />} />
        <Route path="/demo/minutes" element={<Minutes />} />
        <Route path="/demo/chat" element={<Chat />} />
        <Route path="/demo/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
