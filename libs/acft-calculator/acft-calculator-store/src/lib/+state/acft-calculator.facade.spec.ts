import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AcftCalculatorActions from './acft-calculator.actions';
import { AcftCalculatorEffects } from './acft-calculator.effects';
import { AcftCalculatorFacade } from './acft-calculator.facade';
import { AcftCalculatorEntity } from './acft-calculator.models';
import {
  ACFT_CALCULATOR_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './acft-calculator.reducer';
import * as AcftCalculatorSelectors from './acft-calculator.selectors';

interface TestSchema {
  acftCalculator: State;
}

describe('AcftCalculatorFacade', () => {
  let facade: AcftCalculatorFacade;
  let store: Store<TestSchema>;
  const createAcftCalculatorEntity = (
    id: string,
    name = ''
  ): AcftCalculatorEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ACFT_CALCULATOR_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AcftCalculatorEffects]),
        ],
        providers: [AcftCalculatorFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(AcftCalculatorFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAcftCalculator$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAcftCalculator$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAcftCalculatorSuccess` to manually update list
     */
    it('allAcftCalculator$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAcftCalculator$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AcftCalculatorActions.loadAcftCalculatorSuccess({
          acftCalculator: [
            createAcftCalculatorEntity('AAA'),
            createAcftCalculatorEntity('BBB'),
          ],
        })
      );

      list = await readFirst(facade.allAcftCalculator$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
