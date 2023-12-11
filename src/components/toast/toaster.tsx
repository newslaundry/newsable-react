import React from "react";

import { Toast, useToast } from "@/components";

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            {/* <div className="grid gap-space-xs"> */}
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && <Toast.Description>{description}</Toast.Description>}
            {action}
            {/* </div> */}
            <Toast.Close />
          </Toast>
        );
      })}
      <Toast.Viewport />
    </Toast.Provider>
  );
};
