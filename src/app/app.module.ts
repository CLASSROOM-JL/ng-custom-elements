import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {createCustomElement} from "@angular/elements";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LazyElementsModule } from '@angular-extensions/elements';
import {CustomElementWidgetNewsComponent} from "./custom-element-widget-news/custom-element-widget-news.component";
@NgModule({
  declarations: [
    AppComponent,
    CustomElementWidgetNewsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    LazyElementsModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // entryComponents: [AppComponent]
  bootstrap: [AppComponent]
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
