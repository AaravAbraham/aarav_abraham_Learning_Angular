import { PriceTagPipe } from './price-tag.pipe';

describe('PriceTagPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceTagPipe();
    expect(pipe).toBeTruthy();
  });
});
