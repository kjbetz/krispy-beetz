import { createAction, props } from '@ngrx/store';
import { AcftCalculatorEntity } from './acft-calculator.models';

export const init = createAction('[AcftCalculator Page] Init');

export const loadAcftCalculatorSuccess = createAction(
  '[AcftCalculator/API] Load AcftCalculator Success',
  props<{ acftCalculator: AcftCalculatorEntity[] }>()
);

export const loadAcftCalculatorFailure = createAction(
  '[AcftCalculator/API] Load AcftCalculator Failure',
  props<{ error: any }>()
);
