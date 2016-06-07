import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Test2A2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Test2A2AppComponent);

