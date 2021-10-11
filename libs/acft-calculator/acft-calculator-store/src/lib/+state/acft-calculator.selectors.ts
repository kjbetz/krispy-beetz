import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ACFT_CALCULATOR_FEATURE_KEY,
  State,
  acftCalculatorAdapter,
} from './acft-calculator.reducer';

// Lookup the 'AcftCalculator' feature state managed by NgRx
export const getAcftCalculatorState = createFeatureSelector<State>(
  ACFT_CALCULATOR_FEATURE_KEY
);

const { selectAll, selectEntities } = acftCalculatorAdapter.getSelectors();

export const getAcftCalculatorLoaded = createSelector(
  getAcftCalculatorState,
  (state: State) => state.loaded
);

export const getAcftCalculatorError = createSelector(
  getAcftCalculatorState,
  (state: State) => state.error
);

export const getAllAcftCalculator = createSelector(
  getAcftCalculatorState,
  (state: State) => selectAll(state)
);

export const getAcftCalculatorEntities = createSelector(
  getAcftCalculatorState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAcftCalculatorState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getAcftCalculatorEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
