import React, { Component } from "react";

import { Info } from "../../api/info";

export interface DetailProp {
	info: Info;
}

export class Detail extends Component<DetailProp> {
	render() {
		let info = this.props.info;
		let header = <h3 style={{ marginTop: 0 }}>{info.name}</h3>;
		return (
			<div
				style={{
					width: "95%",
					margin: "auto",
					boxShadow: "0px 4px 8px 0 rgba(0,0,0,0.0)",
					padding: 25,
					paddingLeft: 20,
					marginBottom: 10,
					borderLeftColor: info.categoryColor(),
					borderLeftWidth: 10,
					borderLeftStyle: "solid"
				}}
			>
				{info.link !== null ? <a href={info.link}>{header}</a> : header}
				<p style={{ fontWeight: 200, fontSize: 18, marginTop: 0, marginBottom: 0 }}>{this.props.info.description}</p>
			</div>
		);
	}
}

export default Detail;
