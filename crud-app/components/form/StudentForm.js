import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import logo from '../../public/southern.png';

export default function StudentForm() {
  const enteredDepartmentRef = useRef('');
  const enteredNameRef = useRef('');
  const enteredIdRef = useRef('');
  const enteredEmailRef = useRef('');
  const enteredImageRef = useRef('');
  const enteredDateOfBirthRef = useRef('');
  const enteredCityRef = useRef('');
  const enteredBatchRef = useRef('');

  useEffect(() => {
    enteredDepartmentRef.current.focus();
  });

  async function createStudent(data) {
    try {
      const response = await fetch('/api/admin/southern/students', {
        method: 'POST',
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

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const enteredDepartment = enteredDepartmentRef.current.value;
    const enteredName = enteredNameRef.current.value;
    const enteredId = +enteredIdRef.current.value;
    const enteredEmail = enteredEmailRef.current.value;
    const enteredImage = enteredImageRef.current.value;
    const enteredDateOfBirth = enteredDateOfBirthRef.current.value;
    const enteredCity = enteredCityRef.current.value;
    const enteredBatch = +enteredBatchRef.current.value;

    console.log({
      name: enteredName,
      department: enteredDepartment,
      id: enteredId,
      email: enteredEmail,
      image: enteredImage,
      dob: enteredDateOfBirth,
      city: enteredCity,
      batch: enteredBatch,
    });

    createStudent({
      name: enteredName,
      department: enteredDepartment,
      id: enteredId,
      email: enteredEmail,
      image: enteredImage,
      dob: enteredDateOfBirth,
      city: enteredCity,
      batch: enteredBatch,
    });
    enteredIdRef.current.value = '';
    enteredNameRef.current.value = '';

    enteredEmailRef.current.value = '';
    enteredImageRef.current.value = '';
    enteredDateOfBirthRef.current.value = '';
    enteredCityRef.current.value = '';
    enteredBatchRef.current.value = '';
  };

  return (
    <div>
      <div className='p-8 rounded border border-gray-200'>
        <div className='flex items-center'>
          <Image src={logo} alt='southern-logo' width='50' height='50' />
          <h1 className='font-medium text-xl '>Add Student</h1>
        </div>

        <form onSubmit={formSubmitHandler}>
          <div className='mt-8 gap-4 space-y-3'>
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Name
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Enter your name'
                ref={enteredNameRef}
              />
            </div>

            {/*  */}

            <div className='flex space-x-5 items-center  '>
              <label className='text-sm text-gray-700  font-medium '>
                Department
              </label>
              <select className='bg-gray-100' ref={enteredDepartmentRef}>
                <option value='CSE'>CSE</option>
                <option value='CIVIL'>CIVIL</option>
                <option value='EEE'>EEE</option>
                <option value='LLB'>LLB</option>
                <option value='PHARMACY'>PHARMACY</option>
                <option value='ENGLISH'>ENGLISH</option>
              </select>
            </div>
            {/*  */}

            {/*  */}
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                ID
              </label>
              <input
                type='number'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='1000'
                ref={enteredIdRef}
              />
            </div>

            {/*  */}
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Email Adress
              </label>
              <input
                type='text'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='yourmail@provider.com'
                ref={enteredEmailRef}
              />
            </div>
            {/*  */}
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Image
              </label>
              <input
                type='name'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='https//'
                ref={enteredImageRef}
              />
            </div>

            {/*  */}

            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Date of Birth
              </label>
              <input
                type='text'
                placeholder='YYYY-MM-DD'
                pattern='(?:19|20)(?:(?:[13579][26]|[02468][048])-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))|(?:[0-9]{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:29|30))|(?:(?:0[13578]|1[02])-31)))'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                ref={enteredDateOfBirthRef}
              />
            </div>

            {/*  */}
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                City
              </label>
              <input
                type='name'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='Dhaka'
                ref={enteredCityRef}
              />
            </div>

            {/*  */}
            <div>
              <label className='text-sm text-gray-700 block mb-1 font-medium'>
                Batch
              </label>
              <input
                type='number'
                className='bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-1/3'
                placeholder='51'
                min='1'
                ref={enteredBatchRef}
              />
            </div>
          </div>
          <div className='mt-4'>
            <button
              type='submit'
              className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
