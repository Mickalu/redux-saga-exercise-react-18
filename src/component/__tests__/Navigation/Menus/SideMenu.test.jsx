import React from "react";
import renderer from "react-test-renderer";

import SideMenu from "../../../Navigation/Menus/SideMenu";

it("Should match snapshot when open", () => {
  const tree = renderer
    .create((<SideMenu isOpen={false}/>))
    .toJSON()

  expect(tree).toMatchSnapshot();
});

it("Should match snapshot when it closed", () => {
  const tree = renderer
    .create((<SideMenu isOpen={true}/>))
    .toJSON()

  expect(tree).toMatchSnapshot();
});
