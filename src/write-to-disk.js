import tmp from 'tmp';
import {writeFileSync} from 'fs';

function greetAt(name, path) {
  writeFileSync(path, `Hi, ${name}!\n`);
}

function greetAtRandomPath(name) {
  const tmpFile = tmp.fileSync();
  writeFileSync(tmpFile.name, `Hi, ${name}!\n`);
  return tmpFile.name;
}

export {greetAt, greetAtRandomPath};
