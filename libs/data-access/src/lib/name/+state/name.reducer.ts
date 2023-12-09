import { NameAction, NameActionTypes } from './name.actions';

export const NAME_FEATURE_KEY = 'name';

/**
 * Interface for the 'Name' data used in
 *  - NameState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */
export interface Entity {
  id: string;
  name: string;
}

export interface NameState {
  list: Entity[]; // list of Name; analogous to a sql normalized table
  selectedId?: string | number; // which Name record has been selected
  loaded: boolean; // has the Name list been loaded
  error?: any; // last none error (if any)
};

export interface NamePartialState {
  readonly [NAME_FEATURE_KEY]: NameState;
}

export const initialState: NameState = {
  list: [],
  loaded: false
};

export function reducer(
  state: NameState = initialState, 
  action: NameAction): NameState
{
  switch (action.type) {
    case NameActionTypes.NameLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}