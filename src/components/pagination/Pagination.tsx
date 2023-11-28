import React, { useEffect } from "react";

import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";

import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { usePagination } from "./context/Pagination.context";

export interface PaginationBaseProps extends React.ComponentPropsWithoutRef<"nav"> {
  showPrevAndNextButtons?: boolean;
  showFirstAndLastButtons?: boolean;
  count: number;
}

const Pagination = React.forwardRef<React.ElementRef<"nav">, PaginationBaseProps>(
  (
    { className, count, showFirstAndLastButtons = true, showPrevAndNextButtons = true, ...props },
    forwardedRef
  ) => {
    const paginationState = usePagination(state => state);

    useEffect(() => {
      paginationState.setCount(count);
      paginationState.setShowFirstAndLastButtons(showFirstAndLastButtons);
      paginationState.setShowPrevAndNextButtons(showPrevAndNextButtons);
    }, [count]);

    const generatePageButtons = () => {
      const items = [];

      items.push(
        <PaginationItem
          key={1}
          onClick={() => paginationState.setCurrentPage(1)}
          pageNumber={1}
          currentPage={paginationState.currentPage}
          aria-current={1 === paginationState.currentPage ? "page" : undefined}
        />
      );

      const maxButtonsToShow = paginationState.maxLinksDisplayed;
      const halfMaxButtonsToShow = Math.floor(maxButtonsToShow / 2);

      if (count <= maxButtonsToShow) {
        for (let page = 2; page < count; page++) {
          items.push(
            <PaginationItem
              key={page}
              onClick={() => paginationState.setCurrentPage(page)}
              pageNumber={page}
              currentPage={paginationState.currentPage}
              aria-current={page === paginationState.currentPage ? "page" : undefined}
            />
          );
        }
      } else if (paginationState.currentPage <= halfMaxButtonsToShow + 1) {
        for (let page = 2; page < maxButtonsToShow - 1; page++) {
          items.push(
            <PaginationItem
              key={page}
              onClick={() => paginationState.setCurrentPage(page)}
              pageNumber={page}
              currentPage={paginationState.currentPage}
              aria-current={page === paginationState.currentPage ? "page" : undefined}
            />
          );
        }

        items.push(
          <li key="ellipsis-right">
            <div
              role="presentation"
              className="pointer-events-none h-10 select-none px-3 py-2 text-base text-neutral-default"
            >
              ...
            </div>
          </li>
        );
      } else if (paginationState.currentPage >= count - halfMaxButtonsToShow) {
        items.push(
          <li key="ellipsis-left">
            <div
              role="presentation"
              className="pointer-events-none h-10 select-none px-3 py-2 text-base text-neutral-default"
            >
              ...
            </div>
          </li>
        );

        for (let page = count - maxButtonsToShow + 2; page <= count - 1; page++) {
          items.push(
            <PaginationItem
              key={page}
              onClick={() => paginationState.setCurrentPage(page)}
              pageNumber={page}
              currentPage={paginationState.currentPage}
              aria-current={page === paginationState.currentPage ? "page" : undefined}
            />
          );
        }
      } else {
        const startPage = paginationState.currentPage - halfMaxButtonsToShow;
        const endPage = paginationState.currentPage + halfMaxButtonsToShow;

        items.push(
          <li key="ellipsis-left">
            <div
              role="presentation"
              className="pointer-events-none h-10 select-none px-3 py-2 text-base text-neutral-default"
            >
              ...
            </div>
          </li>
        );
        for (let page = startPage; page <= endPage; page++) {
          items.push(
            <PaginationItem
              key={page}
              onClick={() => paginationState.setCurrentPage(page)}
              pageNumber={page}
              currentPage={paginationState.currentPage}
              aria-current={page === paginationState.currentPage ? "page" : undefined}
            />
          );
        }
        items.push(
          <li key="ellipsis-right">
            <div
              role="presentation"
              className="pointer-events-none h-10 select-none px-3 py-2 text-base text-neutral-default"
            >
              ...
            </div>
          </li>
        );
      }

      items.push(
        <PaginationItem
          key={count}
          onClick={() => paginationState.setCurrentPage(count)}
          pageNumber={count}
          currentPage={paginationState.currentPage}
          aria-current={count === paginationState.currentPage ? "page" : undefined}
        />
      );

      return items;
    };

    return (
      <nav
        ref={forwardedRef}
        aria-label="pagination"
        className={cn("w-full transition-all duration-200", className)}
        {...props}
      >
        <ul className="flex items-center justify-center gap-2">
          {showFirstAndLastButtons ? (
            <PaginationFirst onClick={() => paginationState.moveFirstPage()} />
          ) : null}
          {showPrevAndNextButtons ? (
            <PaginationPrevious onClick={() => paginationState.movePreviousPage()} />
          ) : null}
          <>{generatePageButtons()}</>
          {showPrevAndNextButtons ? <PaginationNext onClick={() => paginationState.moveNextPage()} /> : null}
          {showFirstAndLastButtons ? <PaginationLast onClick={() => paginationState.moveLastPage()} /> : null}
        </ul>
      </nav>
    );
  }
);
Pagination.displayName = "Pagination";

