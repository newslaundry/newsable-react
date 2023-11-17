import React from "react";

import { cn } from "@/lib/utils";

export interface TableBaseProps extends React.ComponentPropsWithoutRef<"table"> {}

const Table = React.forwardRef<HTMLTableElement, TableBaseProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div className="relative w-full overflow-auto">
        <table ref={forwardedRef} className={cn("w-full caption-bottom", className)} {...props}>
          {children}
        </table>
      </div>
    );
  }
);
Table.displayName = "Table";

export interface TableHeaderProps extends React.ComponentPropsWithoutRef<"thead"> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <thead ref={forwardedRef} className={cn("border-b border-neutral-default", className)} {...props}>
        {children}
      </thead>
    );
  }
);
TableHeader.displayName = "TableHeader";

export interface TableHeadProps extends React.ComponentPropsWithoutRef<"th"> {}

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <th
        ref={forwardedRef}
        className={cn(
          "h-10 px-4 text-left align-middle text-sm font-medium text-neutral-muted [&:has([role=checkbox])]:pr-0",
          className
        )}
        {...props}
      >
        {children}
      </th>
    );
  }
);
TableHead.displayName = "TableHead";

export interface TableBodyProps extends React.ComponentPropsWithoutRef<"tbody"> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <tbody ref={forwardedRef} className={cn("[&_tr:last-child]:border-0", className)} {...props}>
        {children}
      </tbody>
    );
  }
);
TableBody.displayName = "TableBody";

export interface TableFooterProps extends React.ComponentPropsWithoutRef<"tfoot"> {}

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <tfoot
        ref={forwardedRef}
        className={cn("text-sm font-medium text-neutral-muted", className)}
        {...props}
      >
        {children}
      </tfoot>
    );
  }
);
TableFooter.displayName = "TableFooter";

export interface TableRowProps extends React.ComponentPropsWithoutRef<"tr"> {}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <tr
        ref={forwardedRef}
        className={cn(
          "border-b border-neutral-default transition-colors hover:bg-component-neutral-hover data-[state=selected]:bg-component-neutral-pressed",
          className
        )}
        {...props}
      >
        {children}
      </tr>
    );
  }
);
TableRow.displayName = "TableRow";

export interface TableCellProps extends React.ComponentPropsWithoutRef<"td"> {}

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <td
        ref={forwardedRef}
        className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
        {...props}
      >
        {children}
      </td>
    );
  }
);
TableCell.displayName = "TableCell";

export interface TableCaptionProps extends React.ComponentPropsWithoutRef<"caption"> {}

const TableCaption = React.forwardRef<HTMLTableCaptionElement, TableCaptionProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <caption ref={forwardedRef} className={cn("mt-8 text-sm text-neutral-muted", className)} {...props}>
        {children}
      </caption>
    );
  }
);
TableCaption.displayName = "TableCaption";

const TableCompoundComponent = Object.assign(Table, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption
});

export { TableCompoundComponent as Table };
