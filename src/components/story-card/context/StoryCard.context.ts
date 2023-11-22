import { createContext, useContext } from "react";

import { StoryCardData } from "../types/story-card-types";

export interface StoryCardProps {
  storyCardData: StoryCardData;
  orientation?: "horizontal" | "vertical";
}

const StoryCardContext = createContext<StoryCardProps | null>(null);

export const useStoryCardContext = () => {
  const ctx = useContext(StoryCardContext);

  if (!ctx) {
    throw new Error("StoryCard.* component must be rendered as child of StoryCard component");
  }

  return ctx;
};

export { StoryCardContext };
