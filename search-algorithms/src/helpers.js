const helpers = {
  binarySearch(array, value, count, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
      return `${count}, not found`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
      return count;
    } else if (item < value) {
      return this.binarySearch(array, value, count + 1, index + 1, end);
    } else if (item > value) {
      return this.binarySearch(array, value, count + 1, start, index - 1);
    }
  },
};
export default helpers;
