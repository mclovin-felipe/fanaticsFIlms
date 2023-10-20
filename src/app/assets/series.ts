export interface comentarios {
  usuario: number;
  desc: string;
  key: any;
}
export interface serie {
  [rol: string]: {
    titulo: string;
    img: string;
    desc: string;
    banner: string;
    comentarios: Array<comentarios>;
  };
}
export const Series: serie = {
  uno: {
    titulo: 'Moon Knight',
    img: '/assets/icon/serie1.png',
    banner: '/assets/icon/poster6.jpg',
    desc: ' En "Moon Knight", Marc Spector, un hombre con trastorno de identidad disociativo, adopta múltiples identidades para luchar contra el crimen. La serie sigue su viaje enigmático mientras se enfrenta a enemigos sobrenaturales y a su propia psicología fracturada. Acción y misterio se entrelazan en esta emocionante historia de superhéroes.',
    comentarios: [
      {
        usuario: 1,
        desc: '"Moon Knight" es una sorprendente inmersión en el mundo de los superhéroes. Oscar Isaac brinda vida al complejo Marc Spector, quien lucha con trastornos mentales mientras combate el crimen como Moon Knight. Con misterio, acción y profundidad psicológica, la serie ofrece una experiencia única y cautivadora.',
        key: 1,
      },
      { usuario: 2, desc: 'Esta mala', key: 2 },
    ],
  },
  dos: {
    titulo: "Grey's Anatomy",
    img: '/assets/icon/serie2.jpeg',
    banner: '/assets/icon/poster7.jpg',
    desc: `"Grey's Anatomy" narra las vidas y desafíos de jóvenes médicos mientras aprenden a equilibrar el caos de la sala de operaciones con sus propias relaciones y crisis personales. Con un enfoque en la medicina y el drama humano, la serie se ha convertido en un ícono de la televisión.`,
    comentarios: [
      {
        usuario: 1,
        desc: `"Grey's Anatomy" es un emocionante drama médico que ha capturado los corazones de millones. A lo largo de sus temporadas, sigue las vidas y carreras de un grupo de médicos en el Grey Sloan Memorial Hospital, tejiendo intriga, romance y dilemas éticos en una narrativa cautivadora.`,
        key: 1,
      },
    ],
  },
  tres: {
    titulo: 'The Rookie',
    banner: '/assets/icon/poster8.jpg',
    desc: ` En "The Rookie", John Nolan, un hombre de mediana edad, decide unirse a la policía. A pesar de ser el novato más antiguo, enfrenta peligros, escepticismo y situaciones intensas mientras lucha por demostrar su valía. La serie explora su transformación en un agente respetado y su vínculo con sus compañeros.`,
    img: '/assets/icon/serie3.avif',
    comentarios: [
      {
        usuario: 1,
        desc: ` ¡"The Rookie" te atrapa en un torbellino emocionante! Acompaña a John Nolan, un novato policial con la pasión ardiente por el deber. Con Nathan Fillion a la cabeza, la serie fusiona acción, amistad y desafíos personales. ¡Y hablemos de Tim Bradford! Su atractivo y valentía añaden un toque irresistible. ¡Prepárate para una montaña rusa emocional que no querrás soltar!`,
        key: 1,
      },
    ],
  },
  cuatro: {
    titulo: 'Loki',
    banner: '/assets/icon/poster9.jpg',
    desc: `En "Loki", el carismático Dios de las Travesuras se enfrenta a las consecuencias de robar el Teseracto y alterar la línea de tiempo. Forzado a colaborar con la Autoridad de Variación Temporal (AVT), se enreda en una lucha contra la malevolente Variante. La serie explora la identidad y el propósito de Loki mientras se sumerge en un multiverso de intrigas.`,
    img: '/assets/icon/serie4.jpg',
    comentarios: [
      {
        usuario: 1,
        desc: `¡"Loki" desencadena un viaje épico y enigmático que redefine el universo Marvel! Tom Hiddleston retoma su icónico papel, llevando al Dios de las Travesuras a nuevas dimensiones de caos y redención. Con intriga cósmica, giros asombrosos y el ingenio característico de Loki, la serie se convierte en una experiencia televisiva inolvidable.`,
        key: 1,
      },
    ],
  },
  cinco: {
    titulo: 'Peaky Blinders',
    banner: '/assets/icon/poster10.jpg',
    desc: ` "Peaky Blinders" sigue a los Shelby, una familia de criminales líderes de una banda en la posguerra de Birmingham. Tomando su nombre de las navajas ocultas en sus gorras, los Peaky Blinders enfrentan amenazas internas y externas mientras luchan por el poder en un mundo implacable. Cillian Murphy brilla en el papel de Thomas Shelby, el carismático líder de la banda. Con giros emocionantes y atmósfera cautivadora, la serie es una joya del drama criminal.`,
    img: '/assets/icon/serie5.jpeg',
    comentarios: [
      {
        usuario: 1,
        desc: `"Peaky Blinders" te sumerge en el turbulento mundo de los gangsters con un estilo y audacia sin igual. Encabezada por Cillian Murphy, la serie traza la ascensión feroz de los Shelby en la peligrosa Birmingham posguerra. Intriga, traiciones y el carisma de los protagonistas convergen en un épico drama criminal que cautiva de principio a fin.`,
        key: 1,
      },
    ],
  },
};
