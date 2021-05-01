const getFirstRow = async (db, query, ...params) => new Promise((resolve, reject) => db.get(query, params, (err, row) => {
  if (!err)
    resolve(row);
  else
    reject(err);
}))

const getAllRows = async (db, query, ...params) => new Promise((resolve, reject) => db.all(query, params, (err, rows) => {
  if (!err)
    resolve(rows);
  else
    reject(err);
}))

const runQuery = async (db, query, ...params) => new Promise((resolve, reject) => db.run(query, params, (err, row) => {
  if (!err)
    resolve(row);
  else
    reject(err);
}))

export {getFirstRow, getAllRows, runQuery};
