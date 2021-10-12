import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'acft',
    loadChildren: () =>
      import('@krispy-beetz/acft-calculator/shell').then(
        (module) => module.AcftCalculatorShellModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'acft',
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
