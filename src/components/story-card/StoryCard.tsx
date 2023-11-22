import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import { formatDistance } from "date-fns";
import { Dot } from "lucide-react";

import type { BadgeBaseProps, HeadingBaseProps, TextBaseProps } from "@/components";
import { AspectRatio, Avatar, Badge, HStack, Heading, Link, Text, VStack } from "@/components";
import { cn } from "@/lib/utils";

import { StoryCardContext, StoryCardProps, useStoryCardContext } from "./context/StoryCard.context";

export interface StoryCardBaseProps extends React.ComponentPropsWithoutRef<"article">, StoryCardProps {}

const StoryCard = React.forwardRef<HTMLDivElement, StoryCardBaseProps>(
  ({ className, storyCardData, orientation = "vertical", children, ...props }, forwardedRef) => {
    return (
      <StoryCardContext.Provider value={{ storyCardData, orientation }}>
        <article
          ref={forwardedRef}
          className={cn(
            "data-[orientation=vertical]:flex data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-space-xs",
            "data-[orientation=horizontal]:horizontal-story-card-grid data-[orientation=horizontal]:gap-space-sm",
            className
          )}
          data-orientation={orientation}
          {...props}
        >
          {children}
        </article>
      </StoryCardContext.Provider>
    );
  }
);
StoryCard.displayName = "StoryCard";

export interface StoryCardImageProps extends React.ComponentPropsWithoutRef<"img"> {}

const StoryCardImage = React.forwardRef<HTMLImageElement, StoryCardImageProps>(
  ({ className, ...props }, forwardedRef) => {
    const { storyCardData, orientation } = useStoryCardContext();

    return (
      <AspectRatio ratio={16 / 9} data-orientation={orientation}>
        <img
          ref={forwardedRef}
          src={`https://gumlet.assettype.com/${storyCardData["hero-image-s3-key"]}?auto=format%2Ccompress&format=webp&w=700&dpr=2.0`}
          alt={storyCardData.headline}
          data-orientation={orientation}
          className={cn("aspect-video w-full rounded", className)}
          {...props}
        />
      </AspectRatio>
    );
  }
);
StoryCardImage.displayName = "StoryCardImage";

const storyCardSectionVariants = cva(
  "typography-paragraph-styles text-sm font-medium underline underline-offset-4",
  {
    variants: {
      variant: {
        neutral: "text-neutral-muted",
        accent: "text-accent-muted"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);

interface StoryCardSectionProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof storyCardSectionVariants> {}

const StoryCardSection = React.forwardRef<HTMLParagraphElement, StoryCardSectionProps>(
  ({ className, variant, ...props }, forwardedRef) => {
    const {
      storyCardData: { sections },
      orientation
    } = useStoryCardContext();
    const firstSection = sections[0];

    return (
      <p
        ref={forwardedRef}
        data-orientation={orientation}
        className={cn(storyCardSectionVariants({ variant }), className)}
        {...props}
      >
        {firstSection.name}
      </p>
    );
  }
);
StoryCardSection.displayName = "StoryCardSection";

const StoryCardSectionAsBadge = React.forwardRef<React.ElementRef<typeof Badge>, BadgeBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    const {
      storyCardData: { sections },
      orientation
    } = useStoryCardContext();
    const firstSection = sections[0];

    return (
      <Badge ref={forwardedRef} data-orientation={orientation} className={cn(className)} {...props}>
        {firstSection.name}
      </Badge>
    );
  }
);
StoryCardSectionAsBadge.displayName = "StoryCardSectionAsBadge";

const StoryCardTitle = React.forwardRef<React.ElementRef<typeof Heading>, HeadingBaseProps>(
  ({ className, weight = "h3", ...props }, forwardedRef) => {
    const {
      storyCardData: { headline },
      orientation
    } = useStoryCardContext();

    return (
      // <Link href={`/story/${id}`} className="line-clamp-2">
      <Heading
        ref={forwardedRef}
        weight={weight}
        className={cn("line-clamp-2 font-serif text-xl lg:text-2xl", className)}
        data-orientation={orientation}
        {...props}
      >
        {headline}
      </Heading>
      // </Link>
    );
  }
);
StoryCardTitle.displayName = "StoryCardTitle";

const StoryCardDescription = React.forwardRef<React.ElementRef<typeof Text>, TextBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    const {
      storyCardData: { subheadline },
      orientation
    } = useStoryCardContext();

    return (
      <Text
        ref={forwardedRef}
        className={cn("line-clamp-2 text-neutral-muted", className)}
        data-orientation={orientation}
        {...props}
      >
        {subheadline}
      </Text>
    );
  }
);
StoryCardDescription.displayName = "StoryCardDescription";

// const StoryCardDescriptionWithReadMore = React.forwardRef<React.ElementRef<typeof Text>, TextBaseProps>(
//   ({ className, ...props }, forwardedRef) => {
//     const { subheadline } = useStoryCardContext();

