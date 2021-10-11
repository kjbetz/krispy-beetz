import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AcftCalculatorActions from './acft-calculator.actions';
import * as AcftCalculatorFeature from './acft-calculator.reducer';
import * as AcftCalculatorSelectors from './acft-calculator.selectors';

@Injectable()
export class AcftCalculatorFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(
    select(AcftCalculatorSelectors.getAcftCalculatorLoaded)
  );
  allAcftCalculator$ = this.store.pipe(
    select(AcftCalculatorSelectors.getAllAcftCalculator)
  );
  selectedAcftCalculator$ = this.store.pipe(
    select(AcftCalculatorSelectors.getSelected)
  );

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AcftCalculatorActions.init());
  }
}
