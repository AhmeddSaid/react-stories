import "./Story.css";
import Header from "../Header/Header";
import Stories from "stories-react";
import {
  storyOne,
  storyTwo,
  storyThree,
  storyFour,
  storyFive,
  storySix,
  storySeven,
  storyEight,
  storyNine,
  storyTen,
  storyEleven,
  storyTwelve,
} from "../Stories/Stories";

function Story() {
  const storyHolder = [
    {
      type: "component",
      duration: 5000,
      component: storyOne,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTwo,
    },
    {
      type: "component",
      duration: 5000,
      component: storyThree,
    },
    {
      type: "component",
      duration: 5000,
      component: storyFour,
    },
    {
      type: "component",
      duration: 5000,
      component: storyFive,
    },
    {
      type: "component",
      duration: 5000,
      component: storySix,
    },
    {
      type: "component",
      duration: 5000,
      component: storySeven,
    },
    {
      type: "component",
      duration: 5000,
      component: storyEight,
    },
    {
      type: "component",
      duration: 5000,
      component: storyNine,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTen,
    },
    {
      type: "component",
      duration: 5000,
      component: storyEleven,
    },
    {
      type: "component",
      duration: 5000,
      component: storyTwelve,
    },
  ];

  return (
    <div className="story">
      <Header />
      <Stories
        width="100%"
        height="100vh"
        stories={storyHolder}
      />
    </div>
  );
}

export default Story;
