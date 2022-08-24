import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    if (!customElements.get('my-exported-custom-cmp')) {
      const elementConsole = createCustomElement(AppComponent, {
        injector: this.injector
      });
      customElements.define('my-exported-custom-cmp', elementConsole);
    }
  }
}
