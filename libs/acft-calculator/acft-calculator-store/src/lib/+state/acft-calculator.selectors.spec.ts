import { AcftCalculatorEntity } from './acft-calculator.models';
import {
  acftCalculatorAdapter,
  AcftCalculatorPartialState,
  initialState,
} from './acft-calculator.reducer';
import * as AcftCalculatorSelectors from './acft-calculator.selectors';

describe('AcftCalculator Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAcftCalculatorId = (it: AcftCalculatorEntity) => it.id;
  const createAcftCalculatorEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AcftCalculatorEntity);

  let state: AcftCalculatorPartialState;

  beforeEach(() => {
    state = {
      acftCalculator: acftCalculatorAdapter.setAll(
        [
          createAcftCalculatorEntity('PRODUCT-AAA'),
          createAcftCalculatorEntity('PRODUCT-BBB'),
          createAcftCalculatorEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('AcftCalculator Selectors', () => {
    it('getAllAcftCalculator() should return the list of AcftCalculator', () => {
      const results = AcftCalculatorSelectors.getAllAcftCalculator(state);
      const selId = getAcftCalculatorId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AcftCalculatorSelectors.getSelected(
        state
      ) as AcftCalculatorEntity;
      const selId = getAcftCalculatorId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAcftCalculatorLoaded() should return the current "loaded" status', () => {
      const result = AcftCalculatorSelectors.getAcftCalculatorLoaded(state);

      expect(result).toBe(true);
    });

    it('getAcftCalculatorError() should return the current "error" state', () => {
      const result = AcftCalculatorSelectors.getAcftCalculatorError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
