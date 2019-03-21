import React, { Component } from "react";
import { Event, Context } from "../../api/details";
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
          <rect
            width="100%"
            height={timeline.height}
            y={10 - timeline.height / 2}
            fill={colors.offBlack}
          />
        </svg>
        <div
          style={{
            maxWidth: page.width + 2 * (timeline.bigRadius + timeline.stroke),
            margin: "auto"
          }}
        >
          <svg
            style={{
              width: "100%"
            }}
          >
            {this.props.context.map((context, index) => (
              <TimelineContext context={context} key={index} />
            ))}
            {this.props.events.map((event, index) => (
              <TimelineEvent event={event} key={index} />
            ))}
          </svg>
        </div>
      </div>
    );
  }
}

export default Timeline;
