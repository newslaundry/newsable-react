import { RenderResult, act, render } from "@testing-library/react";

export async function renderWithAct(element: React.ReactElement) {
  let result: RenderResult | undefined;

  await act(async () => {
    result = render(element);
  });

  return result;
}
