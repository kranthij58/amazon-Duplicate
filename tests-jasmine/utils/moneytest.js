import {formatCurrency} from '../../scripts/utils/money.js';
describe('Test suite : format currency' , () => {
  it('test case 1 : normal integers', () => {
    expect(formatCurrency(8343)).toEqual('83.43');
  });
  it('test case 2 : floating point cents' , () => {
    expect(formatCurrency(44434.4344)).toEqual('444.34');
  });
  it('test case 3 : zeros' , () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });
});