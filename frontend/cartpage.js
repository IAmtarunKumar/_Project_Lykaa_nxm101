let url = "https://red-tasty-turtle.cyclic.app"


// sliding image start
function one(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/8358a13e-bd79-4365-8dfc-8545beddccf3.jpg?tr=w-1200,cm-pad_resize"
}
function two(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/e6866268-c34e-48e0-93e7-44b8f4100eb4.gif?tr=w-1200,cm-pad_resize"
}
function three(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/a5ad9115-e671-4078-a989-db65cf5054fb.jpg?tr=w-1200,cm-pad_resize"
}
function four(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/acea991c-af3f-40d7-9ff2-cd8394df7899.jpg?tr=w-1200,cm-pad_resize"
}
function five(){
  document.querySelector(".slide_image").src="https://images-static.nykaa.com/uploads/8067c238-dfad-4f31-8fbe-b70f6ab712bf.jpg?tr=w-1200,cm-pad_resize"
}




setInterval(one,2000)
setInterval(two,4000)
setInterval(three,6000)
setInterval(four,8000)
setInterval(five,10000)


// product slider end 


//SHOW DATA START

let show_product = async () => {
  // let a =JSON.parse(localStorage.getItem("updateid"))
// console.log(typeof a)
try {
let res = await fetch(`${url}/cart/`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem("token"),
  }
  // ,
  // body: JSON.stringify(newobj),
});
if (res) {
  let data = await res.json();
 
  console.log(data)
  /* // appendData(data) */
  /* // console.log(data.token) */
   appendData(data)
  // alert("WORKING");
}
} catch (error) {
alert("Something Went Wrong");
console.log(error)
}
};

show_product()

/* // append data start  */

function appendData(data) {
let alldata  = document.querySelector("#alldata")
alldata.innerHTML=""
data.forEach((item)=>{
console.log(item)
let alldata  = document.querySelector("#alldata")
 
let div = document.createElement("div")
div.innerHTML=` 
      <img src=${item.image} alt="">
      <br>
      <div>${item.title} </div><br>
      <span>MRP :₹${item.price}</span>       &nbsp &nbsp &nbsp             <span>${item.discount}% Off</span>
      <br>
      <span>Rating : ${item.rating}</span>   &nbsp &nbsp &nbsp                 <span>(${item.stock})</span><br> <br>
      
      <button class="buy" data-id="${item._id}">Buy</button>
        <button class="delete" data-id="${item._id}">delete</button>
  `
  
  
  alldata.append(div)
})


//delete id select
let deletebtn = document.querySelectorAll(".delete")
// console.log(del)
for(let del of deletebtn){
    del.addEventListener("click",()=>{
        let id = del.dataset.id
        console.log(id)
        deleteproduct(id)
    })
}


//buy id select

let buy = document.querySelectorAll(".buy")
// console.log(del)
for(let value of buy){
    value.addEventListener("click",()=>{
        let id = value.dataset.id
        console.log(id)
        buy_product(id)
    })
}


}

//SHOW DATA END



//delete functionality start 

 
let deleteproduct = async (id) => {
  try {
    let res = await fetch(`${url}/cart/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      }
      // ,
      // body: JSON.stringify(obj),
    });
    if (res) {
      let data = await res.json();
     
      console.log(data)
      // appendData(data)
      // console.log(data.token)
      alert("deleted");
    }
  } catch (error) {
    alert("Something Went Wrong");
    console.log(error)
  }
};




//delete functionality start 


//buy functionality start

let buy_product = async (id) => {
  try {
    let res = await fetch(`${url}/cart/buy/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("token"),
      }
      // ,
      // body: JSON.stringify(obj),
    });
    if (res) {
      let data = await res.json();
     
      console.log(data)
      // appendData(data)
      // console.log(data.token)
      // alert("deleted");
      setTimeout(() => {
        window.location.href="payment.html"
      }, 1000);
     
      // alert("payment page")
    }
  } catch (error) {
    alert("Something Went Wrong");
    console.log(error)
  }
};



//but functionality end






