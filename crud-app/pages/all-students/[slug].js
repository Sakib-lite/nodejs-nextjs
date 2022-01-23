import React, { Fragment, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

async function updateStudent(data, slug) {
  try {
    const response = await fetch(`/api/all-students/${slug}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('failed');
    }
  } catch (err) {
    console.log(err);
  }
}

export default function StudentDetails({ student }) {
  const router = useRouter();

  const slug = student._id;

  const enteredDepartmentRef = useRef('');
  const enteredNameRef = useRef('');
  const enteredIdRef = useRef('');
  const enteredEmailRef = useRef('');
  const enteredImageRef = useRef('');
  const enteredCityRef = useRef('');
  const enteredBatchRef = useRef('');

  const updateStudentHandler = () => {
    const enteredDepartment = enteredDepartmentRef.current.value;
    const enteredName = enteredNameRef.current.value;
    const enteredId = +enteredIdRef.current.value;
    const enteredEmail = enteredEmailRef.current.value;
    const enteredImage = enteredImageRef.current.value;
    const enteredCity = enteredCityRef.current.value;
    const enteredBatch = +enteredBatchRef.current.value;

    updateStudent(
      {
        name: enteredName,
        department: enteredDepartment,
        id: enteredId,
        email: enteredEmail,
        image: enteredImage,
        city: enteredCity,
        batch: enteredBatch,
      },
      slug
    );

    router.push('/all-students');
  };

  return (
    <Fragment>
      <div className='max-w-md p-6 dark:bg-coolGray-900 bg-gray-300 justify-center'>
        <Image
          src={student.image}
          alt={`${student.name} photo`}
          width='200'
          height='200'
          className='object-cover w-full h-64 pb-6 rounded-sm sm:h-96 dark:bg-coolGray-500'
        />
        <div>
          {/* input */}
          <div className='space-y-3'>
            {' '}
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Name
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                defaultValue={student.name}
                ref={enteredNameRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                ID
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                defaultValue={student.id}
                ref={enteredIdRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Department
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                defaultValue={student.department}
                ref={enteredDepartmentRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Batch
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                defaultValue={student.batch}
                ref={enteredBatchRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Image
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/2'
                placeholder='Enter your name'
                defaultValue={student.image}
                ref={enteredImageRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Email
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/2'
                placeholder='Enter your name'
                defaultValue={student.email}
                ref={enteredEmailRef}
              />
            </div>
            <div className='flex items-center space-x-2'>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                City
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded  block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                defaultValue={student.city}
                ref={enteredCityRef}
              />
            </div>
          </div>
        </div>
        <button
          type='button'
          className='inline-flex items-center justify-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 transition-colors mt-4'
          onClick={updateStudentHandler}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            {' '}
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
              clipRule='evenodd'
            />
          </svg>
          <div>Update</div>
        </button>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const params = context.params;
  const { slug } = params;

  const dev = process.env.NODE_ENV !== 'production';

  const host = dev
    ? 'http://localhost:3000'
    : 'https://your_deployment.server.com';
  const response = await fetch(`${host}/api/all-students/${slug}`);
  const result = await response.json();
  const student = result.students;

  return {
    props: { student },
  };
}
export async function getStaticPaths() {
  const dev = process.env.NODE_ENV !== 'production';

  const host = dev
    ? 'http://localhost:3000'
    : 'https://your_deployment.server.com';
  const response = await fetch(`${host}/api/admin/southern/students`);
  const allStudents = await response.json();

  const paths = allStudents.students.map((std) => ({
    params: { slug: std._id.toString() },
  }));

  return { paths, fallback: false };
}
