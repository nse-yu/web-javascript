window.onload = () => {
    console.log("onload");

    document.querySelector("input[type='submit']").classList.toggle("form-btn");
    document.querySelector("input[type='text']").classList.toggle("form-text");
    document.getElementsByTagName("form")[0].addEventListener("submit",evt => evt.preventDefault());
    
    function sendData(){
        confirm("送信しますか？");
        
        
        let req = null;
        if(window.XMLHttpRequest){
            req = new XMLHttpRequest();
        }

        req.onreadystatechange = () => {
            if(req.readyState === 4 && req.status === 200){
                let data = document.createElement("p");
                data.append(document.createTextNode(req.responseText));
                document.querySelector(".canvas").append(data);
                document.getElementById("status").innerHTML = "<b style='color:green'>completed!!</b>"
            }else{
                document.getElementById("status").innerHTML = "<b style='color:red'>waiting...</b>";
            }
        }
        
        if(req){
            req.open("GET","http://localhost:8080/submit?param="+encodeURI(document.querySelector("input[type='text']").value),true);
            req.send(null);
            document.querySelector("input[type='text']").value = "";
        }
        
        return false;
    }
    document.getElementsByTagName("form")[0].onsubmit = sendData;
}
