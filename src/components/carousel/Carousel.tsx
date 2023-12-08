import React from "react";

import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react";

import type { ButtonBaseProps } from "@/components";
import { Button } from "@/components";
import { cn } from "@/lib/utils";

export interface CarouselBaseProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = React.forwardRef<HTMLDivElement, CarouselBaseProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("relative w-full max-w-3xl", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("overflow-hidden rounded", className)}
        // role="region"
        // aria-roledescription="carousel"
        {...props}
      >
        <div className="flex touch-pan-y">{children}</div>
      </div>
    );
  }
);
CarouselContent.displayName = "CarouselContent";

export interface CarouselSlideProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselSlide = React.forwardRef<HTMLDivElement, CarouselSlideProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn("relative -z-20 aspect-video h-full min-w-full basis-full p-1", className)}
        role="group"
        aria-roledescription="slide"
        {...props}
      >
        {children}
      </div>
    );
  }
);
CarouselSlide.displayName = "CarouselSlide";

export interface CarouselPrevArrowButtonProps extends ButtonBaseProps {}

const CarouselPrevArrowButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  CarouselPrevArrowButtonProps
>(({ className, disabled, ...props }, forwardedRef) => {
  return (
    <Button
      ref={forwardedRef}
      className={cn(
        "absolute left-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full p-0 opacity-75",
        className
      )}
      disabled={disabled}
      aria-label="Previous slide button"
      {...props}
    >
      <ChevronLeft
        aria-hidden={true}
        className={`h-6 w-6 shrink-0 ${disabled ? "text-neutral-muted" : "text-neutral-default"}`}
      />
    </Button>
  );
});
CarouselPrevArrowButton.displayName = "CarouselPrevArrowButton";

export interface CarouselNextArrowButtonProps extends ButtonBaseProps {}

const CarouselNextArrowButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  CarouselPrevArrowButtonProps
>(({ className, disabled, ...props }, forwardedRef) => {
  return (
    <Button
      ref={forwardedRef}
      className={cn(
        "absolute right-2 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full p-0 opacity-75",
        className
      )}
      disabled={disabled}
      aria-label="Next slide button"
      {...props}
    >
      <ChevronRight
        aria-hidden={true}
        className={`h-6 w-6 shrink-0 ${disabled ? "text-neutral-muted" : "text-neutral-default"}`}
      />
    </Button>
  );
});
CarouselNextArrowButton.displayName = "CarouselNextArrowButton";

export interface CarouselButtonIndicatorsProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselButtonIndicators = React.forwardRef<HTMLDivElement, CarouselButtonIndicatorsProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={cn(
          "absolute inset-x-0 bottom-2 flex items-center justify-center text-neutral-default",
          className
        )}
        {...props}
      >
        <div className="bg-component-neutral-default/25 flex items-center justify-center gap-space-xs rounded-full component-padding-sm">
          {children}
        </div>
      </div>
    );
  }
);
CarouselButtonIndicators.displayName = "CarouselButtonIndicators";

export interface CarouselDotButtonProps extends ButtonBaseProps {}

const CarouselDotButton = React.forwardRef<React.ElementRef<typeof Button>, CarouselDotButtonProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Button
        ref={forwardedRef}
        className={cn("h-4 w-4 rounded-full !p-0", className)}
        aria-label="Carousel dot indicator button"
        {...props}
      />
    );
  }
);
CarouselDotButton.displayName = "CarouselDotButton";

export interface CarouselResetButtonProps extends ButtonBaseProps {}

const CarouselResetButton = React.forwardRef<React.ElementRef<typeof Button>, CarouselResetButtonProps>(
  ({ className, ...props }, forwardedRef) => {
    return (
      <Button
        ref={forwardedRef}
        size="sm"
        className={cn("absolute right-2 top-2 gap-1", className)}
        {...props}
      >
        <RotateCw className="h-4 w-4" />
        Reset
      </Button>
    );
  }
);
CarouselResetButton.displayName = "CarouselResetButton";

export interface CarouselPlayPauseButtonProps extends ButtonBaseProps {}

const CarouselPlayPauseButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  CarouselPlayPauseButtonProps
>(({ className, children, ...props }, forwardedRef) => {
  return (
    <Button ref={forwardedRef} size="sm" className={cn("absolute left-2 top-2 gap-1", className)} {...props}>
      {children}
    </Button>
  );
});
CarouselPlayPauseButton.displayName = "CarouselPlayPauseButton";

const CarouselCompoundComponent = Object.assign({}, Carousel, {
  Content: CarouselContent,
  Slide: CarouselSlide,
  PrevArrowButton: CarouselPrevArrowButton,
  NextArrowButton: CarouselNextArrowButton,
  ResetButton: CarouselResetButton,
  PlayPauseButton: CarouselPlayPauseButton,
  ButtonIndicators: CarouselButtonIndicators,
  DotButton: CarouselDotButton
});

export { CarouselCompoundComponent as Carousel };
