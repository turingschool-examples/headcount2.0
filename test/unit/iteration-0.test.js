import App from "../../src/components/App";
import kinderData from "../../data/kindergartners_in_full_day_program.js";
import { DistrictRepository } from "../../src/helpers/DistrictRepository";

describe("DistrictRepository iteration 0", () => {
  const district = new DistrictRepository(kinderData);

  test("district has data in an object", () => {
    expect(typeof district.data).toBe("object");
  });

  test("data coming in has no duplicates", () => {
    district.data = district.getDistrictData();

    expect(Object.keys(district.data).length).toBe(181);
  });
});
