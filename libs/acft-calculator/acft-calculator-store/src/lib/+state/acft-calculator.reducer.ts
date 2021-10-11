import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AcftCalculatorActions from './acft-calculator.actions';
import { AcftCalculatorEntity } from './acft-calculator.models';

export const ACFT_CALCULATOR_FEATURE_KEY = 'acftCalculator';

export interface State extends EntityState<AcftCalculatorEntity> {
  selectedId?: string | number; // which AcftCalculator record has been selected
  loaded: boolean; // has the AcftCalculator list been loaded
  error?: string | null; // last known error (if any)
}

export interface AcftCalculatorPartialState {
  readonly [ACFT_CALCULATOR_FEATURE_KEY]: State;
}

export const acftCalculatorAdapter: EntityAdapter<AcftCalculatorEntity> =
  createEntityAdapter<AcftCalculatorEntity>();

export const initialState: State = acftCalculatorAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const acftCalculatorReducer = createReducer(
  initialState,
  on(AcftCalculatorActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    AcftCalculatorActions.loadAcftCalculatorSuccess,
    (state, { acftCalculator }) =>
      acftCalculatorAdapter.setAll(acftCalculator, { ...state, loaded: true })
  ),
  on(AcftCalculatorActions.loadAcftCalculatorFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return acftCalculatorReducer(state, action);
}
