import React, { Component } from "react";
import { Context } from "../../api/info";

import { timeline } from "../../api/constants";

export interface TimelineContextProps {
	context: Context;
}

export class TimelineEvent extends Component<TimelineContextProps> {
	getPosition(date: Date): number {
		let start = timeline.startDate.getTime();
		let startToNow = Date.now() - start;
		let startToEvent = date.getTime() - start;

		return Math.min(100, (startToEvent / startToNow * 100) >> 0);
	}

	render() {
		let start = this.getPosition(this.props.context.startDate);
		let end = this.getPosition(this.props.context.endDate);
		return (
			<rect
				x={`${start}%`}
				y={10 - timeline.height / 2}
				width={`${end - start}%`}
				height={timeline.height}
				fill={this.props.context.color}
			>
				<title>
					{this.props.context.name} - {this.props.context.startDate.toLocaleDateString()} to{" "}
					{this.props.context.endDate.toLocaleDateString()}
				</title>
			</rect>
		);
	}
}

export default TimelineEvent;
