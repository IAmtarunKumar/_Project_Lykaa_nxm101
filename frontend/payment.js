let form = document.querySelector("form")
console.log(form)
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    alert("THANK YOU YOUR ORDER IS PLACED")
    setTimeout(() => {
        
        window.location="product.html"
    }, 2000);
})