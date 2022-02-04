var result=document.querySelector('.vote');
let BJP=0;
let AAP=0;
let SP=0;
let BSP=0;
let Congress=0;
function count(button){
    
    if(button == bjp){
        BJP+=1;
        console.log("Bhartiya Janta Party get "+BJP+" votes.");
    }else if(button == sp){
        SP+=1;
        console.log("Samajwadi Party gets "+SP+" votes.");
    }else if(button == bsp){
        BSP+=1
        console.log("Bahujan Samaj Party gets "+BSP+" votes.");
    }else if(button == congress){
        Congress+=1;
        console.log("Indian Nation Congress gets "+Congress+" votes");
}else if(button == aap){
    AAP+=1;
console.log("Aam Aadmi Party gets "+AAP+" votes.");
}else  if (button == submit){
    document.write("Bhartiya Janta Party get "+BJP+" votes.<br><br>");
    document.write("Samajwadi Party gets "+SP+" votes.<br><br>"); 
    document.write("Bahujan Samaj Party gets "+BSP+" votes.<br><br>"); 
    document.write("Indian Nation Congress gets "+Congress+" votes<br><br>");
    document.write("Aam Aadmi Party gets "+AAP+" votes.<br><br>"); 
    document.write("Total number of votes is "+(BJP+SP+BSP+Congress+AAP)+"<br></br>");
    if(BJP>SP && BJP>BSP && BJP>Congress && BJP>AAP){
        document.write("BJP wins the election and rule for another five years under CM Yogi Adityanath.<br><br>Jai Shree Ram");
    }else if( SP>BSP && SP>Congress && SP>AAP){
        document.write("Cycle wale jeet gaye h ab gaya UP phrr 10 saal piche.<br><br> Gundaraj Part-3");
    }else if(BSP>Congress && BSP>AAP){
        document.write("Hathi vali aunty jeet gayi h ab pure UP me har jagah hathi dikhega<br><br>State Animal-Hathi(Elephant nhi h be)")
    }else if(Congress>AAP){
        document.write("Ab har ghar me aalo ke badle sona milega or ab UP me bhi sasti milegi zameen(sirf Vadra ko).<br><br>Available for supporting role only")
    }else{
        document.write("Delhi me to sbka kaata hi hai ab yaha bhi muft ke naam pe jeb bhar leta hu jee or phrr ek hi line bolni h Modi ji hume kaam nhi krne de rhe h.<br><br>Jhadu(cleaning ke liye samje kya pura up budget saaf kr dunga)")
    }

    }

}



