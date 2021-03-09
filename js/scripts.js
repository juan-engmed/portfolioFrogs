const el = document.querySelector('.container');

const text = "Olá Lucas, bem-vindo ao Portfólio da Frog's Tech";

const interval = 200;

const showText = (el, text, interval) => {

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer);
        }

        const nextLetter = char.pop();

        el.innerHTML += nextLetter;

        
    }, interval);


}

showText(el,text, interval);