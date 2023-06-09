type CounterState = { count: number };
type CounterAction = { type: string };

export const incrementAction = { type: 'Increment' };
export const decrementAction = { type: 'Decrement' };

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  if (action.type === 'Increment') {
    return { count: state.count + 1 };
  }

  if (action.type === 'Decrement') {
    return { count: state.count - 1 };
  }

  return state;
};
