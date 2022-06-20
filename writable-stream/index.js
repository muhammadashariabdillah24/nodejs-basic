const fs = require('fs');


const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const writableStream = fs.createWriteStream('./writable-stream/articles.txt', {
    highWaterMark: 10
});

for (let index = 0; index < text.length; index++) {
    if (index % 10 === 0) {
        writableStream.write(`[${text.split('').slice(index, index + 10).join('')}]\n`);
    }
}