import React, { Component } from "react";
import Detail from "./Detail";

import { Event, Context } from "../../api/info";
import { page } from "../../api/constants";

export interface DetailListProps {
	events: Event[];
	context: Context[];
}

export class DetailList extends Component<DetailListProps> {
	render() {
		return (
			<div style={{ maxWidth: page.width, margin: "auto" }}>
				{this.props.events
					.sort((a, b) => a.date.getTime() - b.date.getTime())
					.map((event, index) => <Detail event={event} context={this.props.context} key={index} />)}
			</div>
		);
	}
}

export default DetailList;
