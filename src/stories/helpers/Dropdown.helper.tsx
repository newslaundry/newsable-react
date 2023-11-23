import React from "react";

import {
  PersonStanding as AccessibilityPerson,
  Bookmark,
  LogOut,
  Menu,
  Monitor,
  Moon,
  ShoppingCart,
  Sun,
  User,
  User2
} from "lucide-react";

import { Dropdown, IconButton, Text, VStack } from "@/components";

export const DropdownDemo = () => {
  return (
    <Dropdown>
      <Dropdown.Trigger className="rounded-full" asChild>
        <IconButton label="Profile dropdown">
          <User2 className="h-4 w-4" aria-hidden="true" />
        </IconButton>
      </Dropdown.Trigger>
      <Dropdown.Content sideOffset={4} align="end" className="z-50">
        <Dropdown.Header>
          <VStack className="w-full gap-1">
            <Text className="text-primary-muted text-xs font-medium">Welcome,</Text>
            <Text className="w-full truncate text-sm font-medium">rishabh@newslaundry.com</Text>
          </VStack>
        </Dropdown.Header>
        <Dropdown.Label>Settings</Dropdown.Label>
        <Dropdown.Item icon={<User className="h-4 w-4" />} shortcutKey="P">
          My account
        </Dropdown.Item>
        <Dropdown.Item icon={<AccessibilityPerson className="h-4 w-4" />} shortcutKey="A">
          Accessibility
        </Dropdown.Item>
        <Dropdown.Item icon={<ShoppingCart className="h-4 w-4" />}>Store purchases</Dropdown.Item>
        <Dropdown.Item icon={<Bookmark className="h-4 w-4" />}>Saved stories</Dropdown.Item>
        <Dropdown.SubMenu>
          <Dropdown.SubTrigger icon={<Menu className="h-4 w-4" aria-hidden={true} />}>
            Sub-menu
          </Dropdown.SubTrigger>
          <Dropdown.SubContent sideOffset={4}>
            <Dropdown.Item icon={<Monitor className="h-4 w-4" />}>System</Dropdown.Item>
            <Dropdown.Item icon={<Sun className="h-4 w-4" />}>Light</Dropdown.Item>
            <Dropdown.Item icon={<Moon className="h-4 w-4" />}>Dark</Dropdown.Item>
          </Dropdown.SubContent>
        </Dropdown.SubMenu>
        <Dropdown.Separator />
        <Dropdown.Label>Theme</Dropdown.Label>
        {/* onValueChange={t => setTheme(t)} */}
        <Dropdown.RadioGroup value={"system"}>
          <Dropdown.RadioItem
            value="system"
            trailingIcon={<Monitor aria-hidden="true" className="h-4 w-4" />}
          >
            System
          </Dropdown.RadioItem>
          <Dropdown.RadioItem value="light" trailingIcon={<Sun aria-hidden="true" className="h-4 w-4" />}>
            Light
          </Dropdown.RadioItem>
          <Dropdown.RadioItem value="dark" trailingIcon={<Moon aria-hidden="true" className="h-4 w-4" />}>
            Dark
          </Dropdown.RadioItem>
        </Dropdown.RadioGroup>
        <Dropdown.Separator />
        <Dropdown.Label>Preferences</Dropdown.Label>
        <Dropdown.CheckboxItem checked={true}>Show Paywall</Dropdown.CheckboxItem>
        <Dropdown.CheckboxItem checked={true}>Show Popups</Dropdown.CheckboxItem>
        <Dropdown.Separator />
        <Dropdown.Item icon={<LogOut className="h-4 w-4" />} className="text-danger-muted">
          Log Out
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};
