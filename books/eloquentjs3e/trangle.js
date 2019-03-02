// print a triangle of #
function triangle(rows, character = "#") {
    for (let i = 1; i <= rows; ++i) {
        console.log(Array(i).join(character));
    }
}

triangle(10);