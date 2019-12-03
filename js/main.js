(function (){
    const FizzBuzzGrid = {
        go(){
            document.documentElement.classList.add('js-enabled');
            this.fizzbuzz = document.getElementById('fizzbuzz');

            this.boucle();


        },
        boucle() {
            for (var i = 1; i <= 100; i++) {
                if (i % 5 == 0 && i % 3 == 0) {
                    //console.log(i + ' FizzBuzz');
                    this.fizzbuzz.insertAdjacentHTML('beforeend', `<li>FI<i>zz</i>BU<i>zz</i></li>`);
                } else if (i % 5 == 0 && i % 3 == 1) {
                    //console.log( i + ' Buzz');
                    this.fizzbuzz.insertAdjacentHTML('beforeend', `<li>BU<i>zz</i></li>`);
                } else if (i % 3 == 0) {
                    //console.log(i + ' Fizz');
                    this.fizzbuzz.insertAdjacentHTML('beforeend', `<li>FI<i>zz</i></li>`);
                } else {
                    //console.log(i);
                    this.fizzbuzz.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
                }
            }
            const lists = document.querySelectorAll('li');
            for(let list of lists){
                if (list.textContent === "FIzz"){
                    list.classList.add('fizz');
                } else if (list.textContent === "BUzz"){
                    list.classList.add('buzz');
                } else if (list.textContent === "FIzzBUzz"){
                    list.classList.add('fizzbuzz');
                }
            }
        }
    };

FizzBuzzGrid.go();
})();
/*
 ------ FIZZ BUZZ TD --------
console.log('Voici les chiffres de 1 à 100 : ');
console.log(fizzbuzz);
for (var i = 1; i <= 100 ; i++) {
    if (i%5 == 0 && i%3 == 0){
        //console.log(i + ' FizzBuzz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>FizzBuzz</li>`);
    } else if (i%5 == 0 && i%3 == 1) {
        //console.log( i + ' Buzz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>Buzz</li>`);
    } else if (i%3==0) {
        //console.log(i + ' Fizz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>Fizz</li>`);
    } else {
        //console.log(i);
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
};

------ FIZZ BUZZ SANS OBJECT ------
document.documentElement.classList.add('js-enabled');


const fizzbuzz = document.getElementById('fizzbuzz');



console.log('Voici les chiffres de 1 à 100 : ');
console.log(fizzbuzz);
for (var i = 1; i <= 100 ; i++) {
    if (i%5 == 0 && i%3 == 0){
        //console.log(i + ' FizzBuzz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>FI<i>zz</i>BU<i>zz</i></li>`);
    } else if (i%5 == 0 && i%3 == 1) {
        //console.log( i + ' Buzz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>BU<i>zz</i></li>`);
    } else if (i%3==0) {
        //console.log(i + ' Fizz');
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>FI<i>zz</i></li>`);
    } else {
        //console.log(i);
        fizzbuzz.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    }
};


const lists = document.querySelectorAll('li');
for(let list of lists){
        if (list.textContent === "FIzz"){
            list.classList.add('fizz');
            console.log(list.textContent);
        } else if (list.textContent === "BUzz"){
            list.classList.add('buzz');
    } else if (list.textContent === "FIzzBUzz"){
            list.classList.add('fizzbuzz');
        }
        ;
}
*/