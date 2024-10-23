import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.css";
import { ErrorProvider } from "./context/errorContext";

function App() {
  return (
    <Router>
      <div className="App">
        <ErrorProvider>
          <AppRoutes />
        </ErrorProvider>
      </div>
    </Router>
  );
}

export default App;
