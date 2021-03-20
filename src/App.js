import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import AllBeer from "./components/AllBeer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />

          <Route path="/allbeer" component={AllBeer} />
          <Route exact path="/beer/:id" component={Detail} />
        </Switch>
      </AnimatePresence>{" "}
    </div>
  );
}

export default App;
