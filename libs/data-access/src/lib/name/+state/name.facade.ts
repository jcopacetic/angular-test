import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { NamePartialState } from './name.reducer';
import { nameQuery } from './name.selectors';
import { LoadName } from './name.actions';

@Injectable()
export class NameFacade {
  loaded$ = this.store.pipe(select(nameQuery.getLoaded));
  allName$ = this.store.pipe(select(nameQuery.getAllName));
  selectedName$ = this.store.pipe(select(nameQuery.getSelectedName));
  
  constructor(private readonly store: Store<NamePartialState>) {}
 
  loadAll() {
    this.store.dispatch(new LoadName());
  }  
}