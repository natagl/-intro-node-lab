class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item); //adding 1 item into an array
    this.items.sort((a, b) => a - b); //sorting an array in ascending order
    this.length = this.items.length; //updating the lenght
  }

  get(pos) {
    // will get the value at index pos in the list
    if (!this.items[pos]) {
      throw new Error("Obvnnfnf");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => b - a);
      return Math.min(...this.items);
    }
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    } else {
      var sum = this.items.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    }
    return sum / this.items.length;
  }
}

module.exports = SortedList;
