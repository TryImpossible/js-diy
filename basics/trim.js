String.prototype.trim2 = function() {
  return this.replace(/^\s|\s$/g, '');
}
String.prototype.trim3 = function() {
  let start =0 ;
  let end = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i] == ' ') {
      start = i;
      break;
    }
  }
  for (let i = this.length -1; i > -1; i--) {
    if (this[i] == ' ') {
      end = i;
      break;
    }
  }
  return this.substring(start, end + 1);
}

console.log(' 1 2'.length, ' 1 2'.trim2().length)
console.log('1 2 '.length, '1 2 '.trim2().length)

console.log(' 1 2'.length, ' 1 2'.trim3().length)
console.log('1 2 '.length, '1 2 '.trim3().length)