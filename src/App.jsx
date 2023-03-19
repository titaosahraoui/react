import { Switch } from "react-router-dom";
import Home from "./componentes/home/Home";
import Navbar from "./componentes/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Card from "./componentes/cards/Card";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path= "/images/:id" component={Card} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
