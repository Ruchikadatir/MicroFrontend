import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import DonutChart from "./DonutChart";
import DonutChartDefault from "./DonutChartDefault";
import LineCharts from "./LineChart";
import BarCharts from "./BarChart";
import AreaCharts from "./AreaChart";
import HistogramCharts from "./Histogram";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Route exact path="/" component={DonutChartDefault} />
      <Route exact path="/donut" component={DonutChart} />
      <Route exact path="/line" component={LineCharts} />
      <Route exact path="/bar" component={BarCharts} />
      <Route exact path="/stackedarea" component={AreaCharts} />
      <Route exact path="/histogram" component={HistogramCharts} />
    </Router>
  );
}

export default App;
