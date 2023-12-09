import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NAME_FEATURE_KEY, NameState } from './name.reducer';

// Lookup the 'Name' feature state managed by NgRx
const getNameState = createFeatureSelector<NameState>(NAME_FEATURE_KEY);

const getLoaded = createSelector( getNameState, (state:NameState) => state.loaded );
const getError = createSelector( getNameState, (state:NameState) => state.error );

const getAllName = createSelector( getNameState, getLoaded, (state:NameState, isLoaded) => {
  return isLoaded ? state.list : [ ];
});
const getSelectedId = createSelector( getNameState, (state:NameState) => state.selectedId );
const getSelectedName = createSelector( getAllName, getSelectedId, (name, id) => {
  const result = name.find(it => it['id'] === id);
  return result ? Object.assign({}, result) : undefined;
});

export const nameQuery = {
  getLoaded,
  getError,
  getAllName,
  getSelectedName
};