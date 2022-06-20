const intialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const enviro = process.env.NODE_ENV;

for (let index = 0; index < 1000; index++) {
    console.log(index);
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Intial memory usage: ${intialMemoryUsage}`);
console.log(`Your name is ${yourName}`);
console.log(`Environment: ${enviro}`);
console.log(`Current memory usage: ${currentMemoryUsage}`);