import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Store from "./core/utils/Store";

import BlotterRecordPage from "./pages/blotter_record";
import OrdinancePage from "./pages/ordinance";
import LawsPage from "./pages/laws";
import CrimeRatePage from "./pages/crime_rate";
import LoginPage from "./pages/login";

const App = () => {
  return (
    <Router>
      <Store>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/blotter_records" component={BlotterRecordPage} />
          <Route path="/ordinance" component={OrdinancePage} />
          <Route path="/laws" component={LawsPage} />
          <Route path="/crime_rate" component={CrimeRatePage} />
        </Switch>
      </Store>
    </Router>
  );
};

export default App;
