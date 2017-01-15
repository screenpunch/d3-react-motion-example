import "./YGrid.scss";

import * as React from "react";
import * as d3 from "d3";

import {axisRight} from "d3-axis";

export type OwnProps = {
	tickSize: number;
	translate: string;
	yScale: any;
}

export default class YAxis extends React.PureComponent<OwnProps, void> {

	controls: {
		axis?: any;
	} = {};

	gridRef = (input: any) => {
		this.controls.axis = input;
	}

	componentDidMount() {
		this.renderGrid();
	}

	componentDidUpdate() {
		this.renderGrid();
	}

	/**
	 * Render an axis without any tick labels, this creates grid lines
	 */
	renderGrid() {
		const node = this.controls.axis;
		const axis = axisRight(this.props.yScale)
			.tickSize(this.props.tickSize);
		// .tickFormat(() => null);

		d3.select(node).call(axis);
	}

	render() {
		return <g className="YGrid" ref={this.gridRef} transform={this.props.translate} />
	}
}
