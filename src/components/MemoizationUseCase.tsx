import React, { useMemo, useState } from 'react'

// The slow function is called only when the variable 'number' changes
// because the result of the function is being cached (memoized)

function MemoizationUseCase() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // calculated variables
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black'
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h2>Memoization (use Memo)</h2>
      <p>
        The slow function is called only when the variable 'number' changes from the input <br />
        because the result of the function is being cached (memoized).
      </p>
      <hr />
      <input type="number" name="anumber" value={number} id="anumber" onChange={e => { setNumber(parseInt(e.target.value)) }} />
      <hr />
      <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>Change Theme</button>
      <hr />
      <div style={themeStyles}>{doubleNumber}</div>
      <hr />
    </div>
  )
}

export default MemoizationUseCase

function slowFunction(num) {
  console.log('Calling a slow function');
  for (let i = 0; i < 1000000000; i++) { }
  return num * 2;
}