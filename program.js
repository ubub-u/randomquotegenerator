const body = document.querySelector("body");
const box = document.getElementById('box');
const reset = document.getElementById('reset');
const textdiv = document.getElementById('textdiv');
previousnum = -1;
 
let quotes = [
    {
        quote: 'be yourself; everyone else is already taken',
        source: 'Oscar Wilde',
        year: '1908,',
        citation: 'newyork times.'
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't hanlde me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe"
    },
    {
        quote: "two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: 'Albert Einsten'
    },
    {
        quote: 'A room without books is like a body without a soul.',
        source: 'Marcus Tullius Cicero'
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        source: 'Dr. Seuss'
    },
    {
        quote: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
        source: 'Albert Camus'
    }
    
];

let colors = ['#00203FFF', '#ADEFD1FF', '#2C5F2D', '#97BC62FF', '#0063B2FF', '#9CC3D5FF']



reset.addEventListener('click', function(){
    main();
    changecolors();
})

function main(){
    let randomNumber = Math.floor((Math.random() * quotes.length) + 1) - 1;
    if(randomNumber == previousnum){
        randomNumber = Math.floor((Math.random() * quotes.length) + 1) - 1;
    }
    console.log(randomNumber);

    if(randomNumber == 0){
        textdiv.innerHTML = `<p><strong>${quotes[randomNumber].quote}</strong></p><span> - ${quotes[randomNumber].source}</span><span> ${quotes[randomNumber].year} ${quotes[randomNumber].citation}</span>`;
    } else {
        textdiv.innerHTML = `<p><strong>${quotes[randomNumber].quote}</strong></p><span> - ${quotes[randomNumber].source}</span>`;
    }
    previousnum = randomNumber
}

function changecolors(){
    const randomNumber = Math.floor((Math.random() * colors.length) + 1) - 1;
    body.style.backgroundColor = colors[randomNumber];
    reset.style.backgroundColor = colors[randomNumber];
}

main();
body.style.backgroundColor = '#f98866'