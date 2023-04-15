import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Router } from "./routes/router";

export const App = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};
