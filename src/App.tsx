import React, { Component } from "react";
import Timeline from "./components/timeline/Timeline";
import TitleBar from "./components/titlebar/TitleBar";

import { Event, Context, Category } from "./api/details";
import { colors } from "./api/constants";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub, faFile, faEnvelope);

export interface AppState {
  events: Event[];
  context: Context[];
  activeCategory: Category;
}

class App extends Component<{}, AppState> {
  readonly state: AppState = {
    events: [
      new Event(
        "Early Life",
        `I was born in Zefat Israel, and moved to the United States when I was seven months old.
         Since then, I've lived in Massachusetts. I attended The Sage School in Foxboro from K-8,
         and I graduated in June 2013.`,
        null,
        Category.Biography,
        new Date(2013, 11, 20)
      ),
      new Event(
        "Tap Water Violations",
        `Visualization of tap water violations by zip code in the US.
         Data gathered from the Environmental Working Group.`,
        null,
        Category.Projects,
        new Date(2017, 2, 1)
      ),
      new Event(
        "Book Covers by Genre",
        `Averaged the covers of popular GoodReads books, separated by genre,
         to identify recurring thematic and marketing choices.`,
        null,
        Category.Projects,
        new Date(2018, 3, 1)
      ),
      new Event(
        "Cryptonite",
        `Won HackMIT’s “Best Fintech” award with web app that predicts Ethereum’s price
         by performing sentiment analysis on tweets.`,
        null,
        Category.Projects,
        new Date(2017, 9, 17)
      ),
      new Event(
        `Finding the Lightcurves and Rotation Periods of
         2925 Beatty, 3012 Minsk, and 9060 Toyokawa`,
        `Measured the quantity of light reflected from three unresearched,
         near-earth asteroids over the course of several months. Collected results to
         produce two ‘light curves” and predict the asteroids’ orbital periods;
         published in The Minor Planet Bulletin.`,
        "http://www.minorplanet.info/MPB/issues/MPB_43-3.pdf",
        Category.Publications,
        new Date(2016, 3, 31)
      ),
      new Event(
        "Twitch Interactive",
        `Worked as an extern on the Ingest team to plan and develop an internal tool with
         Go, HTML, CSS, and JS.`,
        null,
        Category.Employment,
        new Date(2018, 1, 1)
      ),
      new Event(
        "The Markov Corporation",
        `Built a web-based internal dashboard that presented debug data from cooking sessions.
         Technologies used included ReactJS, Redux, and Golang.
         Worked in Java/Kotlin to overhaul device logging system to use Elasticsearch.`,
        null,
        Category.Employment,
        new Date(2018, 6, 1)
      )
    ],
    context: [
      new Context(
        "Phillips Academy",
        "I began attending the Phillips Academy highschool in Andover, Massachussets.",
        null,
        Category.Education,
        new Date(2013, 9, 1),
        new Date(2017, 9, 1),
        colors.blue.default
      ),
      new Context(
        "MIT",
        "I began studying Mathematics and Computer Science (courses 6-3 and 18) at MIT.",
        null,
        Category.Education,
        new Date(2017, 9, 1),
        new Date(2021, 6, 1),
        colors.red.default
      )
    ],
    activeCategory: Category.Biography
  };

  render() {
    return (
      <div className="App">
        <TitleBar />
        <Timeline events={this.state.events} context={this.state.context} />
      </div>
    );
  }
}

export default App;
