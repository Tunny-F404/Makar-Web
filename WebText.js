function addNumber(num){
  console.log('prototype-makar');
  this.num = num;
  return num++;

};

console.log(addNumber.prototype);