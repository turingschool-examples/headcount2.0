import App from "../../src/components/App";
import kinderData from "../../data/kindergartners_in_full_day_program.js";

describe("DistrictRepository iteration 0", () => {
  const district = new App();

  test("district has data in an object", () => {
    expect(typeof district.state.data).toBe("object");
  });

  test("data coming in has no duplicates", () => {
    expect(Object.keys(district.state.data).length).toBe(181);
  });
});
