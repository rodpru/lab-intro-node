class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }
  
  add(item) {
    this.items.push(item); 
    this.items.sort((a, b) => { 
      return a -b;
    });
    this.length = this.items.length;
  }
  
  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos];
    }

  }
  
  max() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      let max = this.items.reduce((a,b) => {
        return Math.max(a, b);
      })
      return max;
    }

  }
  
  min() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      let min = this.items.reduce((a,b) => {
        return Math.min(a, b);
      })
      return min;
    }

  }
  
  sum() {
    if (this.items.length <= 0) {
      return 0;
    } else {
      let sum = this.items.reduce((a,b) => {
        return a+b;
      },0)
      return sum;
    }

  }
  
  avg() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      let avg = this.sum() / this.items.length 
      return avg;
    }

  }
}
console.log('this.length')

module.exports = SortedList;
