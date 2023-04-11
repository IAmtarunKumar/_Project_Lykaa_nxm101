let url = "https://red-tasty-turtle.cyclic.app"

    let form = document.querySelector('form')
    console.log(form)

    form.addEventListener("submit",(event)=>{
    event.preventDefault()
        
    let obj = {
        email : form.email.value,
        password : form.password.value,
        adminId : form.adminId.value
    }
    console.log(obj)
    postdata(obj)
    
    })

let postdata = async (obj)=>{

    try {
        let res = await fetch(`${url}/users/admin`,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        if(res){
            let data = await res.json()
            alert(data.msg)
            // save token in localStorage
            console.log(data.token)
            localStorage.setItem("token" , data.token)

            if(data.msg==="login"){

            window.location.href="admin.html"
            }
        }
    } catch (error) {
        alert("Something Went Wrong")
        
    }
}


