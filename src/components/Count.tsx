import React from "react";

export const Count =
  React.memo<{ onOdd: () => any, data: Record<string, any> }>(({ onOdd }) => {
    const [count, setCount] = React.useState(0);
    const renders = React.useRef(0);
    return (
      <div className="App">
        <div>count: {count}</div>
        <div>renders: {renders.current++}</div>
        <button
          onClick={() => {
            if (count % 2 === 0) {
              onOdd();
            }
            setCount(c => c + 1);
          }}
        >
          increment
        </button>
      </div>
    );
  },
    (prevProps, nextProps) => {
      if (prevProps.data.isEven !== nextProps.data.isEven) {
        return true;
      }

      return false;
    }
  );
