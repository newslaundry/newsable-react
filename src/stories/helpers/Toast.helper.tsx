import React from "react";

import { Button, ToastAction, Toaster, useToast } from "@/components";

const ToastWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Toaster />
    </div>
  );
};

export const PrimaryToast = () => {
  const { toast } = useToast();

  return (
    <ToastWrapper>
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM"
          });
        }}
      >
        Show Toast
      </Button>
    </ToastWrapper>
  );
};

export const WithAction = () => {
  const { toast } = useToast();

  return (
    <ToastWrapper>
      <Button
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }}
      >
        Show Toast
      </Button>
    </ToastWrapper>
  );
};

export const DangerToast = () => {
  const { toast } = useToast();

  return (
    <ToastWrapper>
      <Button
        onClick={() => {
          toast({
            variant: "danger",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
            action: <ToastAction altText="Try again">Try again</ToastAction>
          });
        }}
      >
        Show Toast
      </Button>
    </ToastWrapper>
  );
};

export const SuccessToast = () => {
  const { toast } = useToast();

  return (
    <ToastWrapper>
      <Button
        onClick={() => {
          toast({
            variant: "success",
            title: "Thank you for subscribing!",
            description: "We'll ship your merchandise order soon.",
            action: <ToastAction altText="Redirect to account details page">Go to accounts page</ToastAction>
          });
        }}
      >
        Show Toast
      </Button>
    </ToastWrapper>
  );
};
