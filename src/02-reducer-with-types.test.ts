import { test, expect } from 'vitest';

import {
  counterReducer,
  incrementAction,
  decrementAction,
} from './02-reducer-with-types';

test('should increment counter', () => {
  expect(counterReducer({ count: 0 }, { type: 'Increment' })).toEqual({
    count: 1,
  });
});

test('should decrement counter', () => {
  expect(counterReducer({ count: 2 }, { type: 'Decrement' })).toEqual({
    count: 1,
  });
});

test('should return state for unknown action', () => {
  expect(counterReducer({ count: 0 }, { type: 'Unknown' })).toEqual({
    count: 0,
  });
});

test('example in article should work', () => {
  let state = { count: 1 };

  state = counterReducer(state, incrementAction);
  state = counterReducer(state, incrementAction);
  state = counterReducer(state, decrementAction);

  expect(state).toEqual({ count: 2 });
});
