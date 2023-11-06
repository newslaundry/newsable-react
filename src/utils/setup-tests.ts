import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import * as ResizeObserverModule from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserverModule.default;