export interface PaginationFirstProps extends React.ComponentPropsWithoutRef<"a"> {}

const basePaginationButtonClasses = cn(
  "pointer-events-auto flex h-10 items-center justify-center gap-2 rounded border border-transparent bg-transparent text-base font-medium text-neutral-default outline-none transition-all focus-ring-neutral component-padding-base hover:bg-component-neutral-hover",
  "aria-disabled:pointer-events-none aria-disabled:text-neutral-muted aria-disabled:opacity-75"
);

const PaginationFirst = React.forwardRef<HTMLAnchorElement, PaginationFirstProps>(
  ({ href, target, className, onClick, ...props }, forwardedRef) => {
    const currentPage = usePagination(state => state.currentPage);
    const isDisabled = currentPage === 1;

    return (
      <li>
        <a
          ref={forwardedRef}
          href={href}
          target={target}
          className={cn(basePaginationButtonClasses, className)}
          aria-disabled={isDisabled ? true : undefined}
          onClick={isDisabled ? () => {} : onClick}
          {...props}
        >
          <ChevronFirst className="h-4 w-4" aria-hidden="true" />
          <VisuallyHiddenPrimitive.Root>first page</VisuallyHiddenPrimitive.Root>
        </a>
      </li>
    );
  }
);
PaginationFirst.displayName = "PaginationFirst";

export interface PaginationLastProps extends React.ComponentPropsWithoutRef<"a"> {}

const PaginationLast = React.forwardRef<HTMLAnchorElement, PaginationLastProps>(
  ({ href, target, className, onClick, ...props }, forwardedRef) => {
    const currentPage = usePagination(state => state.currentPage);
    const totalCount = usePagination(state => state.count);
    const isDisabled = currentPage === totalCount;

    return (
      <li>
        <a
          ref={forwardedRef}
          href={href}
          target={target}
          className={cn(basePaginationButtonClasses, className)}
          aria-disabled={isDisabled ? true : undefined}
          onClick={isDisabled ? () => {} : onClick}
          {...props}
        >
          <ChevronLast className="h-4 w-4" aria-hidden="true" />
          <VisuallyHiddenPrimitive.Root>last page</VisuallyHiddenPrimitive.Root>
        </a>
      </li>
    );
  }
);
PaginationLast.displayName = "PaginationLast";

export interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<"a"> {}

const PaginationPrevious = React.forwardRef<HTMLAnchorElement, PaginationPreviousProps>(
  ({ href, target, className, onClick, ...props }, forwardedRef) => {
    const currentPage = usePagination(state => state.currentPage);
    const isDisabled = currentPage === 1;

    return (
      <li>
        <a
          ref={forwardedRef}
          href={href}
          target={target}
          className={cn(basePaginationButtonClasses, className)}
          aria-disabled={isDisabled ? true : undefined}
          onClick={isDisabled ? () => {} : onClick}
          {...props}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          <VisuallyHiddenPrimitive.Root>previous page</VisuallyHiddenPrimitive.Root>
        </a>
      </li>
    );
  }
);
PaginationPrevious.displayName = "PaginationPrevious";

export interface PaginationNextProps extends React.ComponentPropsWithoutRef<"a"> {}

const PaginationNext = React.forwardRef<HTMLAnchorElement, PaginationNextProps>(
  ({ href, target, className, onClick, ...props }, forwardedRef) => {
    const currentPage = usePagination(state => state.currentPage);
    const totalCount = usePagination(state => state.count);
    const isDisabled = currentPage === totalCount;

    return (
      <li>
        <a
          ref={forwardedRef}
          href={href}
          target={target}
          className={cn(basePaginationButtonClasses, className)}
          aria-disabled={isDisabled ? true : undefined}
          onClick={isDisabled ? () => {} : onClick}
          {...props}
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <VisuallyHiddenPrimitive.Root>next page</VisuallyHiddenPrimitive.Root>
        </a>
      </li>
    );
  }
);
PaginationNext.displayName = "PaginationNext";

export interface PaginationItemProps extends React.ComponentPropsWithoutRef<"a"> {
  pageNumber: number;
  currentPage: number;
}

const PaginationItem = React.forwardRef<HTMLAnchorElement, PaginationItemProps>(
  ({ href, target, className, pageNumber, currentPage, ...props }, forwardedRef) => {
    return (
      <li>
        <a
          ref={forwardedRef}
          href={href}
          target={target}
          className={cn(
            basePaginationButtonClasses,
            "select-none font-mono",
            pageNumber === currentPage
              ? "border-accent-default bg-component-accent-pressed text-accent-muted hover:border-accent-dark hover:bg-component-accent-dark hover:text-accent-default"
              : "",
            className
          )}
          {...props}
        >
          <VisuallyHiddenPrimitive.Root>page </VisuallyHiddenPrimitive.Root>
          {pageNumber}
        </a>
      </li>
    );
  }
);
PaginationItem.displayName = "PaginationItem";

export { Pagination };
