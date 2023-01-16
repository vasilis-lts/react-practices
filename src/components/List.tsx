import React, { useEffect, useState } from 'react'

function List({ getItems }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('List component is re-rendering!');
    setItems(getItems(1));
  }, [getItems])

  return (<>
    {items.map(item => <div key={item}>{item}</div>)}
  </>
  )
}

export default List