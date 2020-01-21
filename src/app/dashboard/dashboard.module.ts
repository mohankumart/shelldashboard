import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { DashboardComponent } from './dashboard.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardTileComponent
  ]
})
export class DashboardModule {
  constructor(private injector: Injector) {
    const tileCE = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileCE);
  }
}

