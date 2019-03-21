import React, { Component } from "react";
import TitleIcon from "./TitleIcon";
import { colors } from "../../api/constants";

export class TitleBar extends Component {
  render() {
    return (
      <div
        style={{
          margin: "auto",
          marginTop: 8,
          position: "relative",
          textAlign: "center"
        }}
      >
        <TitleIcon
          name="linkedin-in"
          prefix="fab"
          link="https://www.linkedin.com/in/lior-hirschfeld/"
        />
        <TitleIcon
          name="github"
          prefix="fab"
          link="https://github.com/lhirschfeld"
        />
        <h1
          style={{
            textAlign: "center",
            fontSize: 45,
            color: colors.offBlack,
            display: "inline-block",
            marginLeft: 15,
            marginRight: 15
          }}
        >
          Lior Hirschfeld
        </h1>
        <TitleIcon name="file" prefix="fas" link="#" />
        <TitleIcon name="envelope" prefix="fas" link="mailto:liorh@mit.edu" />
      </div>
    );
  }
}

export default TitleBar;
