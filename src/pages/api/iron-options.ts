const ironOptions = {
  cookieName: 'siwe',
  password: process.env.SIWE_SECRET || '',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export default ironOptions;
