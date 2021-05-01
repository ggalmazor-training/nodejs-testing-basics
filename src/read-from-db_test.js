import sqlite3 from 'sqlite3';
import {getAllRows, runQuery} from './db/sqlite-helpers';
import {greet, greetAndRemember} from './read-from-db'

sqlite3.verbose();

describe('Welcome name in db', () => {
  let names = [];
  beforeEach(async () => {
    const db = new sqlite3.Database('./src/db/names');
    const nameRows = await getAllRows(db, "SELECT name from names");
    names = nameRows.map(row => row.name);
    await runQuery(db, "DELETE FROM names"); // No TRUNCATE statement in SQLite
    db.close();
  });

  afterEach(async () => {
    const db = new sqlite3.Database('./src/db/names');
    await runQuery(db, "DELETE FROM names"); // No TRUNCATE statement in SQLite
    return Promise.all(names.map(async name => {
      return await runQuery(db, "INSERT INTO names(name) VALUES(?)", name);
    })).then(() => db.close());
  })

  it("Welcomes new names", async () => {
    const greeting = await greet('Guillermo')
    expect(greeting).toBe('Hi, Guillermo! Welcome!')
  });

  it("Welcomes back known names", async () => {
    const db = new sqlite3.Database('./src/db/names');
    await runQuery(db, "INSERT INTO names(name) VALUES('Guillermo')") // No TRUNCATE statement in SQLite
    db.close();
    const greeting = await greet('Guillermo')
    expect(greeting).toBe('Hi, Guillermo! Welcome back!')
  });

  it("Welcomes names and saves new ones", async () => {
    const firstGreeting = await greetAndRemember('Oskar');
    expect(firstGreeting).toBe('Hi, Oskar! Welcome!');

    const secondGreeting = await greetAndRemember('Oskar');
    expect(secondGreeting).toBe('Hi, Oskar! Welcome back!');
  })
})
