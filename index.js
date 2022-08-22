function writeCards(name, event){
    let message =[];
    for(let c=0;c<name.length; c++){
    message.push(`Thank you, ${name[c]}, for the wonderful ${event} gift!`)
    }
    return message;
}
console.log(writeCards(["Guadalupe","Ollie","Aki"],"surprise"));
function countDown(number){
    while(number >=0){
        console.log(number);
        number--;
    }
}
