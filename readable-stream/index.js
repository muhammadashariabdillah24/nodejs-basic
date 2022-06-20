const fs = require('fs');

const readableStream = fs.createReadStream('./readable-stream/article.txt', {
    highWaterMark: 10
});

readableStream.on('open', () => {
    console.log('open');
})

readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log('Data Tidak Dibaca');
    }
});

readableStream.on('end', () => {
    console.log('Data Selesai');
})