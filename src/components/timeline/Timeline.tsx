import React, { Component } from "react";
import { Event, Context } from "../../api/info";
import TimelineEvent from "./TimelineEvent";
import TimelineContext from "./TimelineContext";

import { colors, page, timeline } from "../../api/constants";

export interface TimelineProps {
	events: Event[];
	context: Context[];
}

export class Timeline extends Component<TimelineProps> {
	render() {
		return (
			<div>
				<svg width="100%" style={{ position: "absolute", zIndex: -1 }}>
					<rect width="100%" height={timeline.height} y={10 - timeline.height / 2} fill={colors.offBlack} />
				</svg>
				<div
					style={{
						maxWidth: page.width,
						margin: "auto",
						height: 20
					}}
				>
					{/* <div
						style={{
							color: "#fff",
							fontSize: 10,
							fontWeight: 600,
							position: "absolute",
							marginTop: 3,
							width: "100%"
						}}
					>
						<span style={{ marginLeft: 5 }}> 2016</span>
					</div> */}
					<svg
						style={{
							width: "100%",
							height: 20
						}}
					>
						{this.props.context.map((context, index) => <TimelineContext context={context} key={index} />)}
						{this.props.events
							.filter((event) => timeline.startDate <= event.date)
							.map((event, index) => <TimelineEvent event={event} key={index} />)}
					</svg>
				</div>
				<div style={{ height: 50 }} />
			</div>
		);
	}
}

export default Timeline;
