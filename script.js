




let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","mail");
input.setAttribute("placeholder","enter the email for validation")
// input.style.marginLeft="450px";
// document.body.append(input);
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

let free_email=document.createElement("div")
    free_email.setAttribute("id","free")
    // free_email.innerHTML=`free_mail:${res1.is_free_email}`

div.append(input,button,free_email);
document.body.append(div);
async function foo(){
    
    // console.log(emailval);

    let usermail=`https://ipgeolocation.abstractapi.com/v1/?api_key=2af1186b40514ee4807f693fbe5c43ee`
    console.log(usermail)

    let result=await fetch(usermail);
        console.log(result)
        res1=await result.json();
        
        console.log(res1)
        // console.log(res1.is_free_email)
        
        for(var key in res1){
            console.log(key);

            console.log(res1[key]);
            var ooops=document.createElement("div");
                ooops.innerHTML=`${key}:${res1[key]}`;
                ooops.style.textAlign="center";
                ooops.style.fontWeight="bold"
                ooops.style.fontSize="30px"
                document.body.append(ooops)
           
        }
        // free_email.innerHTML=`${console.log(key)}`

       // var obj=res1;
        //  for(var i in obj){
        //     console.log(obj[i])
        // }

    // var ooops=document.createElement("div");
    //     ooops.innerHTML=`${console.log(obj[i])}`
    //     free_email.innerHTML=`free_mail:${console.log(obj[i])}`
    //     var ooops=document.createElement("div");
    //     ooops.innerHTML=`${console.log(obj[i])}`
        // let index=res1.
}       