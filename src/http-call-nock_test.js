import nock from 'nock';
import {greetAndPredictAge} from './http-call'

test("Greets and predicts the person's age", async () => {
  nock('https://api.agify.io')
    .get('/?name=Guillermo')
    .reply(200, {age: 42});

  const greeting = await greetAndPredictAge('Guillermo');
  expect(greeting).toBe("Hi, Guillermo. I think you're 42 years old");
})
