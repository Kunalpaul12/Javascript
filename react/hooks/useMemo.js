import React, { useState, useMemo } from "react";

const ChildComponet = () => {
  console.log("child called");
  return (
    <div>
      <p>child componet </p>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const MemoChildComponet = useMemo(() => {
    return <ChildComponet />;
  }, []);

  return (
    <div>
      <p>{count} </p>
      <button onClick={() => setCount((v) => v + 1)}>increment</button>
      {MemoChildComponet}
    </div>
  );
};

export default App;
