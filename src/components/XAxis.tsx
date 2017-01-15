import "./XAxis.scss";

import * as React from "react";
import * as d3 from "d3";
import {axisBottom} from "d3-axis";

export type OwnProps = {
	translate: string;
	xScale: any;
}

export default class XAxis extends React.PureComponent<OwnProps, void> {

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
		let axis = axisBottom(this.props.xScale);

		d3.select(node).call(axis);
	}

	render() {
		return <g className="XAxis" ref={this.axisRef} transform={this.props.translate} />
	}
}
