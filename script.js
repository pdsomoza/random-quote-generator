(() => {
  const quotes = [];
  let quotesPrinted = [];
  
  class Quote {
    constructor(quote, source) {
      this.quote = quote;
      this.source = source;
    } 
  }

  quotes.push(new Quote(
    "There is nothing permanent except change",
    "Heraclitus | Greek Philosopher 544 BC - 483 BC"
  ));
  quotes.push(new Quote(
    "It is better to be feared than loved, if you cannot be both.",
    "Niccolo Machiavelli | Italian - Writer 1469-1527"
  ));
  quotes.push(new Quote(
    "You can't blame gravity for falling in love.",
    "Albert Einstein | German - Physicist 1879-1955"
  ));
  quotes.push(new Quote(
    "I have not failed. I've just found 10,000 ways that won't work.",
    "Thomas A. Edison | American - Inventor 1847-1931"
  ));

  const len = quotes.length;
  const max = len - 1;

  function getRandomQuote(q) {    
    let num = Math.floor(Math.random() * (max + 1));  

    while (quotesPrinted.indexOf(num) !== -1)
      num = Math.floor(Math.random() * (max + 1));
    
    quotesPrinted.push(num);
    if( quotesPrinted.length === len )
      quotesPrinted = []; 
       
    return q[num];
  }

  function getRandomColor() {
    const r = Math.floor(Math.random() * (255 + 0));
    const g = Math.floor(Math.random() * (255 + 0)); 
    const b = Math.floor(Math.random() * (255 + 0));   
    return `rgb(${r},${g},${b})`;
  }

  function printQuote(q) {
    return  `  
      <blockquote>${q.quote}</blockquote>
      <cite>${q.source}</cite>   
    `;
  }  

  function init() {
    document.getElementById('quote-box').innerHTML = printQuote(getRandomQuote(quotes));
    document.body.style.backgroundColor = getRandomColor();
  }

  init();
  setInterval(() => init() ,1500);

})();

