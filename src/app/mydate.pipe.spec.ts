import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import { Mydate } from './mydate.pipe';

describe('Mydate Pipe', () => {
  beforeEachProviders(() => [Mydate]);

  it('should transform the input', inject([Mydate], (pipe: Mydate) => {
      expect(pipe.transform(true)).toBe(null);
  }));
});
