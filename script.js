var na=Math.floor(Math.random() * (60 - 1) + 1);
function comprobar(){
    var nu=document.getElementById("CR7").value;
    if(na==nu){
        alert("SIUUUUUUUUUU ASÍ GANA EL BICHO");
    }else if(na>nu){
        alert("ES MAYOR");
    }else{
        alert("ES MENOR")
    }
}