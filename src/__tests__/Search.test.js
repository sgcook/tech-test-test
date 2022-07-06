import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";
import { func } from "prop-types";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  }
  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});