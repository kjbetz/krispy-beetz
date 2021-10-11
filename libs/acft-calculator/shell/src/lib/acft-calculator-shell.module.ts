import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'calculator',
        loadChildren: () =>
          import('@krispy-beetz/acft-calculator/page-calculator').then(
            (module) => module.AcftCalculatorPageCalculatorModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calculator'
      }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
  ],
})
export class AcftCalculatorShellModule {}
