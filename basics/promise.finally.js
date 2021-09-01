Promise.prototype.finally2 = function(callback) {
  return this.then(
    (result) => Promise.resolve(callback()).then(() => result),
    (error) => Promise.resolve(callback()).then(() => {throw error})
  );
}
const delay = (interval) =>
  new Promise((resolve, reject) => setTimeout(() => reject(), interval));

console.log(1);
delay(1000)
  .then(() => {
    console.log(2);
  })
  .catch(() => {
    console.log(22);
  })
  .finally(() => {
    console.log(3);
  });
