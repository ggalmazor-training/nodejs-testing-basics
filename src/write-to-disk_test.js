import {greetAt} from './write-to-disk';
import fs from 'fs';


describe("the greetAt function", () => {
  const path = '/tmp/cocotero.txt';

  beforeEach(() => {

  });

  afterEach(() => {
    if (fs.existsSync(path))
      fs.unlinkSync(path);
  })

  // - Averiguar si el fichero se ha creado
  it("creates a file at the provided path", () => {
    // Bloque ARRANGE

    // Bloque ACTION
    greetAt('Oskar', path);

    // Bloque ASSERT
    expect(fs.existsSync(path)).toBe(true);
  });

  it("replaces any existing contents of the provided path", () => {
    // Bloque ARRANGE
    fs.writeFileSync(path, 'Contenido anterior');

    // Bloque ACTION
    greetAt('Oskar', path);

    // Bloque ASSERT
    expect(fs.readFileSync(path).toString()).not.toEqual('Contenido anterior');
  });

  // - Ver si el contenido del fichero cumple un criterio
  //   - Verificar si el fichero se ha cerrado. Puede estar implicito en la anterior?
  it("writes 'Hi, name' in the provided path", () => {
    // Bloque ARRANGE
    fs.writeFileSync(path, 'Contenido anterior');

    // Bloque ACTION
    greetAt('Oskar', path);

    // Bloque ASSERT
    expect(fs.readFileSync(path).toString()).toEqual("Hi, Oskar!\n");
  });


  // - Validacion de datos de entrada
  //   - El nombre o la ruta son nulas?
  // - Precondicion
  //   - La ruta no existe?
  it("throws an Error when the provided path doesn't exist", () => {
    // Bloque ARRANGE
    const path = '/cocotero/chuchu.txt';

    // Bloque ACTION
    const action = () => greetAt('Oskar', path);

    // Bloque ASSERT
    expect(action).toThrow()
  })

  //   - Como falla cuando no hay permiso de escritura?
});



