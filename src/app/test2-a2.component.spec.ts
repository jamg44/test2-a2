import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Test2A2AppComponent } from '../app/test2-a2.component';

beforeEachProviders(() => [Test2A2AppComponent]);

describe('App: Test2A2', () => {
  it('should create the app',
      inject([Test2A2AppComponent], (app: Test2A2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test2-a2 works!\'',
      inject([Test2A2AppComponent], (app: Test2A2AppComponent) => {
    expect(app.title).toEqual('test2-a2 works!');
  }));
});
