import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'acft-calculator-calculator',
        loadChildren: () =>
          import(
            '@krispy-beetz/acft-calculator/acft-calculator-calculator'
          ).then((module) => module.AcftCalculatorCalculatorModule),
      },
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class AcftCalculatorShellModule {}
