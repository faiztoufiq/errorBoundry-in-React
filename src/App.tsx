import Home from "../src/home/page";
import { ErrorBoundary } from "./errorBoundry";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
