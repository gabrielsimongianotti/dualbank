import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Dashboard />
      <GlobalStyle />
    
    </div>
  );
}

export default App;
