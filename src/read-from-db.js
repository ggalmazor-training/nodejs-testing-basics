import sqlite3 from 'sqlite3';
import {getFirstRow, runQuery} from './db/sqlite-helpers.js';

async function greet(name) {
  const db = new sqlite3.Database('./src/db/names');
  const nameIsKnown = await getFirstRow(db, `SELECT 1
                                             FROM names
                                             WHERE name = ?`, name) !== undefined;
  db.close();
  return nameIsKnown ? `Hi, ${name}! Welcome back!` : `Hi, ${name}! Welcome!`;
}

async function greetAndRemember(name) {
  const db = new sqlite3.Database('./src/db/names');
  const nameIsKnown = await getFirstRow(db, `SELECT 1
                                             FROM names
                                             WHERE name = ?`, name) !== undefined;
  if (!nameIsKnown)
    await runQuery(db, "INSERT INTO names(name) VALUES(?)", name);
  db.close();
  return nameIsKnown ? `Hi, ${name}! Welcome back!` : `Hi, ${name}! Welcome!`;
}

export {greet, greetAndRemember};
