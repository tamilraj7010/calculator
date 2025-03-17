function cleardisplay(){
    document.getElementById("display").value="";
}
function addnumber(input){
    document.getElementById("display").value +=input;
}
function deletechar(){
    var last_digit=document.getElementById("display").value;
    document.getElementById("display").value=last_digit.slice(0,-1);
}
function result(){
    try{
        let result=eval(document.getElementById("display").value);
        document.getElementById("display").value=result;
    }
    catch(a){
        document.getElementById("display").value="Error";
    }
}