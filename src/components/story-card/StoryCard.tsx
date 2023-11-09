import React from "react";

import { Dot } from "lucide-react";

import {
  AspectRatio,
  Avatar,
  Badge,
  BadgeBaseProps,
  HStack,
  Heading,
  HeadingBaseProps,
  Link,
  Text,
  TextBaseProps,
  VStack
} from "@/components";
import { cn } from "@/lib/utils";

import { StoryCardContext, useStoryCardContext } from "./context/StoryCard.context";
import { StoryCardProps } from "./types/story-card-types";

export interface StoryCardBaseProps extends React.ComponentPropsWithoutRef<"article"> {
  storyCardData: StoryCardProps;
}

const StoryCard = React.forwardRef<HTMLDivElement, StoryCardBaseProps>(
  ({ className, storyCardData, children, ...props }, forwardedRef) => {
    return (
      <StoryCardContext.Provider value={{ ...storyCardData }}>
        <article ref={forwardedRef} className={cn("flex flex-col items-start gap-2", className)} {...props}>
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
    const storyData = useStoryCardContext();

    return (
      <Link href={storyData.slug} className="mb-2 w-full">
        <AspectRatio ratio={16 / 9}>
          <img
            ref={forwardedRef}
            src={`https://gumlet.assettype.com/${storyData["hero-image-s3-key"]}?auto=format%2Ccompress&format=webp&w=700&dpr=2.0`}
            alt={storyData.headline}
            className={cn("w-full rounded shadow", className)}
            {...props}
          />
        </AspectRatio>
      </Link>
    );
  }
);
StoryCardImage.displayName = "StoryCardImage";

const StoryCardSection = React.forwardRef<React.ElementRef<typeof Badge>, BadgeBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    const { sections } = useStoryCardContext();
    const firstSection = sections[0];

    return (
      <Badge ref={forwardedRef} className={cn(className)} {...props}>
        {firstSection.name}
      </Badge>
    );
  }
);
StoryCardSection.displayName = "StoryCardSection";

const StoryCardTitle = React.forwardRef<React.ElementRef<typeof Heading>, HeadingBaseProps>(
  ({ className, weight = "h3", ...props }, forwardedRef) => {
    const { headline, slug } = useStoryCardContext();

    return (
      <Link href={`https://www.newslaundry.com/${slug}`} className="line-clamp-2">
        <Heading
          ref={forwardedRef}
          weight={weight}
          className={cn("line-clamp-2 font-serif text-xl lg:text-2xl", className)}
          {...props}
        >
          {headline}
        </Heading>
      </Link>
    );
  }
);
StoryCardTitle.displayName = "StoryCardTitle";

const StoryCardDescription = React.forwardRef<React.ElementRef<typeof Text>, TextBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    const { subheadline } = useStoryCardContext();

    return (
      <Text ref={forwardedRef} className={cn("line-clamp-2 text-primary-muted", className)} {...props}>
        {subheadline}
      </Text>
    );
  }
);
StoryCardDescription.displayName = "StoryCardDescription";

const StoryCardDescriptionWithReadMore = React.forwardRef<React.ElementRef<typeof Text>, TextBaseProps>(
  ({ className, ...props }, forwardedRef) => {
    const { subheadline } = useStoryCardContext();

    return (
      <Text ref={forwardedRef} className={cn("line-clamp-3 text-primary-muted", className)} {...props}>
        {subheadline}
      </Text>
    );
  }
);
StoryCardDescriptionWithReadMore.displayName = "StoryCardDescriptionWithReadMore";

const StoryCardReadMore = React.forwardRef(() => {
  return <div></div>;
});
StoryCardReadMore.displayName = "StoryCardReadMore";

const getInitialsFromName = (name: string) => {
  return name
    .split(" ")
    .map(x => x.trim().charAt(0).toUpperCase())
    .join("");
};

const Authors = ({ authors }: { authors: StoryCardProps["authors"] }) => {
  if (authors.length <= 1) {
    return (
      <Text className="line-clamp-1 w-full text-sm font-medium">
        {authors.map(author => {
          return (
            <Link
              key={author.id}
              href={`https://www.newslaundry.com/${author.slug}`}
              title={author.name}
              className="inline-block"
            >
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
        <Link
          href={`https://www.newslaundry.com/${authors[0].slug}`}
          title={authors[0].name}
          className="inline-block"
        >
          {authors[0].name}
        </Link>
        <span className="mx-1">&</span>
        <Link
          href={`https://www.newslaundry.com/${authors[1].slug}`}
          title={authors[1].name}
          className="inline-block"
        >
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
            <Link
              href={`https://www.newslaundry.com/${author.slug}`}
              title={author.name}
              className="inline-block"
            >
              {author.name}
            </Link>
            {i !== authors.length - 2 ? <span className="mr-1">,</span> : null}
          </React.Fragment>
        );
      })}
      <span className="mx-1">&</span>
      <Link
        href={`https://www.newslaundry.com/${authors[authors.length - 1].slug}`}
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
    const { authors } = useStoryCardContext();

    return (
      <div ref={forwardedRef} className={cn("flex items-center gap-2", className)} role="group" {...props}>
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
  const { authors, ...storyData } = useStoryCardContext();

  return (
    <div ref={forwardedRef} className={cn("flex gap-2", className)} role="group" {...props}>
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
          className="font-mono text-sm text-primary-muted"
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
  const { authors, ...storyData } = useStoryCardContext();

  return (
    <div ref={forwardedRef} className={cn("flex gap-2", className)} role="group" {...props}>
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
        <HStack className="text-primary-muted">
          <time className="font-mono text-sm" dateTime={new Date(storyData["published-at"]).toISOString()}>
            {new Date(storyData["published-at"]).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </time>
          <Dot className="h-4 w-4" />
          <Text className="font-mono text-sm text-primary-muted">12 min read</Text>
        </HStack>
      </VStack>
    </div>
  );
});
StoryCardAuthorGroupWithPublishedAndReadTime.displayName = "StoryCardAuthorGroupWithPublishedAndReadTime";

const StoryCardCompoundComponent = Object.assign({}, StoryCard, {
  Image: StoryCardImage,
  Section: StoryCardSection,
  Title: StoryCardTitle,
  Description: StoryCardDescription,
  DescriptionWithReadMore: StoryCardDescriptionWithReadMore,
  ReadMore: StoryCardReadMore,
  AuthorGroup: StoryCardAuthorGroup,
  AuthorGroupWithPublishedTime: StoryCardAuthorGroupWithPublishedTime,
  AuthorGroupWithPublishedTimeAndReadTime: StoryCardAuthorGroupWithPublishedAndReadTime
});

export { StoryCardCompoundComponent as StoryCard };
