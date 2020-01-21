import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { LazyDashboardTileComponent } from './lazy-dashboard-tile.component';



@NgModule({
  declarations: [
    LazyDashboardTileComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    LazyDashboardTileComponent
  ]
})
export class LazyDashboardTileModule {
  constructor(private injector: Injector) {
    const lazyTileCE = createCustomElement(LazyDashboardTileComponent, { injector: this.injector });
    customElements.define('lazy-dashboard-tile', lazyTileCE);
  }
}

