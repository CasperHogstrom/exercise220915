console.log('Hello world');

function exercise1() {
    console.log('Wassaaaaap');
    var textBoxValue = document.getElementById('txt').value;
    const words = textBoxValue.split(' ');
    console.log(words.length);

    words.forEach(word => {
        console.log(`${word} (${word.length})`)
    });
}

function exercise2() {
    var textBoxValue = document.getElementById('txt').value;
    const words = textBoxValue.split(' ');
    const words2 = textBoxValue.split(' ');

    console.log(words.sort((a, b) => b.length - a.length));
    words.forEach(word => {
        console.log(`${word}`)
    });
    
    console.log(words2.reverse());
    words2.forEach(word => {
        console.log(`${word}`)
    });

}

function exercise3() {
    var textBoxValue = document.getElementById('txt').value;
    const words = textBoxValue.split(' ');

    obj = [];
    
        words.forEach((word) => {
            if (obj[word] == undefined) {
                obj[word] = 1;
            } else {
                obj[word]++;
            }
        });


    for (const frequency in obj) {
        console.log(`${frequency}: ${obj[frequency]}`);
    };

    const sortArray = Array.from(Object.keys(obj));
    sortArray.sort((a, b) => obj[a] - obj[b]);

    sortArrayReverse = sortArray.reverse();
    sortArrayReverse.forEach(freq => console.log(`${freq}`))
}

function exercise4() {

}