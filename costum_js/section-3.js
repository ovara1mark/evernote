const bQuote =[
    {
        img: "./assets/forbes-active.png",
        bQuote1 : "\"Evernote is a powerful tool that can help executives, entrepreneurs and creative people capture and arrange their ideas. All you have to do is use it.\"",
        bQuote2 : "— Forbes"
    },
    {
        img: "./assets/logo-inc-active.png",
        bQuote1 : "\"Evernote is a powerful tool for managing your tasks right alongside all of the information you work with every day.\"",
        bQuote2 : "— Inc. Magazine"
    },
    {
        img: "./assets/the-verge_active.png",
        bQuote1 : "\"It feels like there are endless ways to use Evernote… Use it for school, work, life, and beyond.\"",
        bQuote2 : "— The Verge"
    },
    {
        img: "./assets/entrepreneur-magazine_active.png",
        bQuote1 : "\"I finally decided to embrace the cloud and download Evernote. Since then, I haven’t looked back.\"",
        bQuote2 : "— Entrepreneur Magazine"
    },
    {
        img: "./assets/business-active.png",
        bQuote1 : "\"You can even send emails to Evernote and gather all of the things you need in a single place.\"",
        bQuote2 : "— Business.com"
    },
    {
        img: "./assets/well-good_active.png",
        bQuote1 : "\"Consider Evernote to be your go-to hub for not just to-do lists but all of your notes. The organizational possibilities are expansive, and everything syncs across all of your devices that have the app enabled, so you’ll never miss a beat.\"",
        bQuote2 : "— Well + Good"
    },
]
const blockQuoteDiv = document.getElementById("block-quote-div");
const quoteImgIndicator = document.getElementById("quote-img-indicator");
const quoteBtn = document.getElementsByClassName("combo");
const quoteBtn1 = document.getElementsByClassName("combo1");
const blockQuote1 = document.createElement("blockquote");
const blockQuote2 = document.createElement("blockquote");
const quoteImg = document.createElement("img");
let num = 0;
let num1= 0;
let num2 = 0;


    blockQuoteDiv.appendChild(blockQuote1);
    blockQuoteDiv.appendChild(blockQuote2);
    blockQuoteDiv.appendChild(quoteImg);

    blockQuote1.classList.add("blockquote1")
    blockQuote2.classList.add("blockquote2")
    quoteImg.classList.add("quote-img")


   

   
    
  

setInterval(() => {
    blockQuote1.innerText = bQuote[num++].bQuote1
    if (num > bQuote.length-1 ){
        num = 0
        
    }

}, 3000);

setInterval(() => {

    for (let num1 = 0; num1 < bQuote.length; num1++) {
       
        quoteBtn[num1].classList.remove("img-active")
        
    }quoteBtn[num1].classList.add("img-active")

    blockQuote2.innerText = bQuote[num1++].bQuote2
    if (num1 > bQuote.length-1 ){
        num1 = 0
        
    }
   
}, 3000);

setInterval(() => {

    for (let num2 = 0; num2 < bQuote.length; num2++) {
        quoteBtn1[num2].classList.remove("btn-active")
        
    }quoteBtn1[num2].classList.add("btn-active");
   

    
    quoteImg.src = bQuote[num2++].img
    if (num2 > bQuote.length-1 ){
        num2 = 0
        
    }
    
}, 3000);


quoteBtn[0].onclick= function(){

    blockQuote1.innerText = bQuote[0].bQuote1
    blockQuote2.innerText = bQuote[0].bQuote2
    
    for (let i = 0; i < 4; i++) {
       
        quoteBtn[i].classList.remove("img-active")
        
    }
    this.classList.add("img-active")
}
quoteBtn[1].onclick= function(){

    blockQuote1.innerText = bQuote[1].bQuote1
    blockQuote2.innerText = bQuote[1].bQuote2
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("img-active")
        
    }this.classList.add("img-active")
}
quoteBtn[2].onclick= function(){

    blockQuote1.innerText = bQuote[2].bQuote1
    blockQuote2.innerText = bQuote[2].bQuote2
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("img-active")
        
    }this.classList.add("img-active")
}
quoteBtn[3].onclick= function(){

    blockQuote1.innerText = bQuote[3].bQuote1
    blockQuote2.innerText = bQuote[3].bQuote2
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("img-active")
        
    }this.classList.add("img-active")
}
quoteBtn[4].onclick= function(){

    blockQuote1.innerText = bQuote[4].bQuote1
    blockQuote2.innerText = bQuote[4].bQuote2
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("img-active")
        
    }this.classList.add("img-active")
}
quoteBtn[5].onclick= function(){

    blockQuote1.innerText = bQuote[5].bQuote1
    blockQuote2.innerText = bQuote[5].bQuote2
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("img-active")
        
    }this.classList.add("img-active")
}

quoteBtn1[0].onclick= function(){

    blockQuote1.innerText = bQuote[0].bQuote1
    blockQuote2.innerText = bQuote[0].bQuote2
    quoteImg.src = bQuote[0].img

    for (let i = 0; i < 4; i++) {
        quoteBtn1[i].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
quoteBtn1[1].onclick= function(){

    blockQuote1.innerText = bQuote[1].bQuote1
    blockQuote2.innerText = bQuote[1].bQuote2
    quoteImg.src = bQuote[1].img
    
    for (let i = 0; i < 4; i++) {
        quoteBtn1[i].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
quoteBtn1[2].onclick= function(){

    blockQuote1.innerText = bQuote[2].bQuote1
    blockQuote2.innerText = bQuote[2].bQuote2
    quoteImg.src = bQuote[2].img
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
quoteBtn1[3].onclick= function(){

    blockQuote1.innerText = bQuote[3].bQuote1
    blockQuote2.innerText = bQuote[3].bQuote2
    quoteImg.src = bQuote[3].img
    
    for (let i = 0; i < 4; i++) {
        quoteBtn1[i].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
quoteBtn1[4].onclick= function(){

    blockQuote1.innerText = bQuote[4].bQuote1
    blockQuote2.innerText = bQuote[4].bQuote2
    quoteImg.src = bQuote[4].img
    
    for (let i = 0; i < 4; i++) {
        quoteBtn1[4].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
quoteBtn1[5].onclick= function(){

    blockQuote1.innerText = bQuote[5].bQuote1
    blockQuote2.innerText = bQuote[5].bQuote2
    quoteImg.src = bQuote[5].img
    
    for (let i = 0; i < 4; i++) {
        quoteBtn[i].classList.remove("btn-active")
        
    }this.classList.add("btn-active")
}
