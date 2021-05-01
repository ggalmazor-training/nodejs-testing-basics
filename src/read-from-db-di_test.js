import {NameRepo, greet, greetAndRemember} from './read-from-db-di'

describe('Welcome name in db', () => {
  it("Welcomes new names", async () => {
    const nameRepo = new InMemoryNameRepo();
    const greeting = await greet(nameRepo, 'Guillermo')
    expect(greeting).toBe('Hi, Guillermo! Welcome!')
  });

  it("Welcomes back known names", async () => {
    const nameRepo = new InMemoryNameRepo('Guillermo');
    const greeting = await greet(nameRepo, 'Guillermo')
    expect(greeting).toBe('Hi, Guillermo! Welcome back!')
  });

  it("Welcomes names and saves new ones", async () => {
    const nameRepo = new InMemoryNameRepo();
    const firstGreeting = await greetAndRemember(nameRepo, 'Oskar');
    expect(firstGreeting).toBe('Hi, Oskar! Welcome!');

    const secondGreeting = await greetAndRemember(nameRepo, 'Oskar');
    expect(secondGreeting).toBe('Hi, Oskar! Welcome back!');
  })
})

class InMemoryNameRepo extends NameRepo{
  constructor(...names) {
    super(null);
    this.names = names;
  }

  async nameExists(name) {
    return Promise.resolve(this.names.indexOf(name) !== -1);
  }

  async rememberName(name) {
    this.names.push(name);
    return Promise.resolve();
  }
}
