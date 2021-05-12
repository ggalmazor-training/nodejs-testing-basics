import {greetAndPredictAge} from "./http-call";
// import {jest} from '@jest/globals';

// No puedo predecir lo que devolvera el API
// Que pasa si api.agify.io peta?

// Que hace mi sistema cuando no falla
// Como falla mi sistema cuando agify.io falla
//
// https://github.com/nock/nock#install
// npm install --save-dev nock

test("ads,mads,as.", async () => {
  const output = await greetAndPredictAge('Guillermo');

  expect(output).toEqual('Hi, Guillermo. I think you\'re 57 years old')
})
