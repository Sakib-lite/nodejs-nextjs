import { useRouter } from 'next/router';
import { Fragment } from 'react';
import AllStudents from '../../components/AllStudents';

export default function Home({ allStudents }) {
  const students = allStudents.students;

  return (
    <Fragment>
      <div className='flex flex-col'>
        <div className=' sm:-mx-6 lg:-mx-8'>
          <div className='inline-block  min-w-full sm:px-6 lg:px-12'>
            <div className='overflow-hidden shadow-md '>
              <table className='min-w-full'>
                <thead className='bg-gray-50 dark:bg-gray-700'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                    >
                      ID
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                    >
                      Department
                    </th>
                    <th
                      scope='col'
                      className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                    >
                      City
                    </th>
                    <th scope='col' className='relative py-3 px-1'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((std) => (
                    <AllStudents
                      key={Math.random()}
                      name={std.name}
                      id={std.id}
                      city={std.city}
                      department={std.department}
                      slug={std._id}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const query = context.query;
  const dev = process.env.NODE_ENV !== 'production';

  const host = dev
    ? 'http://localhost:3000'
    : 'https://your_deployment.server.com';
  const response = await fetch(`${host}/api/admin/southern/students`);
  const allStudents = await response.json();

  return {
    props: { allStudents },
  };
}
