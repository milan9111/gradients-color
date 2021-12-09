import { render } from "@testing-library/react";
import AppContainer from "./AppContainer";

describe("AppContainer component", () => {
  it("HomeContainer renders", () => {
    render(<AppContainer />);
  });
});
