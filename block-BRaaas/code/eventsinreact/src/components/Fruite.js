function Fruite(props) {
  let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
  ];
  function handleClick(name) {
    console.log(name);
    return alert(`Hello ${name.value}`);
  }
  return (
    <>
      <section className='sec-padding'>
        <h2>Greet</h2>
        <div>
          {fruits.map((elem, i) => {
            return (
              <button
                className='btn'
                key={elem.id}
                onClick={() => handleClick(elem)}
              >
                {elem.value}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Fruite;
