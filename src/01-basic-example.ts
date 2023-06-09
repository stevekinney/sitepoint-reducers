export const incrementAction = { type: 'Increment' };
export const decrementAction = { type: 'Decrement' };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const counterReducer = (state: any, action: any) => {
  if (action.type === 'Increment') {
    return { count: state.count + 1 };
  }

  if (action.type === 'Decrement') {
    return { count: state.count - 1 };
  }

  return state;
};