//     return (
//       <Text ref={forwardedRef} className={cn("line-clamp-3 text-neutral-muted", className)} {...props}>
//         {subheadline}
//       </Text>
//     );
//   }
// );
// StoryCardDescriptionWithReadMore.displayName = "StoryCardDescriptionWithReadMore";

export interface StoryCardAuthorsProps extends React.ComponentPropsWithoutRef<"div"> {}

const StoryCardAuthors = React.forwardRef<HTMLDivElement, StoryCardAuthorsProps>(
  ({ className, ...props }, forwardedRef) => {
    const {
      storyCardData: { authors },
      orientation
    } = useStoryCardContext();

    return (
      <div
        ref={forwardedRef}
        className={cn(
          "typography-paragraph-styles flex items-center gap-space-xxs text-sm font-medium text-neutral-muted",
          className
        )}
        role="group"
        data-orientation={orientation}
        {...props}
      >
        By
        <Authors authors={authors} />
      </div>
    );
  }
);

const getInitialsFromName = (name: string) => {
  return name
    .split(" ")
    .map(x => x.trim().charAt(0).toUpperCase())
    .join("");
};

const Authors = ({ authors }: { authors: StoryCardProps["storyCardData"]["authors"] }) => {
  if (authors.length <= 1) {
    return (
      <Text className="line-clamp-1 w-full text-sm font-medium">
        {authors.map(author => {
          return (
            <Link key={author.id} href={`/author/${author.id}`} title={author.name} className="inline-block">
              {author.name}
            </Link>
          );
        })}
      </Text>
    );
  }

  if (authors.length === 2) {
    return (
      <Text className="line-clamp-1 w-full text-sm font-medium">
        <Link href={`/author/${authors[0].id}`} title={authors[0].name} className="inline-block">
          {authors[0].name}
        </Link>
        <span className="mx-1">&</span>
        <Link href={`/author/${authors[1].id}`} title={authors[1].name} className="inline-block">
          {authors[1].name}
        </Link>
      </Text>
    );
  }

  return (
    <Text className="line-clamp-1 w-full text-sm font-medium">
      {authors.slice(0, authors.length - 1).map((author, i) => {
        return (
          <React.Fragment key={author.id}>
            <Link href={`/author/${author.id}`} title={author.name} className="inline-block">
              {author.name}
            </Link>
            {i !== authors.length - 2 ? <span className="mr-1">,</span> : null}
          </React.Fragment>
        );
      })}
      <span className="mx-1">&</span>
      <Link
        href={`/author/${authors[authors.length - 1].id}`}
        title={authors[authors.length - 1].name}
        className="inline-block"
      >
        {authors[authors.length - 1].name}
      </Link>
    </Text>
  );
};

export interface StoryCardAuthorGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  avatarGroupSize?: "sm" | "base" | "lg";
}

const StoryCardAuthorGroup = React.forwardRef<HTMLDivElement, StoryCardAuthorGroupProps>(
  ({ className, avatarGroupSize, ...props }, forwardedRef) => {
    const {
      storyCardData: { authors },
      orientation
    } = useStoryCardContext();

    return (
      <div
        ref={forwardedRef}
        className={cn("flex items-center gap-space-xs", className)}
        role="group"
        data-orientation={orientation}
        {...props}
      >
        <HStack className="-space-x-4">
          {authors.map(author => {
            return (
              <Avatar key={author.id} size={avatarGroupSize}>
                {author["avatar-url"] ? <Avatar.Image src={author["avatar-url"]} alt={author.name} /> : null}
                <Avatar.Fallback className={cn(avatarGroupSize === "sm" ? "text-sm" : "")}>
                  {getInitialsFromName(author.name)}
                </Avatar.Fallback>
              </Avatar>
            );
          })}
        </HStack>
        <Authors authors={authors} />
      </div>
    );
  }
);
StoryCardAuthorGroup.displayName = "StoryCardAuthorGroup";

export interface StoryCardAuthorGroupWithPublishedTimeProps extends React.ComponentPropsWithoutRef<"div"> {
  avatarGroupSize?: "sm" | "base" | "lg";
}

const StoryCardAuthorGroupWithPublishedTime = React.forwardRef<
  HTMLDivElement,
  StoryCardAuthorGroupWithPublishedTimeProps
