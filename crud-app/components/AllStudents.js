import { useRouter } from 'next/router';
import { Fragment } from 'react';

export default function AllStudents({ name, id, department, city, slug }) {
  const router = useRouter();

  async function deleteStudent() {
    try {
      const response = await fetch(`/api/all-students/${slug}`, {
        method: 'DELETE',

        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('failed');
      }
      router.push('/all-students');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
        <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
          {name}
        </td>
        <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {id}
        </td>
        <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {department}
        </td>
        <td className='py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400'>
          {city}
        </td>
        <td className='py-4 px-6 space-x-4 text-sm font-medium text-right whitespace-nowrap'>
          <button
            className='text-blue-600 hover:text-blue-900 dark:text-blue-500 dark:hover:underline'
            onClick={() => router.push(`${router.pathname}/${slug}`)}
          >
            Edit
          </button>
          <button
            className='text-red-600 hover:text-red-200 dark:text-blue-500 dark:hover:underline'
            onClick={() => deleteStudent()}
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
}
