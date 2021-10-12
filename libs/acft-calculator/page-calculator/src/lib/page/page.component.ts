import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {} from 'primeng';

@Component({
  template: ` <h1>Hello, Jonas!</h1> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCalculatorPageComponent {}

const routes: Routes = [
  {
    path: '',
    component: PageCalculatorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [PageCalculatorPageComponent],
  exports: [RouterModule]
})
export class PageCalculatorPageComponentModule {}
