import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AcftCalculatorActions from './acft-calculator.actions';
import * as AcftCalculatorFeature from './acft-calculator.reducer';

@Injectable()
export class AcftCalculatorEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AcftCalculatorActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AcftCalculatorActions.loadAcftCalculatorSuccess({
            acftCalculator: [],
          });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AcftCalculatorActions.loadAcftCalculatorFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
