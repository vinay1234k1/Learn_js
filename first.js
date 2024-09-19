const width = 7;  // Width of the rectangle
const height = 4;

for (let i = 0; i < height; i++) {
    let row = ''; 
    for (let j = 0; j < width; j++) {
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            row += '*';
        } else {
            row += ' '; 
        }
    }
    console.log(row); 
}
