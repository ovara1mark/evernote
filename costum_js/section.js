const txts=document.getElementsByClassName('slides');
const heroBtn=document.getElementsByClassName('hero-btn');
txtsLen=txts.length;
let index=0;
const textInTimer=3000,
 textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
txts[i].classList.remove("text-in","text-out");  

}
txts[index].classList.add("text-in");

setTimeout(function(){
 txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

if(index == txtsLen-1){
   index=0;
 }
else{
    index++;
  }
 animateText();
},textInTimer); 
}

window.onload=animateText;

function slidefun(n) {
	
	let i;
	for(i = 0;i<heroBtn.length;i++) {
		heroBtn[i].className = heroBtn[i].className.replace(' active', '');
	}
	if(n > txts.length){
    counter = 1;
    }
 if(n < 1){
    counter = txts.length;
    }
	heroBtn[counter - 1].className += " active";
}

let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 3000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}

function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 3000);
}

