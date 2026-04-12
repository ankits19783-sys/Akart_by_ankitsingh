function getvalue(){
    let input = String(document.getElementById("input").value);
    let toupperinput = input.toUpperCase();
    if(toupperinput === "SMARTWATCH" || toupperinput === "SMART WATCH"){
        window.location = "smartwatch.html"
    }else if(toupperinput === "CONDOM"){
        window.location = "condom.html"
    }else{
        window.location = "index.html"
    }
}
function getphoto(){
    window.location = "myphoto.html"
}