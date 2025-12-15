import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DemoLayout from "./components/DemoLayout";

// New Pages
import Login from "@/pages/auth/Login";
import MainDashboard from "@/pages/dashboard/MainDashboard";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import ChatList from "@/pages/chat/ChatList";
import FileUpload from "@/pages/upload/FileUpload";
import ProjectDetail from "@/pages/project/ProjectDetail";

// Legacy Demo Pages
import Dashboard from "./pages/demo/Dashboard";
import Knowledge from "./pages/demo/Knowledge";
import Minutes from "./pages/demo/Minutes";
import Chat from "./pages/demo/Chat";
import Settings from "./pages/demo/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />

      {/* New App Structure */}
      <Route path="/dashboard">
        <DemoLayout>
          <MainDashboard />
        </DemoLayout>
      </Route>
      <Route path="/admin">
        <DemoLayout>
          <AdminDashboard />
        </DemoLayout>
      </Route>
      <Route path="/chat">
        <DemoLayout>
          <ChatList />
        </DemoLayout>
      </Route>
      <Route path="/upload">
        <DemoLayout>
          <FileUpload />
        </DemoLayout>
      </Route>
      <Route path="/project/:id">
        <DemoLayout>
          <ProjectDetail />
        </DemoLayout>
      </Route>

      {/* Legacy Demo Routes */}
      <Route path="/demo" component={Dashboard} />
      <Route path="/demo/knowledge" component={Knowledge} />
      <Route path="/demo/minutes" component={Minutes} />
      <Route path="/demo/chat" component={Chat} />
      <Route path="/demo/settings" component={Settings} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
