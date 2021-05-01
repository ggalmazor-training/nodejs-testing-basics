import sqlite3 from 'sqlite3';
import {getFirstRow, runQuery} from './db/sqlite-helpers.js';
sqlite3.verbose();

class NameRepo {
  constructor(dbPath) {
    this.dbPath = dbPath;
  }

  async nameExists(name) {
    const db = new sqlite3.Database(this.dbPath);
    const nameExists = await getFirstRow(db, `SELECT 1
                                              FROM names
                                              WHERE name = ?`, name) !== undefined;
    db.close();
    return nameExists
  }

  async rememberName(name) {
    const db = new sqlite3.Database(this.dbPath);
    const result = await runQuery(db, "INSERT INTO names(name) VALUES(?)", name);
    db.close();
    return result;
  }
}



async function greet(nameRepo, name) {
  // const names = new NameRepo('./db/names');
  const nameExists = await nameRepo.nameExists(name);
  return nameExists ? `Hi, ${name}! Welcome back!` : `Hi, ${name}! Welcome!`;
}

async function greetAndRemember(namesRepo, name) {
  // const names = new NameRepo('./db/names');
  const nameExists = await namesRepo.nameExists(name);
  if (!nameExists)
    await namesRepo.rememberName(name);
  return nameExists ? `Hi, ${name}! Welcome back!` : `Hi, ${name}! Welcome!`;
}

export {NameRepo, greet, greetAndRemember};
