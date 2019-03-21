import React, { Component } from "react";
import { Event, Category } from "../../api/details";

import { colors, timeline } from "../../api/constants";

export interface TimelineEventProps {
  event: Event;
}

export class TimelineEvent extends Component<TimelineEventProps> {
  getColor() {
    switch (this.props.event.category) {
      case Category.Biography:
        return colors.blue.lightest;
      case Category.Education:
        return colors.green.default;
      case Category.Employment:
        return colors.green.lightest;
      case Category.Projects:
        return colors.red.default;
      case Category.Publications:
        return colors.red.lightest;
    }
  }

  getPosition() {
    let start = timeline.startDate.getTime();
    let startToNow = Date.now() - start;
    let startToEvent = this.props.event.date.getTime() - start;

    return `${((startToEvent / startToNow) * 100) >> 0}%`;
  }

  render() {
    return (
      <circle
        cx={this.getPosition()}
        cy="10"
        r={timeline.smallRadius}
        stroke={colors.offBlack}
        strokeWidth={timeline.stroke}
        fill="#fff"
      />
    );
  }
}

export default TimelineEvent;
