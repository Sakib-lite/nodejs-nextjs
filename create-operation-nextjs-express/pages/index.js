import { Fragment, useState } from 'react';

export default function Home() {
  const [enteredAge, setEnteredAge] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredRoll, setEnteredRoll] = useState('');
  const [enteredDepartment, setEnteredDepartment] = useState('');

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: enteredName,
      age: enteredAge,
      roll: enteredRoll,
      department: enteredDepartment,
    };

    console.log(data);
    try {
      const response = await fetch('/api/students', {
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
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor=''>Name</label>
            <input
              type='text'
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor=''>age</label>
            <input
              type='number'
              value={enteredAge}
              onChange={(event) => setEnteredAge(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor=''>Roll</label>
            <input
              type='number'
              value={enteredRoll}
              onChange={(event) => setEnteredRoll(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor=''>Department</label>
            <input
              type='text'
              value={enteredDepartment}
              onChange={(event) => setEnteredDepartment(event.target.value)}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </Fragment>
  );
}
