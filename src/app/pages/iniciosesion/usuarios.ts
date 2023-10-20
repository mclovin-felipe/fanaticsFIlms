interface usuario {
  [rol: string]: {
    user: string;
    pass: string;
  };
}
export const Usuarios: usuario = {
  admin: { user: 'admin', pass: '12345' },
  cliente: { user: 'cliente', pass: '1234' },
  anto: {
    user: 'anto',
    pass: 'prueba123',
  },
};
