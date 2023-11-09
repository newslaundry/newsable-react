import { createContext, useContext } from "react";

export interface TabsProps {
  variant: "underlined" | "default" | "pill";
}

const TabsContext = createContext<TabsProps | null>(null);

export const useTabsContext = () => {
  const ctx = useContext(TabsContext);

  if (!ctx) {
    throw new Error("Must be rendered as a child of the Tabs component");
  }

  return ctx;
};

export { TabsContext };
