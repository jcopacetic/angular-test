import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import { LoadName, NameLoaded, LoadNameError, NameActionTypes } from './name.actions';
import { NamePartialState } from './name.reducer';

@Injectable()
export class NameEffects {
  @Effect() loadName$ = this.actions$.pipe(
    ofType(NameActionTypes.LoadName),
    fetch({
      run: (action: LoadName, state: NamePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new NameLoaded([]);
      },

      onError: (action: LoadName, error) => {
        console.error('Error', error);
        return new NameLoadError(error);
      }
    })
  );

  constructor(
    private readonly actions$: Actions
  ) {}
}