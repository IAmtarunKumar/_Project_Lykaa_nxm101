let url = "https://red-tasty-turtle.cyclic.app"

    let form = document.querySelector("#form1")
    console.log(form)
    form.addEventListener("submit",(event)=>{
        event.preventDefault()

        let obj = {
            "image" : form.image.value,
            "title" : form.title.value ,
            "price" : form.price.value ,
            "discount" : form.discount.value ,
            "category" : form.category.value ,
            "rating" : form.rating.value ,
            "stock" : form.stock.value ,
            "brand" : form.brand.value 
        }
    console.log(obj)
    let newobj = {}
    for(let item in obj){
        if(obj[item] !== ""){
            console.log(item)
            newobj[item] = obj[item]
        }
    }
    console.log(newobj)
update_product(newobj)

 setTimeout(() => {
    window.location.href = "admin.html"  
 }, 2000); 



    })




    /* // update  */

    let update_product = async (newobj) => {
        let a =JSON.parse(localStorage.getItem("updateid"))
    console.log(typeof a)
    try {
      let res = await fetch(`${url}/posts/update/${a}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify(newobj),
      });
      if (res) {
        let data = await res.json();
       
        console.log(data)
        
        /* // appendData(data) */
        /* // console.log(data.token) */
        alert("Updated");
      }
    } catch (error) {
      alert("Something Went Wrong");
      console.log(error)
    }
  };

/* //////////////////////////////////////////////////////////// */
  /* //show id data  */

  let show_product = async () => {
        let a =JSON.parse(localStorage.getItem("updateid"))
    console.log(typeof a)
    try {
      let res = await fetch(`${url}/posts/findbyid/${a}`, {
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
       
        console.log(data,)
        /* // appendData(data) */
        /* // console.log(data.token) */
         appendData(data)
        // alert("Updated");
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
            <span>Rating : ${item.rating}</span>   &nbsp &nbsp &nbsp                 <span>(${item.stock})</span><br>
            

        `
        
        
        alldata.append(div)
    })
}
