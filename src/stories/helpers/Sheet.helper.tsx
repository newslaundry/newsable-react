import React, { useEffect, useRef } from "react";

import { MessageCircle, MessageSquare, ThumbsUp } from "lucide-react";

import { Avatar, Button, HStack, Heading, Sheet, Text, Textarea, VStack, VisuallyHidden } from "@/components";

const CommentsSheet = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log({ height: divRef.current?.scrollHeight });
  }, [divRef.current?.scrollHeight]);

  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button aria-label="Comments on this story" className="gap-1">
          <MessageSquare className="h-4 w-4" aria-hidden="true" />
          <span className="font-mono text-sm font-medium">30</span>
          <VisuallyHidden> comments</VisuallyHidden>
        </Button>
      </Sheet.Trigger>
      <Sheet.Content className="flex flex-col rounded-l">
        <Sheet.Header>
          <Sheet.Title className="text-lg lg:text-xl">Comments</Sheet.Title>
          <Sheet.Description>
            We take comments from subscribers only. Subscribe now to be able to post comments. Already a
            subscriber? Login to post comments
          </Sheet.Description>
          <div className="relative w-full">
            <Textarea placeholder="Share your thoughts" className="resize-none" rows={4} />
            <HStack className="absolute bottom-2 right-2 gap-2">
              <Button variant="neutral" size="sm">
                Cancel
              </Button>
              <Button variant="success" size="sm">
                Comment
              </Button>
            </HStack>
          </div>
        </Sheet.Header>
        <VStack ref={divRef} className="mt-4 flex-1 gap-4">
          <Heading weight="h3" className="text-base lg:text-lg">
            View all comments
          </Heading>
          {/* <ScrollArea
            style={{ height: "calc(100vh - 350px)" }}
            className="flex min-h-fit overflow-visible border-none shadow-none"
            scrollHideDelay={300}
          > */}
          <VStack className="gap-8 px-1">
            {/* PARENT COMMENT */}
            <div className="w-full space-y-2">
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Avatar>
                    <Avatar.Image
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="Rishabh Dixit"
                    />
                    <Avatar.Fallback>RD</Avatar.Fallback>
                  </Avatar>
                  <VStack>
                    <Text>Rishabh Dixit</Text>
                    <time
                      className="font-mono text-xs text-neutral-muted"
                      dateTime={new Date(1695621176317).toISOString()}
                    >
                      {new Date(1695621176317).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </VStack>
                </HStack>
                {/* <Dropdown>
                    <Dropdown.Trigger className="h-8" asChild>
                      <Button variant="outline" aria-label="Options menu" size="sm">
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content sideOffset={4} align="end" showArrow={false} className="z-[60] p-1">
                      <Dropdown.Item icon={<Pencil className="h-4 w-4" aria-hidden="true" />} className="text-neutral-muted">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Trash2 className="h-4 w-4" aria-hidden="true" />} className="text-danger-muted">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown> */}
              </HStack>
              <Text className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum illo deleniti tempora
                tempore doloribus distinctio, excepturi eum doloremque et delectus est veniam libero cumque
                culpa quibusdam dolorum. Iure.
              </Text>
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Button
                    variant="outline"
                    aria-label="Number of likes"
                    size="sm"
                    className="focus-visible:relative"
                  >
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-sm">3</span>
                  </Button>
                  <Button variant="outline" aria-label="Number of comments" size="sm">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <HStack className="items-baseline gap-1">
                      <span className="font-mono text-xs">2</span>
                      <span>replies</span>
                    </HStack>
                  </Button>
                </HStack>
                <Button variant="outline" aria-label="Reply to the comment" size="sm">
                  {/* <MessageCircle className="h-4 w-4" aria-hidden="true" /> */}
                  <span>Reply</span>
                </Button>
              </HStack>
            </div>
            {/* CHILD COMMENT(S) */}
            <VStack className="ml-4">
              {/* CHILD COMMENT 1 */}
              <div className="space-y-2 border-l-2 border-neutral-default pl-4">
                <HStack className="justify-between">
                  <HStack className="gap-2">
                    <Avatar>
                      <Avatar.Image
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                        alt="Rishabh Dixit"
                      />
                      <Avatar.Fallback>RD</Avatar.Fallback>
                    </Avatar>
                    <VStack>
                      <Text>Rishabh Dixit</Text>
                      <time
                        className="font-mono text-xs text-neutral-muted"
                        dateTime={new Date(1695621176317).toISOString()}
                      >
                        {new Date(1695621176317).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </time>
                    </VStack>
                  </HStack>
                  {/* <Dropdown>
                      <Dropdown.Trigger className="h-8" asChild>
                        <Button variant="outline" aria-label="Options menu" size="sm">
                          <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                        </Button>
                      </Dropdown.Trigger>
                      <Dropdown.Content sideOffset={4} align="end" showArrow={false} className="z-[60] p-1">
                        <Dropdown.Item icon={<Pencil className="h-4 w-4" aria-hidden="true" />} className="text-neutral-muted">
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item icon={<Trash2 className="h-4 w-4" aria-hidden="true" />} className="text-danger-muted">
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Content>
                    </Dropdown> */}
                </HStack>
                <Text className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum illo deleniti
                  tempora tempore doloribus distinctio, excepturi eum doloremque et delectus est veniam libero
                  cumque culpa quibusdam dolorum. Iure.
                </Text>
                <HStack className="justify-between">
                  <HStack className="gap-2">
                    <Button variant="outline" aria-label="Number of likes" size="sm">
                      <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                      <span className="font-mono text-sm">3</span>
                    </Button>
                    <Button variant="outline" aria-label="Number of comments" size="sm">
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <HStack className="items-baseline gap-1">
                        <span className="font-mono text-xs">2</span>
                        <span>replies</span>
                      </HStack>
                    </Button>
                  </HStack>
                </HStack>
              </div>
            </VStack>
            <div className="w-full space-y-2">
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Avatar>
                    <Avatar.Image
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="Rishabh Dixit"
                    />
                    <Avatar.Fallback>RD</Avatar.Fallback>
                  </Avatar>
                  <VStack>
                    <Text>Rishabh Dixit</Text>
                    <time
                      className="font-mono text-xs text-neutral-muted"
                      dateTime={new Date(1695621176317).toISOString()}
                    >
                      {new Date(1695621176317).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </VStack>
                </HStack>
                {/* <Dropdown>
                    <Dropdown.Trigger className="h-8" asChild>
                      <Button variant="outline" aria-label="Options menu" size="sm">
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content sideOffset={4} align="end" showArrow={false} className="z-[60] p-1">
                      <Dropdown.Item icon={<Pencil className="h-4 w-4" aria-hidden="true" />} className="text-neutral-muted">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Trash2 className="h-4 w-4" aria-hidden="true" />} className="text-danger-muted">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown> */}
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum illo deleniti tempora
                tempore doloribus distinctio, excepturi eum doloremque et delectus est veniam libero cumque
                culpa quibusdam dolorum. Iure.
              </Text>
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Button variant="outline" aria-label="Number of likes" size="sm">
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-sm">3</span>
                  </Button>
                  <Button variant="outline" aria-label="Number of comments" size="sm">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <HStack className="items-baseline gap-1">
                      <span className="font-mono text-xs">2</span>
                      <span>replies</span>
                    </HStack>
                  </Button>
                </HStack>
                <Button variant="outline" aria-label="Reply to the comment" size="sm">
                  {/* <MessageCircle className="h-4 w-4" aria-hidden="true" /> */}
                  <span>Reply</span>
                </Button>
              </HStack>
            </div>
            <div className="w-full space-y-2">
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Avatar>
                    <Avatar.Image
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="Rishabh Dixit"
                    />
                    <Avatar.Fallback>RD</Avatar.Fallback>
                  </Avatar>
                  <VStack>
                    <Text>Rishabh Dixit</Text>
                    <time
                      className="font-mono text-xs text-neutral-muted"
                      dateTime={new Date(1695621176317).toISOString()}
                    >
                      {new Date(1695621176317).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </VStack>
                </HStack>
                {/* <Dropdown>
                    <Dropdown.Trigger className="h-8" asChild>
                      <Button variant="outline" aria-label="Options menu" size="sm">
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content sideOffset={4} align="end" showArrow={false} className="z-[60] p-1">
                      <Dropdown.Item icon={<Pencil className="h-4 w-4" aria-hidden="true" />} className="text-neutral-muted">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Trash2 className="h-4 w-4" aria-hidden="true" />} className="text-danger-muted">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown> */}
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum illo deleniti tempora
                tempore doloribus distinctio, excepturi eum doloremque et delectus est veniam libero cumque
                culpa quibusdam dolorum. Iure.
              </Text>
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Button variant="outline" aria-label="Number of likes" size="sm">
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-sm">3</span>
                  </Button>
                  <Button variant="outline" aria-label="Number of comments" size="sm">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <HStack className="items-baseline gap-1">
                      <span className="font-mono text-xs">2</span>
                      <span>replies</span>
                    </HStack>
                  </Button>
                </HStack>
                <Button variant="outline" aria-label="Reply to the comment" size="sm">
                  {/* <MessageCircle className="h-4 w-4" aria-hidden="true" /> */}
                  <span>Reply</span>
                </Button>
              </HStack>
            </div>
            <div className="w-full space-y-2">
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Avatar>
                    <Avatar.Image
                      src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                      alt="Rishabh Dixit"
                    />
                    <Avatar.Fallback>RD</Avatar.Fallback>
                  </Avatar>
                  <VStack>
                    <Text>Rishabh Dixit</Text>
                    <time
                      className="font-mono text-xs text-neutral-muted"
                      dateTime={new Date(1695621176317).toISOString()}
                    >
                      {new Date(1695621176317).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </time>
                  </VStack>
                </HStack>
                {/* <Dropdown>
                    <Dropdown.Trigger className="h-8" asChild>
                      <Button variant="outline" aria-label="Options menu" size="sm">
                        <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
                      </Button>
                    </Dropdown.Trigger>
                    <Dropdown.Content sideOffset={4} align="end" showArrow={false} className="z-[60] p-1">
                      <Dropdown.Item icon={<Pencil className="h-4 w-4" aria-hidden="true" />} className="text-neutral-muted">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item icon={<Trash2 className="h-4 w-4" aria-hidden="true" />} className="text-danger-muted">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown> */}
              </HStack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus cum illo deleniti tempora
                tempore doloribus distinctio, excepturi eum doloremque et delectus est veniam libero cumque
                culpa quibusdam dolorum. Iure.
              </Text>
              <HStack className="justify-between">
                <HStack className="gap-2">
                  <Button variant="outline" aria-label="Number of likes" size="sm">
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono text-sm">3</span>
                  </Button>
                  <Button variant="outline" aria-label="Number of comments" size="sm">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <HStack className="items-baseline gap-1">
                      <span className="font-mono text-xs">2</span>
                      <span>replies</span>
                    </HStack>
                  </Button>
                </HStack>
                <Button variant="outline" aria-label="Reply to the comment" size="sm">
                  {/* <MessageCircle className="h-4 w-4" aria-hidden="true" /> */}
                  <span>Reply</span>
                </Button>
              </HStack>
            </div>
          </VStack>
          {/* </ScrollArea> */}
          <Button size="sm">Load more comments</Button>
        </VStack>
        <Sheet.Footer></Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  );
};

export { CommentsSheet };
