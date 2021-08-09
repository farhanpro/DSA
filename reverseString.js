sentance = "Hii my name is Farhan";

function reverse(str){
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Hmm thats not good"
    }
    const backward =[];
    const totalItems = str.length -1;
    for (let i = totalItems;i>=0;i--){
        backward.push(str[i]);
    }
    console.log(backward);
    return backward.join('');
}
console.log(reverse(sentance));