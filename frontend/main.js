let url = "https://red-tasty-turtle.cyclic.app"


// sliding image start
function one(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/a27a19c9-e369-428b-98f6-0bb26c44a93f.jpg?tr=w-1200,cm-pad_resize"
}
function two(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/62822ca6-65c9-4ae0-af25-6a8124574e0c.jpg?tr=w-1200,cm-pad_resize"
}
function three(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg?tr=w-1200,cm-pad_resize"
}
function four(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/c118419f-32dc-4a2d-8df9-e8d14c4c9ed2.jpg?tr=w-1200,cm-pad_resize"
}
function five(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/1ff95861-12d2-485e-8334-65f4fd7f4746.jpg?tr=w-1200,cm-pad_resize"
}

function six(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/1ff95861-12d2-485e-8334-65f4fd7f4746.jpg?tr=w-1200,cm-pad_resize"
}

function seven(){
    document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/62822ca6-65c9-4ae0-af25-6a8124574e0c.jpg?tr=w-1200,cm-pad_resize"
}

setInterval(one,2000)
setInterval(two,4000)
setInterval(three,6000)
setInterval(four,8000)
setInterval(five,10000)
setInterval(six,12000)
setInterval(seven,14000)

//sign
let sign =document.querySelector("#sign")
sign.addEventListener("click",()=>{
	// console.log("working")
	window.location.href="login.html"
})

// product slider

let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}
    
    // slider end 

