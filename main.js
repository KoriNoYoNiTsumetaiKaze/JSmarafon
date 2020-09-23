const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let first = 0;
    for (let i = 0;i<firstRow.length;i++) {
        if (firstRow.charAt(i)=='а') {
            first++;
            }
        }
    let second = 0;
    for (let i = 0;i<secondRow.length;i++) {
        if (secondRow.charAt(i)=='а') {
            second++;
            }
        }
    if (first>second) {
            return firstRow;
        }
    return secondRow;
}

console.log(getRow(firstRow, secondRow));
