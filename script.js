class Quote {
  constructor(quote, source) {
    this.quote = quote;
    this.source = source;
  } 
}

var nums = [];
const Quotes = [];
Quotes.push(new Quote(
  "There is nothing permanent except change",
  "Heraclitus | Greek Philosopher 544 BC - 483 BC"
));
Quotes.push(new Quote(
  "It is better to be feared than loved, if you cannot be both.",
  "Niccolo Machiavelli | Italian - Writer 1469-1527"
));
Quotes.push(new Quote(
  "You can't blame gravity for falling in love.",
  "Albert Einstein | German - Physicist 1879-1955"
));
Quotes.push(new Quote(
  "I have not failed. I've just found 10,000 ways that won't work.",
  "Thomas A. Edison | American - Inventor 1847-1931"
));

setInterval(function(){
  document.getElementById('quote-box').innerHTML = printQuote(getRandomQuote(Quotes));
},1500);

function getRandomQuote(q) {  
  const len = q.length;
  const max = len - 1;
  let num = Math.floor(Math.random() * (max + 1));  

  while (nums.indexOf(num) !== -1){
    num = Math.floor(Math.random() * (max + 1));
    if( nums.length === len )
      nums = [];  
  }
  
  nums.push(num);
  return q[num];
}

function printQuote(q) {
  return  `  
    <blockquote>${q.quote}</blockquote>
    <cite>${q.source}</cite>   
  `;
}  

