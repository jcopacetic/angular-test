import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import { LoadName, NameLoaded } from './name.actions';
import { NameEffects } from './name.effects';
import { NameFacade } from './name.facade';
import {
  NameState,
  Entity,
  initialState,
  reducer
} from './name.reducer';
import { nameQuery } from './name.selectors';

interface TestSchema {
  name: NameState;
}

describe('NameFacade', () => {
  let facade: NameFacade;
  let store: Store<TestSchema>;
  const createName = (id: string, name?: string): Entity => ({
    id,
    name: name || `name-${id}`
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('name', reducer, { initialState }),
          EffectsModule.forFeature([NameEffects])
        ],
        providers: [NameFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(NameFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allName$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.loadAll();

      list = await readFirst(facade.allName$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `NameLoaded` to manually submit list for state management
     */
    it('allName$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allName$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(new NameLoaded([
        createName('AAA'),
        createName('BBB')
      ]));

      list = await readFirst(facade.allName$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});