>(({ className, avatarGroupSize, ...props }, forwardedRef) => {
  const {
    storyCardData: { authors, ...storyData },
    orientation
  } = useStoryCardContext();

  return (
    <div
      ref={forwardedRef}
      className={cn("flex gap-space-xs", className)}
      role="group"
      data-orientation={orientation}
      {...props}
    >
      <HStack className="-space-x-4">
        {authors.map(author => {
          return (
            <Avatar key={author.id} size={avatarGroupSize}>
              {author["avatar-url"] ? <Avatar.Image src={author["avatar-url"]} alt={author.name} /> : null}
              <Avatar.Fallback>{getInitialsFromName(author.name)}</Avatar.Fallback>
            </Avatar>
          );
        })}
      </HStack>
      <VStack className="w-full">
        <Authors authors={authors} />
        <time
          className="font-mono text-sm text-neutral-muted"
          dateTime={new Date(storyData["published-at"]).toISOString()}
        >
          {new Date(storyData["published-at"]).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </time>
      </VStack>
    </div>
  );
});
StoryCardAuthorGroupWithPublishedTime.displayName = "StoryCardAuthorGroupWithPublishedTime";

export interface StoryCardAuthorGroupWithPublishedAndReadTimeProps
  extends React.ComponentPropsWithoutRef<"div"> {
  avatarGroupSize?: "sm" | "base" | "lg";
}

const StoryCardAuthorGroupWithPublishedAndReadTime = React.forwardRef<
  HTMLDivElement,
  StoryCardAuthorGroupWithPublishedAndReadTimeProps
>(({ className, avatarGroupSize, ...props }, forwardedRef) => {
  const {
    storyCardData: { authors, ...storyData },
    orientation
  } = useStoryCardContext();

  return (
    <div
      ref={forwardedRef}
      className={cn("flex gap-space-xs", className)}
      role="group"
      data-orientation={orientation}
      {...props}
    >
      <HStack className="-space-x-4">
        {authors.map(author => {
          return (
            <Avatar key={author.id} size={avatarGroupSize}>
              {author["avatar-url"] ? <Avatar.Image src={author["avatar-url"]} alt={author.name} /> : null}
              <Avatar.Fallback>{getInitialsFromName(author.name)}</Avatar.Fallback>
            </Avatar>
          );
        })}
      </HStack>
      <VStack className="w-full">
        <Authors authors={authors} />
        <HStack className="text-neutral-muted">
          <time className="font-mono text-sm" dateTime={new Date(storyData["published-at"]).toISOString()}>
            {new Date(storyData["published-at"]).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
          <Dot className="h-4 w-4" />
          <Text className="font-mono text-sm text-neutral-muted">12 min read</Text>
        </HStack>
      </VStack>
    </div>
  );
});
StoryCardAuthorGroupWithPublishedAndReadTime.displayName = "StoryCardAuthorGroupWithPublishedAndReadTime";

export interface StoryCardPublishedTimeProps extends React.ComponentPropsWithoutRef<"time"> {}

const StoryCardPublishedTime = React.forwardRef<HTMLTimeElement, StoryCardPublishedTimeProps>(
  ({ className, ...props }, forwardedRef) => {
    const { storyCardData, orientation } = useStoryCardContext();

    return (
      <time
        ref={forwardedRef}
        className={cn("font-mono text-sm", className)}
        data-orientation={orientation}
        dateTime={new Date(storyCardData["published-at"]).toISOString()}
        {...props}
      >
        {new Date(storyCardData["published-at"]).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
      </time>
    );
  }
);
StoryCardPublishedTime.displayName = "StoryCardPublishedTime";

export interface StoryCardRelativePublishedTimeProps extends React.ComponentPropsWithoutRef<"time"> {
  /**
   * Adds 'Published' text
   */
  addPrefix?: boolean;

  /**
   * Adds 'ago' text
   */
  addSuffix?: boolean;
}

const StoryCardRelativePublishedTime = React.forwardRef<HTMLTimeElement, StoryCardRelativePublishedTimeProps>(
  ({ className, addPrefix = true, addSuffix = true, ...props }, forwardedRef) => {
    const { storyCardData, orientation } = useStoryCardContext();

    return (
      <p className="typography-paragraph-styles flex items-center gap-space-xxs text-sm font-medium text-neutral-muted">
        {addPrefix ? "Published" : ""}
        <time
          ref={forwardedRef}
          className={cn("", className)}
          data-orientation={orientation}
          dateTime={new Date(storyCardData["published-at"]).toISOString()}
          {...props}
        >
          {formatDistance(new Date(storyCardData["published-at"]), new Date(), {
            addSuffix: addSuffix
          })}
        </time>
      </p>
    );
  }
);
StoryCardRelativePublishedTime.displayName = "StoryCardRelativePublishedTime";

const StoryCardCompoundComponent = Object.assign({}, StoryCard, {
  Image: StoryCardImage,
  Section: StoryCardSection,
  SectionAsBadge: StoryCardSectionAsBadge,
  Title: StoryCardTitle,
  Description: StoryCardDescription,
  Authors: StoryCardAuthors,
  AuthorGroup: StoryCardAuthorGroup,
  AuthorGroupWithPublishedTime: StoryCardAuthorGroupWithPublishedTime,
  AuthorGroupWithPublishedTimeAndReadTime: StoryCardAuthorGroupWithPublishedAndReadTime,
  PublishedTime: StoryCardPublishedTime,
  RelativePublishedTime: StoryCardRelativePublishedTime
});

export { StoryCardCompoundComponent as StoryCard };
