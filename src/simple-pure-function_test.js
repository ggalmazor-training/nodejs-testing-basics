import {sum} from './simple-pure-function';

test("Sums two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
