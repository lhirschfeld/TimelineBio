import Radium from "radium";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../../api/constants";

export interface TitleIconProps {
  name: IconName;
  prefix: IconPrefix;
  link: string;
}

export class TitleIcon extends Component<TitleIconProps> {
  render() {
    return (
      <a
        href={this.props.link}
        style={{
          color: colors.offBlack,
          transition: "color 0.5s ease",
          ":hover": {
            color: colors.blue.default
          }
        }}
      >
        <FontAwesomeIcon
          style={{
            verticalAlign: "center",
            margin: "7 15 7 15"
          }}
          icon={[this.props.prefix, this.props.name]}
          size="1x"
        />
      </a>
    );
  }
}

export default Radium(TitleIcon);
