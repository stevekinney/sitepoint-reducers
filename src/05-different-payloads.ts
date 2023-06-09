type CounterState = { count: number };

type CounterAdjustmentAction = {
  type: 'Increment' | 'Decrement';
  payload: {
    amount: number;
  };
};

type CounterResetAction = {
  type: 'Reset';
};

type CounterAction = CounterAdjustmentAction | CounterResetAction;

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

export const reset = (): CounterResetAction => ({ type: 'Reset' });

export const counterReducer: CounterReducer = (
  state = { count: 0 },
  action,
) => {
  let { count } = state;

  switch (action.type) {
    case 'Increment':
      return { count: count + action.payload.amount };
    case 'Decrement':
      return { count: count - action.payload.amount };
    case 'Reset':
      return { count: 0 };
  }
};
