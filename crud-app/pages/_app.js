import Link from 'next/link';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className=''>
      <div className='space-x-5'>
        {' '}
        <Link href='/admin/add-student'>
          <a className='text-red-600'>Add Student</a>
        </Link>
        <Link href='/all-students'>
          <a className='text-red-600'>All Students</a>
        </Link>
        
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
