import { add, subtract } from '../src/functions';

describe('tests', () => {
  describe('add', () => {
    it('successfully adds', () => {
      add(1,2);
    });
  });

  describe('subtract', () => {
    it('successfully substracts', () => {
      subtract(1,2);
    });
  });
});
