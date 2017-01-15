import "./YAxis.scss";

import * as React from "react";
import * as d3 from "d3";
import {axisLeft} from "d3-axis";

export type OwnProps = {
	translate: string;
	yScale: any;
}

export default class YAxis extends React.PureComponent<OwnProps, void> {

	controls: {
		axis?: any;
	} = {};

	axisRef = (input: any) => {
		this.controls.axis = input;
	}

	componentDidMount() {
		this.renderAxis();
	}

	componentDidUpdate() {
		this.renderAxis();
	}

	renderAxis() {
		let node  = this.controls.axis;
		let axis = axisLeft(this.props.yScale);

		d3.select(node).call(axis);
	}

	render() {
		return <g className="YAxis" ref={this.axisRef} transform={this.props.translate} />
	}
}
