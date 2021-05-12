import {greetAndPredictAge} from "./http-call";
// import {jest} from '@jest/globals';

// No puedo predecir lo que devolvera el API
// Que pasa si api.agify.io peta?

// Que hace mi sistema cuando no falla
// Como falla mi sistema cuando agify.io falla
//
// https://github.com/nock/nock#install
// npm install --save-dev nock

import nock from 'nock';

test("returns a greeting including the provided name and a guess of the person's age", async () => {
  const agifyMock = nock('https://api.agify.io')
    .get('/?name=Guillermo')
    .reply(200, {age: 42})

  const output = await greetAndPredictAge('Guillermo');

  expect(output).toEqual('Hi, Guillermo. I think you\'re 42 years old')
  expect(agifyMock.isDone()).toBe(true);
})
