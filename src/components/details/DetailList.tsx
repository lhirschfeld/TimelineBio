import React, { Component } from "react";
import Detail from "./Detail";

import { Info } from "../../api/info";
import { page } from "../../api/constants";

export interface DetailListProps {
	info: Info[];
}

export class DetailList extends Component<DetailListProps> {
	render() {
		return (
			<div style={{ maxWidth: page.width, margin: "auto" }}>
				{this.props.info
					.sort((a, b) => a.priority().getTime() - b.priority().getTime())
					.map((info, index) => <Detail info={info} />)}
			</div>
		);
	}
}

export default DetailList;
