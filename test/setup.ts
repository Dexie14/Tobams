import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

vi.mock("next/image", () => ({
  default: (props: any) => {
    return React.createElement("img", props);
  },
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => {
    return React.createElement("a", { href, ...props }, children);
  },
}));
