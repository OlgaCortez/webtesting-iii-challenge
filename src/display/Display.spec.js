// Test away!
import React from "react"
import { render } from "react-testing-library"
import Display from "./Display";

describe("<Display />", () => {
  it("Shows state (unlocked, open) ", () => {
    const { getByText } = render(<Display />);
    expect(getByText("Unlocked"));
    expect(getByText("Open"));
  })
  it("Changes state through props", () => {
    const { getByText } = render(<Display locked={true} closed={true} />);
    expect(getByText("Locked"));
    expect(getByText("Closed"));
  })
})