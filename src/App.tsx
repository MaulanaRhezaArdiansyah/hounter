import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { Navbar } from "./components/organisms/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
