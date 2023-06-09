import { useReducer } from 'react';

import {
  counterReducer,
  increment,
  decrement,
  reset,
} from './05-different-payloads';

const Counter = () => {
  let [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <main className="mx-auto w-96 flex flex-col gap-8 items-center">
      <h1>Counter</h1>
      <p className="text-7xl">{state.count}</p>
      <div className="flex place-content-between w-full">
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
      </div>
    </main>
  );
};

export default Counter;
