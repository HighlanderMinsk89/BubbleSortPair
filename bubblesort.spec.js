// describe('', () => {
//   it('', () => {
//     expect().toEqual();
//   })
// })

// beforeAll(() => {
//   spyOn(window, 'swap').and.callThrough();
// })

describe('Bubble Sort', () => {
  beforeEach(() => {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
  it('number of swap calls', () => {
    bubbleSort([1, 2, 3, 5, 4]);
    expect(swap.calls.count()).toEqual(1);
  });
  it('number of compare calls', () => {
    bubbleSort([1, 2, 3, 5, 4]);
    expect(compare.calls.count()).toEqual(8);
  });

  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts properly', () => {
    expect(bubbleSort([7, 1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([3, 4, 2, 1, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
