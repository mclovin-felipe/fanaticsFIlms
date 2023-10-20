import { Injectable, signal, WritableSignal } from '@angular/core';
import {
  CapacitorSQLite,
  SQLiteConnection,
  SQLiteDBConnection,
} from '@capacitor-community/sqlite';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable, from, map } from 'rxjs';
function generateTimestampHash() {
  const currentDate = new Date();
  const milliseconds = currentDate.getTime().toString();
  const hash = hashCode(milliseconds);
  return hash;
}

function hashCode(s: string): string {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h.toString(16);
}

const DB_USERS = 'myuserdb36';

export interface User {
  id: number;
  name: string;
  active: number;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;
  private user: WritableSignal<User[]> = signal(<User[]>[]);

  public series = new Subject<any>();
  public peliculas = new Subject<any>();
  public usuario = new Subject<any>();
  public comentarios = new Subject<any>();
  public TodosComentariosSeries = new Subject<any>();
  public TodosComentariosPeliculas = new Subject<any>();
  public megustas = new Subject<any>();
  public megustasSeries = new Subject<any>();
  public megustasPeliculas = new Subject<any>();
  public admin = new Subject<any>();
  public usuarios = new Subject<any>();
  constructor() {}

  async initializPligin() {
    try {
      this.db = await this.sqlite.createConnection(
        DB_USERS,
        false,
        'no-encryption',
        1,
        false
      );
      await this.db.open();
      const schema = `CREATE TABLE IF NOT EXISTS Usuarios (
        id INTEGER PRIMARY KEY NOT NULL,
        rol TEXT NOT NULL,
        password TEXT NOT NULL,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        desc TEXT ,
        idDatos TEXT NOT NULL,
        apellidoPaterno TEXT NOT NULL,
        apellidoMaterno TEXT NOT NULL,
        EDAD INTEGER NOT NULL,
        SeriesFavoritas TEXT ,
        PeliculasFavoritas TEXT,
        imagen TEXT,
        megustasPeliculas TEXT,
        megustasSeries TEXT
        );`;
      const schema2 = `CREATE TABLE IF NOT EXISTS DatosUsuarios (
        id INTEGER PRIMARY KEY NOT NULL,
        IdDatos TEXT NOT NULL,
        SeriesFavoritas TEXT NOT NULL,
        PeliculasFavoritas TEXT NOT NULL,
        Comentarios TEXT NOT NULL
        );`;
      const schema3 = `CREATE TABLE IF NOT EXISTS Series (
          id INTEGER PRIMARY KEY NOT NULL,
          nombre TEXT NOT NULL,
          adulto INTEGER NOT NULL,
          calificacion REAL NOT NULL,
          fechaLanzamiento TEXT NOT NULL,
          nCapitulos INTEGER NOT NULL,
          descripcion TEXT NOT NULL,
          imagen TEXT

        )`;
      const schema5 = `CREATE TABLE IF NOT EXISTS ComentariosPelicula (
          id INTEGER PRIMARY KEY NOT NULL,
          idUsuario TEXT NOT NULL,
          idContenido INTEGER NOT NULL,
          comentarios TEXT NOT NULL

        )`;
      const schema6 = `CREATE TABLE IF NOT EXISTS ComentariosSeries (
          id INTEGER PRIMARY KEY NOT NULL,
          idUsuario TEXT NOT NULL,
          idContenido INTEGER NOT NULL,
          comentarios TEXT NOT NULL

        )`;
      const schema4 = `CREATE TABLE IF NOT EXISTS Peliculas (
          id INTEGER PRIMARY KEY NOT NULL,
          nombre TEXT NOT NULL,
          adulto INTEGER NOT NULL,
          calificacion REAL NOT NULL,
          fechaLanzamiento TEXT NOT NULL,
          duracion INTEGER NOT NULL,
          descripcion TEXT NOT NULL,
          imagen TEXT

        )`;
      const user1 = `INSERT INTO Usuarios (rol, password, idDatos, apellidoPaterno, apellidoMaterno, EDAD, email, nombre, megustasSeries, megustasPeliculas) VALUES ('admin', 'admin', '1', 'admin', 'admin', '1', 'admin@admin', 'admin', '[]', '[]')`;
      // await this.db.execute(`DROP TABLE IF EXISTS Usuarios`);
      await this.db.execute(schema);

      await this.db.execute(user1);
      await this.db.execute(schema2);
      await this.db.execute(schema3);
      await this.db.execute(schema4);
      await this.db.execute(schema5);
      await this.db.execute(schema6);

      console.log('Database initialized');
      this.loadUsers();

      return true;
    } catch (error) {
      console.log('Error initializing database', error);
      return false;
    }
  }
  async ComentarPelicula(
    idUsuario: string,
    idContenido: number,
    comentario: string
  ) {
    try {
      const query = `INSERT INTO ComentariosPelicula (idUsuario, idContenido, comentarios) VALUES ('${idUsuario}', ${idContenido}, '${comentario}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM ComentariosPelicula WHERE idContenido=${idContenido}`;
      const result2 = await this.db.query(query2);
      this.GetAllComentarios();
      this.comentarios.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  // GetAll comments series And peliculas
  async GetAllComentarios() {
    try {
      const query = `SELECT Peliculas.nombre, ComentariosPelicula.comentarios  FROM ComentariosPelicula, Peliculas WHERE ComentariosPelicula.idContenido=Peliculas.id`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      this.TodosComentariosPeliculas.next(result.values);
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  async GetAllComentariosSeries() {
    try {
      const query = `SELECT Series.nombre, ComentariosSeries.comentarios FROM ComentariosSeries, Series WHERE ComentariosSeries.idContenido=Series.id`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      this.TodosComentariosSeries.next(result.values);
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }

  async ComentarSerie(
    idUsuario: string,
    idContenido: number,
    comentario: string
  ) {
    try {
      const query = `INSERT INTO ComentariosSeries (idUsuario, idContenido, comentarios) VALUES ('${idUsuario}', ${idContenido}, '${comentario}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM ComentariosSeries WHERE idContenido=${idContenido}`;
      const result2 = await this.db.query(query2);
      console.log(result2.values, 'aqui');
      this.GetAllComentariosSeries();
      this.comentarios.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  async getComentariosPelicula(id: number) {
    try {
      const query = `SELECT * FROM ComentariosPelicula WHERE idContenido=${id}`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui jejej');
      this.comentarios.next(result.values);
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  async getComentariosSerie(id: number) {
    try {
      const query = `SELECT * FROM ComentariosSeries WHERE idContenido=${id}`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui jejej');
      this.comentarios.next(result.values);
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  public getSeries() {
    const series = new Observable((observer) => {
      this.db.query('SELECT * FROM Series').then((res) => {
        observer.next(res.values);
        observer.complete();
      });
    });
    return series;
  }
  public getPeliculas() {
    const series = new Observable((observer) => {
      this.db.query('SELECT * FROM Peliculas').then((res) => {
        observer.next(res.values);
        observer.complete();
      });
    });
    return series;
  }
  async crearPelicula(
    nombre: string,
    adulto: number,
    calificacion: number,
    fechaLanzamiento: string,
    duracion: number,
    descripcion: string,
    foto: string
  ) {
    try {
      const query = `INSERT INTO Peliculas (nombre, adulto, calificacion, fechaLanzamiento, duracion, descripcion, imagen) VALUES ('${nombre}', '${adulto}', '${calificacion}', '${fechaLanzamiento}', '${duracion}', '${descripcion}', '${foto}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM Peliculas`;
      const result2 = await this.db.query(query2);
      this.peliculas.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  async crearSerie(
    nombre: string,
    adulto: number,
    calificacion: number,
    fechaLanzamiento: string,
    nCapitulos: number,
    descripcion: string,
    foto: string
  ) {
    try {
      const query = `INSERT INTO Series (nombre, adulto, calificacion, fechaLanzamiento, nCapitulos, descripcion, imagen) VALUES ('${nombre}', ${adulto}, ${calificacion}, '${fechaLanzamiento}', ${nCapitulos}, '${descripcion}', '${foto}')`;
      const result = await this.db.execute(query);
      const query2 = `SELECT * FROM Series`;
      const result2 = await this.db.query(query2);

      this.series.next(result2.values);
      return true;
    } catch (error) {
      return error;
    }
  }
  async GetSeries() {
    try {
      const query = `SELECT * FROM Series`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  async GetPeliculas() {
    try {
      const query = `SELECT * FROM Peliculas`;
      const result = await this.db.query(query);
      console.log(JSON.stringify(result.values), 'aqui');
      if (result.values) {
        return result.values;
      } else {
        return [];
      }
    } catch (error) {
      return false;
    }
  }
  async borrarUsuario(id: number) {
    try {
      const query = `DELETE FROM Usuarios WHERE id=${id}`;
      const result = await this.db.execute(query);
      this.loadUsers();
      return true;
    } catch (error) {
      return error;
    }
  }

  // CRUD
  async EditarUsuario(nombre: string, email: string, apellidoPaterno: string) {
    try {
      const query = `UPDATE Usuarios SET    apellidoPaterno=${apellidoPaterno},  email=${email} nombre=${nombre} WHERE email='${email}'`;

      const result = await this.db.execute(query);
      this.loadUsers();

      return true;
    } catch (error) {
      return error;
    }
  }
  async LoginUsuario(email: string, password: string) {
    try {
      const query = `SELECT * FROM Usuarios WHERE email='${email}' AND password='${password}'`;

      const result = await this.db.query(query);
      if (result.values[0].rol === 'admin') {
        this.admin.next(true);
      } else {
        this.admin.next(false);
      }
      console.log(result.values);
      // console.log(result);

      return result.values;
    } catch (error) {
      return error;
    }
  }
  async EliminarUsuario(id: number) {
    try {
      const query = `DELETE FROM Usuarios WHERE id=${id}`;

      const result = await this.db.execute(query);
      this.loadUsers();

      return true;
    } catch (error) {
      return error;
    }
  }
  async AgregarUsuario(
    rol: string,
    password: string,
    idDatos: number,
    apellidoPaterno: string,
    apellidoMaterno: string,
    EDAD: number,
    nombre: string,
    email: string
  ) {
    console.log(
      rol,
      password,
      idDatos,
      apellidoPaterno,
      apellidoMaterno,
      EDAD,
      nombre,
      email,
      'aquitamosDB'
    );
    try {
      const timestampHash = generateTimestampHash();
      console.log(timestampHash);
      const datos = [];
      const query = `INSERT INTO Usuarios (rol, password, idDatos, apellidoPaterno, apellidoMaterno, EDAD, email, nombre, SeriesFavoritas, PeliculasFavoritas,megustasPeliculas, megustasSeries ) VALUES ('${rol}', '${password}', '${timestampHash}', '${apellidoPaterno}', '${apellidoMaterno}', '${EDAD}', '${email}', '${nombre}', '','', '[]', '[]')`;
      await this.db.execute(query);
      console.log('agregado');
      return true;
    } catch (error) {
      return error;
    }
  }
  async getUsuarios(): Promise<any[]> {
    const query = 'SELECT * FROM Usuarios';
    const result = await this.db.query(query);
    return result.values;
  }
  queryRecords(): Observable<any[]> {
    const querySQL = 'SELECT * FROM Usuarios';
    return from(this.db.query(querySQL, [])).pipe(
      map((data) => {
        let records = [];
        console.log(data);
        // for (let i = 0; i < (data as any).rows.length; i++) {
        //   records.push((data as any).rows.item(i));
        // }
        return records;
      })
    );
  }

  async loadUsers() {
    const query = 'SELECT * FROM Usuarios';
    const quey2 = 'SELECT * FROM DatosUsuarios';
    const result2 = await this.db.query(quey2);
    const result = await this.db.query(query);
    console.log(result.values, 'aqui');
    console.log(JSON.stringify(result2.values));
    this.user.set(result.values || []);
  }
  async addUser(name: string) {
    const query = `INSERT INTO users (name) VALUES ('${name}')`;
    const result = await this.db.execute(query);
    this.loadUsers();
    return result;
  }
  async updateUser(
    email: string,
    nombre: string,
    apellido: string,
    desc: string,
    peliculasFavoritas: string,
    seriesFavoritas: string,
    imagen: string
  ) {
    const query = `UPDATE Usuarios SET nombre='${nombre}', apellidoPaterno='${apellido}', desc='${desc}', peliculasFavoritas='${peliculasFavoritas}', seriesFavoritas='${seriesFavoritas}', imagen='${imagen}' WHERE email='${email}' `;
    const result = await this.db.execute(query);
    const query2 = `SELECT * FROM Usuarios WHERE email='${email}'`;
    const result2 = await this.db.query(query2);
    this.usuario.next(result2.values[0]);
    this.loadUsers();
    return result;
  }
  async deleteUser(id: number) {
    const query = `DELETE FROM users WHERE id=${id}`;
    const result = await this.db.execute(query);
    this.loadUsers();
    this.usuarios.next(await this.getUsuarios());
    return result;
  }
  async GetFavorites(id: string) {
    try {
      const query = `SELECT * FROM DatosUsuarios WHERE IdDatos='${id}'`;
      const result = await this.db.query(query);
      console.log(result.values, 'aqui');
      if (result.values) return result.values[0];
    } catch (error) {
      return false;
    }
  }
  async GetFavoritesSeries(id: string, tipo: string) {
    const query = `SELECT megustasSeries FROM Usuarios WHERE email='${id}'`;
    const result = await this.db.query(query);
    console.log(result.values, 'aqui');
    if (
      result.values[0].megustasSeries === '' ||
      !result.values[0].megustasSeries
    ) {
      return [];
    } else {
      return JSON.parse(result.values[0].megustasSeries);
    }
  }
  async AddFavoritesSeries(id: string, series: string, tipo: string) {
    //  NOT OVERWRITE
    console.log('ASDNSAHJDBJASJH ACACAC');
    // console.log(id);
    const query1 = `SELECT megustasSeries FROM Usuarios WHERE email='${id}'`;
    const result1 = await this.db.query(query1);
    console.log(JSON.parse(result1.values[0].megustasSeries), 'aqui');
    console.log(result1.values);
    if (result1.values[0].megustasSeries.length === 0) {
      console.log('ENTRO AQUI');
    } else {
      console.log('ENTRO AQUI 2');
      let favs = JSON.stringify([series]);
      const query2 = `UPDATE Usuarios SET megustasSeries='${favs}' WHERE email='${id}'`;
      const result2 = await this.db.query(query2);
      const query3 = `SELECT megustasSeries FROM Usuarios WHERE email='${id}'`;
      const result3 = await this.db.query(query3);
      this.megustasSeries.next(JSON.parse(result3.values[0].megustasSeries));
    }
  }
  async AddFavoritesPeliculas(id: string, series: string, tipo: string) {
    //  NOT OVERWRITE
    console.log('ASDNSAHJDBJASJH ACACAC');
    // console.log(id);
    const query1 = `SELECT megustasPeliculas FROM Usuarios WHERE email='${id}'`;
    const result1 = await this.db.query(query1);
    console.log(JSON.parse(result1.values[0].megustasPeliculas), 'aqui');
    if (result1.values[0].megustasPeliculas) {
      let favs = JSON.stringify([series]);
      const query2 = `UPDATE Usuarios SET megustasPeliculas='${favs}' WHERE email='${id}'`;
      const result2 = await this.db.query(query2);
      const query3 = `SELECT megustasPeliculas FROM Usuarios WHERE email='${id}'`;
      const result3 = await this.db.query(query3);
      this.megustasPeliculas.next(
        JSON.parse(result3.values[0].megustasPeliculas)
      );
    }
    // else {
    //   console.log(JSON.parse(result1.values[0].megustasPeliculas), 'aqui');
    //   console.log(result1.values);
    //   if (result1.values[0].megustasPeliculas.length === 0) {
    //     console.log('ENTRO AQUI');
    //   } else {
    //     console.log('ENTRO AQUI 2');
    //     let favs = JSON.stringify([series]);
    //     const query2 = `UPDATE Usuarios SET megustasPeliculas='${favs}' WHERE email='${id}'`;
    //     const result2 = await this.db.query(query2);
    //     const query3 = `SELECT megustasPeliculas FROM Usuarios WHERE email='${id}'`;
    //     const result3 = await this.db.query(query3);
    //     this.megustasPeliculas.next(
    //       JSON.parse(result3.values[0].megustasPeliculas)
    //     );
    //   }
    // }
  }
  async DeleteFavoritesSeries(id: string, series: string, tipo: string) {
    const query1 = `SELECT megustasSeries FROM Usuarios WHERE email='${id}'`;
    const result1 = await this.db.query(query1);
    console.log(JSON.stringify(result1.values[0]), 'tamos');
    if (result1.values[0].megustasSeries.includes(series)) {
      console.log('acaaa');
      // remove series form array
      const seriesFavoritas = JSON.parse(result1.values[0].megustasSeries);
      console.log(seriesFavoritas, 'favs');
      seriesFavoritas.splice(seriesFavoritas.indexOf(series), 1);
      console.log(seriesFavoritas, 'tamossss');
      const query2 = `UPDATE Usuarios SET megustasSeries='${JSON.stringify(
        seriesFavoritas
      )}' WHERE email='${id}'`;
      console.log(seriesFavoritas, 'favs');
      const result2 = await this.db.query(query2);
      this.megustasSeries.next(seriesFavoritas);
    }
  }
  async DeleteFavoritesPeliculas(id: string, series: string, tipo: string) {
    const query1 = `SELECT megustasPeliculas FROM Usuarios WHERE email='${id}'`;
    const result1 = await this.db.query(query1);
    console.log(JSON.stringify(result1.values[0]), 'tamos');
    if (result1.values[0].megustasPeliculas.includes(series)) {
      console.log('acaaa');
      // remove series form array
      const seriesFavoritas = JSON.parse(result1.values[0].megustasPeliculas);
      console.log(seriesFavoritas, 'favs');
      seriesFavoritas.splice(seriesFavoritas.indexOf(series), 1);
      console.log(seriesFavoritas, 'tamossss');
      const query2 = `UPDATE Usuarios SET megustasPeliculas='${JSON.stringify(
        seriesFavoritas
      )}' WHERE email='${id}'`;
      console.log(seriesFavoritas, 'favs');
      const result2 = await this.db.query(query2);
      this.megustasPeliculas.next(seriesFavoritas);
    }
  }
  async getMegustas(id: string) {
    const query = `SELECT megustasSeries FROM Usuarios WHERE email='${id}'`;
    const result = await this.db.query(query);
    console.log(result.values, 'aqui');
    if (result.values) return JSON.parse(result.values[0].megustasSeries);
  }
  async getMegustasPeliculas(id: string) {
    const query = `SELECT megustasPeliculas FROM Usuarios WHERE email='${id}'`;
    const result = await this.db.query(query);
    console.log(result.values, 'aqui');
    if (result.values) return JSON.parse(result.values[0].megustasPeliculas);
  }

  // getUser by email
  async getUser(email: string) {
    const query = `SELECT * FROM Usuarios WHERE email='${email}'`;
    const result = await this.db.query(query);

    return result.values[0];
  }

  getUsers() {
    console.log(this.user);
    return this.user;
  }

  async getSeriebyId(id: number) {
    const query = `SELECT * FROM Series WHERE id=${id}`;
    const result = await this.db.query(query);
    console.log(result.values[0], 'aqui');
    return result.values[0];
  }
  async getPeliculasbyId(id: number) {
    const query = `SELECT * FROM Peliculas WHERE id=${id}`;
    const result = await this.db.query(query);
    console.log(result.values[0], 'aqui');
    return result.values[0];
  }
}
