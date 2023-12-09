import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, StoreModule } from '@ngrx/store';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { NameEffects } from './name.effects';
import { LoadName, NameLoaded } from './name.actions';

describe('NameEffects', () => {
  let actions: Observable<Action>;
  let effects: NameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        NameEffects,
        provideMockActions(() => actions)
      ],
    });

    effects = TestBed.inject(NameEffects);
  });

  describe('loadName$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadName() });

      expect(effects.loadName$).toBeObservable(
        hot('-a-|', { a: new NameLoaded([]) })
      );
    });
  });
});