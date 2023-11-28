import React from "react";

import { Progress } from "@/components";

export const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(60), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress aria-label="Subscriptions funded so far" className="max-w-md" value={progress}>
      <Progress.Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
    </Progress>
  );
};
