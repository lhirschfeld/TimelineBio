import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Event, Context } from "../../api/info";

export interface DetailProp {
	event: Event;
	context: Context[];
}

export class Detail extends Component<DetailProp> {
	render() {
		let event = this.props.event;
		let header = <h3 style={{ marginTop: 0 }}>{event.name}</h3>;
		return (
			<div
				style={{
					width: "95%",
					margin: "auto",
					boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.0)",
					padding: 25,
					paddingLeft: 20,
					marginBottom: 10,
					borderLeftColor: event.getColor(this.props.context),
					borderLeftWidth: 10,
					borderLeftStyle: "solid"
				}}
			>
				<FontAwesomeIcon
					style={{
						verticalAlign: "middle",
						marginRight: 10,
						marginBottom: 4
					}}
					icon={[ event.icon()[0], event.icon()[1] ]}
					size="sm"
				/>
				<div style={{ marginTop: 0, display: "inline-flex" }}>
					{event.link !== null ? <a href={event.link}>{header}</a> : header}
					<h3 style={{ fontWeight: 300, marginLeft: 5, verticalAlign: "middle", marginTop: 0 }}>
						{event.date.toLocaleDateString()}
					</h3>
				</div>
				<p style={{ fontWeight: 200, fontSize: 18, marginTop: 0, marginBottom: 0 }}>{this.props.event.description}</p>
			</div>
		);
	}
}

export default Detail;
