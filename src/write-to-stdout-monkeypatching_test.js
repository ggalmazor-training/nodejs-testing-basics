import {greet} from './write-to-stdout';

test("Greets on the console", () => {
  const originalLog = console.log
  let loggedMessage;
  console.log = msg => loggedMessage = msg;

  greet("Guillermo");
  console.log = originalLog;

  expect(loggedMessage).toBe("Hi, Guillermo!\n")
});
