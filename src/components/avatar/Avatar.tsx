import React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      sm: "h-8 w-8",
      base: "h-10 w-10",
      lg: "h-11 w-11"
    }
  },
  defaultVariants: {
    size: "base"
  }
});

export interface AvatarBaseProps extends AvatarPrimitive.AvatarProps, VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarBaseProps>(
  ({ className, children, size, ...props }, forwardedRef) => {
    return (
      <AvatarPrimitive.Root ref={forwardedRef} className={cn(avatarVariants({ size }), className)} {...props}>
        {children}
      </AvatarPrimitive.Root>
    );
  }
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export interface AvatarImageProps extends AvatarPrimitive.AvatarImageProps {}

const AvatarImage = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Image>, AvatarImageProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <AvatarPrimitive.Image
        ref={forwardedRef}
        className={cn("aspect-square h-full w-full object-cover", className)}
        {...props}
      >
        {children}
      </AvatarPrimitive.Image>
    );
  }
);
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export interface AvatarFallbackProps extends AvatarPrimitive.AvatarFallbackProps {}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <AvatarPrimitive.Fallback
      ref={forwardedRef}
      className={cn(
        "border-primary-default bg-component-primary-default text-primary-muted flex h-full w-full select-none items-center justify-center rounded-full border",
        className
      )}
      {...props}
    >
      {children}
    </AvatarPrimitive.Fallback>
  );
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const AvatarCompoundComponent = Object.assign({}, Avatar, {
  Image: AvatarImage,
  Fallback: AvatarFallback
});

export { AvatarCompoundComponent as Avatar };
