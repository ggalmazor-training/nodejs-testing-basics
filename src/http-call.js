import fetch from 'node-fetch';

async function greetAndPredictAge(name) {
  const response = await fetch(`https://api.agify.io/?name=${name}`);
  const json = await response.json();
  return `Hi, ${name}. I think you're ${json.age} years old`;
}

export {greetAndPredictAge};
