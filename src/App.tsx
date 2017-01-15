import * as React from "react";
import * as d3 from "d3";

import Chart from "./components/Chart";

import "./App.css";

const logo = require("./logo.svg");

type OwnState = {
	allCities:Array<any>;
	selectedCities:Array<any>;
}

class App extends React.Component<null, OwnState> {

	tsvHandler = (error, data) => {

		if (error) {
			throw error;
		}

		const parseTime = d3.timeParse("%Y%m%d");

		const cities:Array<string> = data.columns.slice(1);
		const citiesSeries = cities.map(function (city) {
			return {
				id: city,
				values: data.map(function (d) {
					return {
						date: parseTime(d.date),
						value: +d[city]
					};
				})
			};
		});

		this.setState({allCities: citiesSeries, selectedCities: [citiesSeries[0]]});
	}

	componentWillMount(): void {

		// https://bl.ocks.org/mbostock/3884955
		d3.tsv("data.tsv", this.tsvHandler);
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>D3.js React-Motion Example</h2>
				</div>
				<Chart />
			</div>
		);
	}
}

export default App;