
let url = "https://red-tasty-turtle.cyclic.app"

    let form = document.querySelector('form')
    console.log(form)

    form.addEventListener("submit",(event)=>{
    event.preventDefault()
        
    let obj = {
        email : form.email.value,
        password : form.password.value
    }
    console.log(obj)
    postdata(obj)
    
    })

let postdata = async (obj)=>{

    try {
        let res = await fetch(`${url}/users/login`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        if(res){
            let data = await res.json()
            alert(data.msg)
            localStorage.setItem("token" , data.token)
            localStorage.setItem("username", data.name)

            if(data.msg === "login successful"){
            setTimeout(() => {
                
                window.location.href="index.html"  
            }, 1000);

        }
        }
    } catch (error) {
        alert("Something Went Wrong")
        
    }
}


