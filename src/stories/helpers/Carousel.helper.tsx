import React, { useCallback, useState } from "react";

import EmblaAutoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Pause, Play } from "lucide-react";

import { Carousel, Heading, Text, useArrowButtons, useDotButtons } from "@/components";

const items = [
  {
    src: "https://images.assettype.com/newslaundry/2023-05/02808157-6d2b-4170-8037-a8afc4f527b3/london22.jpeg",
    text: "London, May 2022"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/e17756fc-0f3b-4d9a-95eb-21a86420586f/sydney.jpeg",
    text: "Sydney, May 2022"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/c27e3818-6a8f-48db-b1b1-633f4bc6e494/melbourne.jpeg",
    text: "Melbourne, June 2022"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/79a6f4b5-9300-42c0-a1c0-f5a6d2125b08/mumbai.jpeg",
    text: "Mumbai, September 2022"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/51a2896c-480f-4206-8b06-6a54c4bd864f/subscribers_meet_up_aug_delhi.jpeg",
    text: "Delhi, July 2022"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/cdc9fb2e-afaa-4f3a-aa32-bef965e76638/boston.jpeg",
    text: "Boston, February 2018"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/d039cecc-57e2-4afc-b2be-97b22867a185/michigan.jpeg",
    text: "Michigan, April 2023"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-05/c794a363-dfd2-4d73-8b5a-439ca6d83e40/london_meetup_may2023.jpeg",
    text: "London, May 2023"
  },
  {
    src: "https://images.assettype.com/newslaundry/2023-06/30600284-3857-4f6f-906f-8607710ddbb6/img_2716_2.jpg",
    text: "Bengaluru, June 2023"
  }
];

export const CarouselDemo = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const { scrollSnaps, onDotButtonClick, selectedIndex } = useDotButtons(emblaApi);
  const { onNextButtonClick, onPrevButtonClick, nextBtnDisabled, prevBtnDisabled } =
    useArrowButtons(emblaApi);

  return (
    <Carousel aria-label="Newslaundry subscriber meetups">
      <Carousel.Content ref={emblaRef} aria-live="polite" aria-atomic="false">
        {items.map((item, i) => (
          <Carousel.Slide key={i} aria-label={`${i + 1} of ${items.length}`}>
            <img src={item.src} alt={item.text} className="h-full w-full object-cover" />
          </Carousel.Slide>
        ))}
      </Carousel.Content>

      <Carousel.PrevArrowButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <Carousel.NextArrowButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

      <Carousel.ButtonIndicators>
        {scrollSnaps.map((_, i) => (
          <Carousel.DotButton
            key={i}
            onClick={() => onDotButtonClick(i)}
            className={
              i === selectedIndex
                ? "border-accent-default bg-component-accent-solid-default"
                : "bg-component-neutral-default"
            }
          />
        ))}
      </Carousel.ButtonIndicators>
    </Carousel>
  );
};

export const CarouselWithAutoplay = () => {
  const [isAutoplaying, setIsAutoplaying] = useState(true);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    EmblaAutoplay({
      active: isAutoplaying,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })
  ]);

  const { scrollSnaps, onDotButtonClick, selectedIndex } = useDotButtons(emblaApi);

  const resetAutoPlay = useCallback(() => {
    if (!emblaApi) return;

    emblaApi.scrollTo(0);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (!emblaApi) return;

    // @ts-expect-error - 3rd party API (Embla)
    emblaApi.plugins().autoplay?.stop();
  }, [emblaApi]);

  return (
    <div className="flex w-full flex-col items-center space-y-8">
      <div className="flex w-full flex-col items-center space-y-4 text-center">
        <Heading weight="h2">Newslaundry subscriber meetups</Heading>
        <Text className="max-w-5xl">
          Newslaundry has a tightly knit community of engaged subscribers across the world. Subscribe now to
          be a part of an engaged community that believes in the ethos of free and independent press and get a
          chance to meet like minded people.
        </Text>
      </div>
      <Carousel onFocusCapture={stopAutoplay} aria-label="Newslaundry subscriber meetups">
        <Carousel.Content ref={emblaRef} aria-live="off" aria-atomic="false">
          {items.map((item, i) => (
            <Carousel.Slide aria-label={item.text} key={i}>
              <img src={item.src} alt={item.text} className="h-full w-full object-cover" loading="eager" />
            </Carousel.Slide>
          ))}
        </Carousel.Content>
        <Carousel.PlayPauseButton
          aria-label={`${isAutoplaying ? "Pause" : "Play"} slide rotation`}
          onClick={() => {
            setIsAutoplaying(preAutoplaying => !preAutoplaying);
          }}
          variant="accent"
        >
          {isAutoplaying ? (
            <Pause className="h-4 w-4 text-neutral-default" aria-hidden="true" fill="#11181c" />
          ) : (
            <Play className="h-4 w-4 text-neutral-default" aria-hidden="true" fill="#11181c" />
          )}
        </Carousel.PlayPauseButton>
        <Carousel.ResetButton onClick={resetAutoPlay} variant="accent" aria-label="Reset slide rotation" />
        <Carousel.ButtonIndicators>
          {scrollSnaps.map((_, i) => (
            <Carousel.DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={
                i === selectedIndex
                  ? "border-accent-default bg-component-accent-solid-default hover:bg-component-accent-solid-hover"
                  : "border-neutral-default bg-component-neutral-default hover:bg-component-neutral-solid-hover"
              }
            />
          ))}
        </Carousel.ButtonIndicators>
      </Carousel>
    </div>
  );
};
