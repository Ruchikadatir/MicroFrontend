import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";
import axios from "axios";
import dev from "./dev.json";

import "./App.css";

const defaultHistory = createBrowserHistory();

const { REACT_APP_DONUT_HOST: donutHost } = process.env;

function Header() {
  return (
    <div className="banner">
      <h1 className="banner-title"> MicroFrontend Chart Demo </h1>
      <h4>Default Donut Chart</h4>
    </div>
  );
}

function DonutChart({ history }) {
  return (
    <div>
      <div className="home">
        <MicroFrontend history={history} host={donutHost} name="Donut" />
      </div>
    </div>
  );
}

function LineCharts({ history }) {
  return (
    <div>
      <div className="home">
        <MicroFrontend history={history} host={donutHost} name="Donut" />
      </div>
    </div>
  );
}

function BarCharts({ history }) {
  return (
    <div>
      <div className="home">
        <MicroFrontend history={history} host={donutHost} name="Donut" />
      </div>
    </div>
  );
}

function Home({ history }) {
  const [donutInput, setDonutInput] = useState("");
  const [lineInput, setLineInput] = useState("");
  const [barInput, setBarInput] = useState("");

  const getBarData = () => {
    axios.get(dev.barChartEndpoint).then((response) => {
      console.log("Response: ", response);
      const dataFromAPI = response.data;
      setBarInput(dataFromAPI);
    });
  };

  const getLineData = () => {
    axios.get(dev.lineChartEndpoint).then((response) => {
      console.log("Response: ", response);
      const dataFromAPI = response.data;
      setLineInput(dataFromAPI);
    });
  };

  const getDonutData = () => {
    axios.get(dev.donutChartEndpoint).then((response) => {
      console.log("Response: ", response);
      const dataFromAPI = response.data;
      setDonutInput(dataFromAPI);
    });
  };

  useEffect(() => getDonutData(), []);
  useEffect(() => getLineData(), []);
  useEffect(() => getBarData(), []);

  const handleOnClickDonut = () => {
    history.push({
      pathname: `/donut`,
      state: donutInput,
    });
    console.log("history: ", history, donutInput);
  };

  const handleOnClickLine = () => {
    history.push({
      pathname: `/line`,
      state: lineInput,
    });
    console.log("history: ", history, lineInput);
  };

  const handleOnClickBar = () => {
    history.push({
      pathname: `/bar`,
      state: barInput,
    });
    console.log("history: ", history, barInput);
  };

  return (
    <div>
      <Header />
      <div className="home">
        <button onClick={handleOnClickDonut}>Donut Chart</button>
        <div className="space"></div>
        <button onClick={handleOnClickLine}>Line Chart</button>
        <div className="space"></div>
        <button onClick={handleOnClickBar}>Bar Chart</button>
      </div>

      <div className="content">
        <h1 className="content"> Donut Chart with Sample Values </h1>
        <div className="content">
          <div className="content">
            <DonutChart />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/donut" component={DonutChart} />
          <Route exact path="/line" component={LineCharts} />
          <Route exact path="/bar" component={BarCharts} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
