import React, { useCallback, useMemo, useState } from 'react'
import List from './List';

// The slow function is called only when the variable 'number' changes
// because the result of the function is being cached (memoized)

function CallbackHookUseCase() {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const themeStyles = {
    backgroundColor: darkTheme ? 'black' : 'white',
    color: darkTheme ? 'white' : 'black',
    marginTop: 10
  }

  const getItems = useCallback(incrementor => {
    return [number + incrementor, (number + incrementor) + 1, (number + incrementor) + 2]
  }, [number])

  return (
    <div style={themeStyles}>
      <h2>Use Callback</h2>
      <p>Same as useMemo, but we can now cache a function and use parameters on it! <br />
        Notice in the console, how the List component is being re-rendered only when the <br />
        input changes and not when the theme changes
      </p>
      <hr />
      <input type="number" name="anumber" value={number} id="anumber" onChange={e => { setNumber(parseInt(e.target.value)) }} />
      <hr />
      <button onClick={() => setDarkTheme(prevTheme => !prevTheme)}>Toggle Theme</button>
      <hr />
      <List getItems={getItems} />
      <hr />
    </div>
  )
}

export default CallbackHookUseCase

function slowFunction(num) {
  console.log('Calling a slow function');
  for (let i = 0; i < 1000000000; i++) { }
  return num * 2;
}