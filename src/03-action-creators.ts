export const INCREMENT = 'Increment';
export const DECREMENT = 'Decrement';

type CounterState = { count: number };

type CounterAction = {
  type: string;
  payload: {
    amount: number;
  };
};

type CounterReducer = (
  state: CounterState,
  action: CounterAction,
) => CounterState;

export const increment = (amount = 1): CounterAction => ({
  type: INCREMENT,
  payload: { amount },
});

export const decrement = (amount = 1): CounterAction => ({
  type: DECREMENT,
  payload: { amount },
});

export const counterReducer: CounterReducer = (state, action) => {
  let { count } = state;

  if (action.type === 'Increment') {
    return { count: count + action.payload.amount };
  }

  if (action.type === 'Decrement') {
    return { count: count - action.payload.amount };
  }

  return state;
};
