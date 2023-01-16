import React from 'react'
import { Count } from './Count';

function MemoizedComponentUseCase() {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");

  const onOdd = React.useCallback(() => setText(""), [setText]);
  const data = React.useMemo(
    () => ({
      text2,
      isEven: text2.length % 2 === 0
    }),
    [text2]
  );

  return (
    <div className="App">
      <input value={text} onChange={e => setText(e.target.value)} />
      <input
        placeholder="text2"
        value={text2}
        onChange={e => setText2(e.target.value)}
      />
      <Count onOdd={onOdd} data={data} />
    </div>
  );
}

export default MemoizedComponentUseCase