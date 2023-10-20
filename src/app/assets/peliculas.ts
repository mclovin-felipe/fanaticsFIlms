interface comentarios {
  usuario: number;
  desc: string;
  key: any;
}
interface pelicula {
  [rol: string]: {
    titulo: string;
    img: string;
    desc: string;
    banner: string;
    comentarios: Array<comentarios>;
  };
}
export const Peliculas: pelicula = {
  uno: {
    titulo: 'Shang-Chi y la leyenda de los diez anillos',
    img: '/assets/icon/pelicula1.jpg',
    banner: '/assets/icon/poster1.jpg',
    desc: ' Shang-Chi es un superhéroe de Marvel, maestro de artes marciales. Descubre su pasado oscuro y se enfrenta a la organización de su padre. Película de acción y aventuras que explora identidad y legado.',
    comentarios: [
      {
        usuario: 1,
        desc: 'Shang-Chi emerge como un héroe cautivador. Sus asombrosas habilidades en artes marciales se entrelazan con una trama de secretos familiares y misterios ancestrales. Los espectaculares combates y efectos visuales se fusionan con una exploración profunda de la identidad y el compromiso. Una experiencia cinematográfica emocionante y reflexiva',
        key: 1,
      },
      { usuario: 2, desc: 'Esta mala', key: 2 },
    ],
  },
  dos: {
    titulo: 'Piratas del caribe: El cofre de la muerte',
    img: '/assets/icon/pelicula2.jpg',
    banner: '/assets/icon/poster2.jpg',
    desc: `En "El Cofre de la Muerte", Jack Sparrow se enfrenta a deudas con el siniestro Davy Jones. En una trama de traiciones y búsqueda de tesoros malditos, Sparrow lucha por su vida mientras otros buscan cambiar su destino.`,
    comentarios: [
      {
        usuario: 1,
        desc: `Piratas del Caribe: El Cofre de la Muerte" es mi pelicula favorita! es emocionante y astutamente tramada. Johnny Depp impresiona como Jack Sparrow en esta aventura llena de giros, acción y un mundo mágico. Una experiencia cinematográfica cautivadora.`,
        key: 1,
      },
    ],
  },
  tres: {
    titulo: 'Vengadores: La Era de Ultron',
    banner: '/assets/icon/poster3.jpg',
    desc: ` ¡"La Era de Ultrón" lleva a los Vengadores al límite cuando Tony Stark desencadena sin querer a Ultron, una inteligencia artificial peligrosa. Las batallas colosales y los conflictos internos agitan al equipo, mientras nuevos aliados y amenazas emergen. ¡Una épica alucinante que redefine la grandeza de los superhéroes!`,
    img: '/assets/icon/pelicula3.jpg',
    comentarios: [
      {
        usuario: 1,
        desc: `¡"Avengers: La Era de Ultrón" es una montaña rusa emocional de pura grandiosidad superheroica! Con explosivas escenas de batalla, momentos épicos y giros inesperados, esta película reúne a nuestros héroes de manera fenomenal. La acción desenfrenada y las profundas interacciones personales crean una experiencia cinematográfica verdaderamente electrizante. ¡Increíblemente asombrosa!`,
        key: 1,
      },
    ],
  },
  cuatro: {
    titulo: 'Oppenheimer',
    banner: '/assets/icon/poster4.jpeg',
    desc: `  El físico J Robert Oppenheimer trabaja con un equipo de científicos durante el Proyecto Manhattan, que condujo al desarrollo de la bomba atómica.
    `,
    img: '/assets/icon/pelicula4.png',
    comentarios: [
      {
        usuario: 1,
        desc: `"Openheimer" es una película impresionante que me ha dejado asombrada. Cillian Murphy encaja perfectamente en su papel y no podrían haber elegido a un actor mejor para interpretarlo. También es genial ver a Robert Downey en la película, lo que agrega otro talento notable al elenco.`,
        key: 1,
      },
    ],
  },
  cinco: {
    titulo: 'Busqueda Implacable',
    banner: '/assets/icon/poster5.jpg',
    desc: `En "Búsqueda Implacable", Bryan Mills, exagente, persigue despiadadamente a los secuestradores de su hija en una carrera contrarreloj. Una película de acción intensa que te mantendrá al borde del asiento.`,
    img: '/assets/icon/pelicula5.jpg',
    comentarios: [
      {
        usuario: 1,
        desc: `"Búsqueda Implacable" es pura adrenalina. Liam Neeson desata su furia como Bryan Mills, un padre que se convierte en un tornado de acción para salvar a su hija. La trama vertiginosa y las secuencias emocionantes te mantienen pegado a la pantalla.`,
        key: 1,
      },
    ],
  },
};
