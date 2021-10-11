import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as AcftCalculatorActions from './acft-calculator.actions';
import { AcftCalculatorEffects } from './acft-calculator.effects';

describe('AcftCalculatorEffects', () => {
  let actions: Observable<Action>;
  let effects: AcftCalculatorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AcftCalculatorEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AcftCalculatorEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AcftCalculatorActions.init() });

      const expected = hot('-a-|', {
        a: AcftCalculatorActions.loadAcftCalculatorSuccess({
          acftCalculator: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
