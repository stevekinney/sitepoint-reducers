import { it, expect } from 'vitest';

import { counterReducer, increment, decrement } from './04-unions';

it('should increment counter with an object', () => {
  expect(
    counterReducer({ count: 0 }, { type: 'Increment', payload: { amount: 1 } }),
  ).toEqual({
    count: 1,
  });
});

it('should increment the counter with an action creator', () => {
  expect(counterReducer({ count: 1 }, increment(5))).toEqual({
    count: 6,
  });
});

it('should decrement counter with an object', () => {
  expect(
    counterReducer({ count: 0 }, { type: 'Decrement', payload: { amount: 1 } }),
  ).toEqual({
    count: -1,
  });
});

it('should increment the counter with an action creator', () => {
  expect(counterReducer({ count: 6 }, decrement(1))).toEqual({
    count: 5,
  });
});
