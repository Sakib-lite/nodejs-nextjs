export default function students() {
  console.log('Submit1');

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Submit2');
  };
  console.log('Submit3');
  return (
    <div>
      <form >
        <div>
          <label>Name</label>
          <input type='text' />
        </div>
        <div>
          <label>age</label>
          <input type='number' />
        </div>
        <div>
          <label>Roll</label>
          <input type='number' />
        </div>
        <div>
          <label>Department</label>
          <input type='text' />
        </div>
      </form>
      <button type='button' onClick={formSubmitHandler}>Submit</button>
    </div>
  );
}
