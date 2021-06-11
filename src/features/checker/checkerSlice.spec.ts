import checkerReducer, {
  CheckerState,
  setId,
} from './checkerSlice';

describe('checker reducer', () => {
  const initialState: CheckerState = {
    id: '',
  };
  it('should handle initial state', () => {
    expect(checkerReducer(undefined, { type: 'unknown' })).toEqual({
      id: '',
    });
  });

  it('should handle set id', () => {
    const actual = checkerReducer(initialState, setId('test'));
    expect(actual.id).toEqual('test');
  });
});
