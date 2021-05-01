import fs from 'fs';
import {greetAt, greetAtRandomPath} from './write-to-disk';

test("Writes a greeting into a file located at a provided path", () => {
  greetAt('Guillermo', '/tmp/foo.txt');
  const actualGreeting = fs.readFileSync('/tmp/foo.txt').toString();
  expect(actualGreeting).toBe("Hi, Guillermo!\n")
})

test("Overwrites any contents in the provided file", () => {
  greetAt('Guillermo', '/tmp/foo.txt');
  greetAt('Oskar', '/tmp/foo.txt');
  const actualGreeting = fs.readFileSync('/tmp/foo.txt').toString();
  expect(actualGreeting).toBe("Hi, Oskar!\n")
})

test("It can choose a tmp location for the file", () => {
  const greetingPath = greetAtRandomPath('Guillermo');
  const actualGreeting = fs.readFileSync(greetingPath).toString();
  expect(actualGreeting).toBe("Hi, Guillermo!\n")
})
