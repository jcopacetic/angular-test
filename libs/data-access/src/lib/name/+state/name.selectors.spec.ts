import { Entity, NamePartialState } from './name.reducer';
import { nameQuery } from './name.selectors';

describe('Name Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNameId = (it: Entity) => it.id;

  let storeState: NamePartialState;

  beforeEach(() => {
    const createName = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      name: {
        list : [
          createName('PRODUCT-AAA'),
          createName('PRODUCT-BBB'),
          createName('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Name Selectors', () => {
    it('getAllName() should return the list of Name', () => {
      const results = nameQuery.getAllName(storeState);
      const selId = getNameId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedName() should return the selected Entity', () => {
      const result = nameQuery.getSelectedName(storeState) as Entity;
      const selId = getNameId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current "loaded" status', () => {
      const result = nameQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current "error" storeState', () => {
      const result = nameQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});