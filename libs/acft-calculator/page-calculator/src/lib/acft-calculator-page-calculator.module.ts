import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./page/page.component').then(
        (module) => module.PageCalculatorPageComponentModule
      ),
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AcftCalculatorPageCalculatorModule {}
