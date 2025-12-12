import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import DemoLayout from "./components/DemoLayout";
import Dashboard from "./pages/demo/Dashboard";
import Knowledge from "./pages/demo/Knowledge";
import Minutes from "./pages/demo/Minutes";
import Chat from "./pages/demo/Chat";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Demo Routes */}
      <Route path="/demo">
        <DemoLayout>
          <Dashboard />
        </DemoLayout>
      </Route>
      <Route path="/demo/knowledge">
        <DemoLayout>
          <Knowledge />
        </DemoLayout>
      </Route>
      <Route path="/demo/minutes">
        <DemoLayout>
          <Minutes />
        </DemoLayout>
      </Route>
      <Route path="/demo/chat">
        <DemoLayout>
          <Chat />
        </DemoLayout>
      </Route>
      
      {/* Fallback */}
      <Route>404 Page Not Found</Route>
    </Switch>
  );
}

export default App;
