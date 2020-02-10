
var quotations = [
    'You only live once, but if you do it right, once is enough. - Mae West',
    'In three words I can sum up everything I have learned about life: it goes on. ― Robert Frost',
    'To live is the rarest thing in the world. Most people exist, that is all. ― Oscar Wilde',
    'It is better to be hated for what you are than to be loved for what you are not. ― Andre Gide',
    'It does not do to dwell on dreams and forget to live. ― J.K. Rowling',
    'Everything you can imagine is real. ― Pablo Picasso',
    'Sometimes the questions are complicated and the answers are simple. ― Dr. Seuss',
    'Life is not about finding yourself. Life is about creating yourself. ― George Bernard Shaw',
    'Life is like riding a bicycle. To keep your balance, you must keep moving. ― Albert Einstein',
    'Things change. And friends leave. Life does not stop for anybody. ― Stephen Chbosky',
    'The only way out of the labyrinth of suffering is to forgive. ― John Green' 
]

function call() {
    var randomNumber = Math.floor(Math.random() * (quotations.length));
    document.getElementById('quote').innerHTML = quotations[randomNumber];
}

