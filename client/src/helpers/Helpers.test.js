import { convertSecondsToTimer } from "./Helpers";

test("render correct timer from seconds", () => {
  const seconds = 120;
  expect(convertSecondsToTimer(seconds)).toBe("02:00");
});

test("render correct timer from seconds", () => {
  const seconds = 0;
  expect(convertSecondsToTimer(seconds)).toBe("00:00");
});

test("render correct timer from seconds", () => {
  const seconds = 55;
  expect(convertSecondsToTimer(seconds)).toBe("00:55");
});
