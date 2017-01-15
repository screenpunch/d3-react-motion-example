import * as React from "react";
import {Motion, presets, spring} from "react-motion";
// import * as d3 from "d3";

// import XAxis, {OwnProps as XAxisProps} from "./XAxis";
// import YAxis, {OwnProps as YAxisProps} from "./YGrid";

type OwnProps = {
	width?: number;
	height?: number;
	series?: Array<Array<number>>;
};

/*
 <XAxis {...xAxisProps} />

 <YAxis {...yAxisProps} />
 */

const Chart: React.StatelessComponent<OwnProps> = (props: OwnProps) => {

	function renderSvg(yExtent: [number, number]) {
		return (
			<svg
				width={props.width}
				height={props.height}
			>
			</svg>
		);
	}



	// const yExtent: [number, number] = d3.extent(props.data.series[0].points, function(d) { return d.value; });


	const style = {
		y0: spring(0, presets.noWobble),
		y1: spring(10, presets.noWobble)
	};

	console.log(JSON.stringify(props));

	return (
		<Motion style={style}>
			{(styles: any) => renderSvg([styles.y0, styles.y1])}
		</Motion>
	);
}

Chart.defaultProps = {
	width: 600,
	height: 400
};

export default Chart;
export {OwnProps};

/*
 <XGridBands {...xGridBandsProps} />

 <YGrid {...yGridProps} />

 <YieldProfileSeries {...seriesProps} />
 */