const body = document.querySelector("body");
const box = document.getElementById('box');
const reset = document.getElementById('reset');
 
let quotes = [
    {
        quote: 'be yourself; everyone else is already taken',
        source: 'Oscar Wilde'
    },
    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't hanlde me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe"
    },
    {
        quote: "two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: 'Albert Einsten'
    }
    
];

reset.addEventListener('click', function(){
    program();
})

function program(){
    const randomNumber = Math.floor((Math.random() * quotes.length) + 1) - 1;
    console.log(randomNumber);

    box.innerHTML = `<p><strong>${quotes[randomNumber].quote}</strong></p><span> - ${quotes[randomNumber].source}</span>`;
}

program();