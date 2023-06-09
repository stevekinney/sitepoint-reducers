type CounterState = { count: number };

type CounterAction = {
  type: 'Increment' | 'Decrement';
  payload: {
    amount: number;
  };
};

type CounterReducer = (
  state: CounterState,
  action: CounterAction,
) => CounterState;

export const increment = (amount = 1): CounterAction => ({
  type: 'Increment',
  payload: { amount },
});

export const decrement = (amount = 1): CounterAction => ({
  type: 'Decrement',
  payload: { amount },
});

export const counterReducer: CounterReducer = (state, action) => {
  let { count } = state;

  switch (action.type) {
    case 'Increment':
      return { count: count + action.payload.amount };
    case 'Decrement':
      return { count: count - action.payload.amount };
  }
};
