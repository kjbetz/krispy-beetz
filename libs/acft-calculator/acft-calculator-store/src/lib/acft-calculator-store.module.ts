import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAcftCalculator from './+state/acft-calculator.reducer';
import { AcftCalculatorEffects } from './+state/acft-calculator.effects';
import { AcftCalculatorFacade } from './+state/acft-calculator.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAcftCalculator.ACFT_CALCULATOR_FEATURE_KEY,
      fromAcftCalculator.reducer
    ),
    EffectsModule.forFeature([AcftCalculatorEffects]),
  ],
  providers: [AcftCalculatorFacade],
})
export class AcftCalculatorStoreModule {}
