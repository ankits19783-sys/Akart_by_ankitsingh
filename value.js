function getvalue(){
    let input = String(document.getElementById("input").value);
    let toupperinput = input.toUpperCase();
    if(toupperinput === "SMARTWATCH" || toupperinput === "SMART WATCH"){
        window.location = "smartwatch.html"
    }else if(toupperinput === "CONDOM"){
        window.location = "condom.html"
    }else{
        console.log("NOTHING")
    }
}
function getphoto(){
    window.location = "myphoto.html"
}