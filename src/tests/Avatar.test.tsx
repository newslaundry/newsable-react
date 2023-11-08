import React from "react";

import { describe } from "vitest";

import { Avatar } from "@/components";
import { checkAccessibility } from "@/utils/accessibility";

describe("Avatar Component Tests", () => {
  checkAccessibility(
    <Avatar>
      <Avatar.Image
        src="https://images.assettype.com/newslaundry/2021-10/931449e9-200b-4680-81ce-dc916e022763/qiMQgIos_400x400.png"
        alt="Newslaundry logo"
      />
      <Avatar.Fallback>NL</Avatar.Fallback>
    </Avatar>
  );
});
