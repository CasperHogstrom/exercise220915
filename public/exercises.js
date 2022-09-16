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
    var textBoxValue = document.getElementById('txt').value;
    const whitespaceRemove = textBoxValue.replace(/\s/g, '');
    const letters = whitespaceRemove.split('');

    freq = [];
    
        letters.forEach((letter) => {
            if (freq[letter] == undefined) {
                freq[letter] = 1;
            } else {
                freq[letter]++;
            }
        });

        for (const letterFreq in freq) {
            console.log(`${letterFreq}: ${freq[letterFreq]}`);
        };
    }

    function exercise5() {
        var textBoxValue = document.getElementById('txt');
        const leetAlphabet = new Map([['a', '4'], ['j', '_)'], ['e', '3'], ['h', '|-|'], ['g', '6'], ['t', '+'], ['r', '|2'], ['c', '('], ['s', '5'], ['p', '|>']]);

        text = textBoxValue.value.toLowerCase();

        for( i = 0; i < text.length; i++) {
            if (leetAlphabet.get(text[i])){
                text = text.replace(text[i], leetAlphabet.get(text[i]))
            }
        };

        console.log(text);
    }