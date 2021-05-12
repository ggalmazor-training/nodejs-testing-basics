import {greet} from './write-to-stdout';
import {jest} from '@jest/globals';

describe("cocotero", () => {
  test("greet writes a greeting in the console with the provided name", () => {
    console.log = jest.fn();

    greet("Guillermo");

    expect(console.log.mock.calls.length).toBe(4);
    expect(console.log.mock.calls).toEqual([
      ["Hi, Guillermo!\n"],
      ["Hi, Guillermo!\n"],
      ["Hi, Guillermo!\n"],
      ["Hi, Guillermo!\n"]
    ]);
  })
})

