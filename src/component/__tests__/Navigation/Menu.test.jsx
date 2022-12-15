import React from "react";

import Menu from "../../Navigation/Menu";
import { render } from "../../../utils/__testsTools__/renderMethodRTL/customRenderMethod";

// it("Should display side menu", () => {
//   const { container } = render(<Menu isOpen={true}/>);

//   expect(container.getElementsByClassName("bm-menu-wrap").length).toBe(1);
//   expect(container.getElementsByClassName("bm-menu-wrap")[0]).toHaveAttribute("aria-hidden", "false");
// });

it("Should not display side menu", () => {
  const { container } =render(<Menu isOpen={false}/>);

  expect(container.getElementsByClassName("bm-menu-wrap").length).toBe(1);
  expect(container.getElementsByClassName("bm-menu-wrap")[0]).toHaveAttribute("aria-hidden", "true");
});
