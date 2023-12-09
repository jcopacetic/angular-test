import { NameLoaded } from './name.actions';
import { NameState, Entity, initialState, reducer } from './name.reducer';

describe('NameReducer', () => {
  const getNameId = (it: Entity) => it.id;
  const createName = (id: string, name = ''): Entity => ({
    id,
    name: name || `name-${id}`
  });

  describe('valid Name actions', () => {
    it('should return the list of known Name', () => {
      const name = [createName('PRODUCT-AAA'), createName('PRODUCT-zzz')];
      const action = new NameLoaded(name);
      const result: NameState = reducer(initialState, action);
      const selId: string = getNameId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});