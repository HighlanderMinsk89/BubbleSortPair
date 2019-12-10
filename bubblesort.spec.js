// describe('', () => {
//   it('', () => {
//     expect().toEqual();
//   })
// })

// beforeAll(() => {
//   spyOn(window, 'swap').and.callThrough();
// })

describe('Bubble Sort', () => {
  // it('number of swap calls', () => {
  //   bubbleSort([]);
  //   expect(window.swap.calls.count()).toEqual(1);
  // })
  it('handles an empty array', () => {
    expect( bubbleSort([]) ).toEqual([]);
  })
  it('sorts properly', () => {
    expect( bubbleSort([7,1,2,3,4,5,6]) ).toEqual([1,2,3,4,5,6,7]);
    expect( bubbleSort([5,4,3,2,1]) ).toEqual([1,2,3,4,5]);
    expect( bubbleSort([3,4,2,1,5]) ).toEqual([1,2,3,4,5]);
    expect( bubbleSort([1,2,3,4,5]) ).toEqual([1,2,3,4,5]);
  })
})
