import {Action} from '@ngrx/store';

export enum NameActionTypes {
  LoadName = '[Name] Load Name',
  NameLoaded = '[Name] Name Loaded',
  NameLoadError = '[Name] Name Load Error'
}

export class LoadName implements Action {
  readonly type = NameActionTypes.LoadName;
}

export class NameLoaded implements Action {
  readonly type = NameActionTypes.NameLoaded;

  constructor(public payload: any) {}
}

export class LoadNameError implements Action {
  readonly type = NameActionTypes.NameLoadError;

  constructor(public payload: any) {}
}

export type NameAction = LoadName | NameLoaded | LoadNameError;

export const fromNameActions = {
  LoadName,
  NameLoaded,
  LoadNameError
};