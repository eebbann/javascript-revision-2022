const btn = document.querySelector('button');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
	{ quote: "popo than the nam", person: "popo" },
	{ quote: "love leads always", person: "love" },
	{ quote: "fear who no fear", person: "kine" }
];

btn.addEventListener('click', ()=>{
  const randomQuotes = Math.floor(Math.random() * quotes.length)
	quote.innerHTML = quotes[randomQuotes].quote;
	person.innerHTML = quotes[randomQuotes].person;
})

