import { createContext, useContext } from "react";

import { StoryCardProps } from "../types/story-card-types";

const StoryCardContext = createContext<StoryCardProps | null>(null);

export const useStoryCardContext = () => {
  const ctx = useContext(StoryCardContext);

  if (!ctx) {
    throw new Error("StoryCard.* component must be rendered as child of StoryCard component");
  }

  return ctx;
};

export { StoryCardContext };
