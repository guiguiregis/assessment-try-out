async function runSequentially(functions) {

  const a = await functions[0]();
  const b = await functions[1]();

  return [a,b];
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
      counter += 1;
      resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;
  