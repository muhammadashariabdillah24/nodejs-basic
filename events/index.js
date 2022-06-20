const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

const nameEventListener = (name) => {
    console.log(`Your Name is ${name}`);
}

myEventEmitter.on('name', nameEventListener);

myEventEmitter.emit('name', 'Dudu');






/* Menjalankan event dengan fungsi handle  */

// const callMyFriend = (friend) => {
//     console.log(`I: Tutt.... Tutttt.... Tutttt, is Calling: ${friend}`);
// }

// const myFriend = (answer) => {
//     console.log(`My Friend: Hello ${answer}`);
// }

// const callHandler = ({ friend, answer }) => {
//     callMyFriend(friend);
//     myFriend(answer);
// }

// myEventEmitter.on('call', callHandler);

// // Memicu event 'coffe-order' terjadi]
// myEventEmitter.emit('call', { friend: 'Teddy', answer: 'Friend, Is There Anything I Can Help You' });



/* Menjalankan 1 atau lebih event */

// const makeCoffe = ({ name }) => {
//     console.log(`Making a cup of ${name}`);
// }

// const makeBill = ({ price }) => {
//     console.log(`Making a bill of ${price}`);
// }

// myEventEmitter.on('coffe-order', makeCoffe);
// myEventEmitter.on('coffe-order', makeBill);


// // Memicu event 'coffe-order' terjadi]
// myEventEmitter.emit('coffe-order', { name: 'Latte', price: '$5000 USD' });