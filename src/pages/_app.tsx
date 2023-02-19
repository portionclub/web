import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-dark text-white'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
