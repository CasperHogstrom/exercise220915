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

    obj = {};
    
        for(var i = 0; i < words.length; i++) {
            if (obj[words[i]] == undefined) {
                obj[words[i]] = 1;
            } else {
                obj[words[i]]++;
            }
        }

    Object.values(obj).forEach((freq, word) => console.log(`${words[word]} ${freq}`));
}