import React, { useEffect, useState } from "react";

export const useEffectExample = () => {
  const [count, setCount] = useState(0);

  ///// Will render every time ///////////////
  useEffect(() => {
    console.log("every time");
  });

  /////// Will act as componentDidMount and componentWillMount /////////

  useEffect(() => {
    console.log("component did mount and unmount");
  }, []);

  /////// Will act as componentWillUnMount ////////////

  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  });

  //// Will execute only when the value of count change /////////

  useEffect(() => {
    console.log("value of count change to :---- ", count);
  }, [count]);

  return (
    <div>
      <p>The count is :- {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

/**

Note:- In class component wheather the componet should tigerr re-render or not is done by

componentDidUpdate

for example 

componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}

 */
