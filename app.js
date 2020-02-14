
var quotations = [
    'You only live once, but if you do it right, once is enough. </br> - Mae West',
    'In three words I can sum up everything I have learned about life: it goes on.</br> ― Robert Frost',
    'To live is the rarest thing in the world. Most people exist, that is all.</br> ― Oscar Wilde',
    'It is better to be hated for what you are than to be loved for what you are not.</br> ― Andre Gide',
    'It does not do to dwell on dreams and forget to live.</br> ― J.K. Rowling',
    'Everything you can imagine is real.</br> ― Pablo Picasso',
    'Sometimes the questions are complicated and the answers are simple.</br> ― Dr. Seuss',
    'Life is not about finding yourself. Life is about creating yourself.</br> ― George Bernard Shaw',
    'Life is like riding a bicycle. To keep your balance, you must keep moving.</br> ― Albert Einstein',
    'Things change. And friends leave. Life does not stop for anybody.</br> ― Stephen Chbosky',
    'The only way out of the labyrinth of suffering is to forgive.</br> ― John Green' 
]

function call() {
    var randomNumber = Math.floor(Math.random() * (quotations.length));
    document.getElementById('quote').innerHTML = quotations[randomNumber];
}

