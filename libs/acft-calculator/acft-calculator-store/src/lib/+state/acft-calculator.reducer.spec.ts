import { Action } from '@ngrx/store';

import * as AcftCalculatorActions from './acft-calculator.actions';
import { AcftCalculatorEntity } from './acft-calculator.models';
import { State, initialState, reducer } from './acft-calculator.reducer';

describe('AcftCalculator Reducer', () => {
  const createAcftCalculatorEntity = (
    id: string,
    name = ''
  ): AcftCalculatorEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid AcftCalculator actions', () => {
    it('loadAcftCalculatorSuccess should return the list of known AcftCalculator', () => {
      const acftCalculator = [
        createAcftCalculatorEntity('PRODUCT-AAA'),
        createAcftCalculatorEntity('PRODUCT-zzz'),
      ];
      const action = AcftCalculatorActions.loadAcftCalculatorSuccess({
        acftCalculator,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
