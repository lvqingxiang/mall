const test = {
  name: 'a',
  date: new RegExp('\\w+')
}
// debugger
const copyed = JSON.parse(JSON.stringify(test))
test.name = 'test'
//console.error('ddd', test, copyed)；
console.log(copyed)
