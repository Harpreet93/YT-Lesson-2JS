//IIFE- Immediately Invoked Function Expression
( function(){

 //example of named function to add a event on h2
    let h2;
        function MouseOver() {
            h2.style.color = "blue" ;
            }
            
        function MouseOut() {
            h2.style.color = "black" ;
            }
    
    function start() 
    {
        console.log("App Started");
        //maniuplating the dom
        //for this first u have to define your dom in your code then call it here by giving them space into the memory through the variables.
        let firstHeading= document.getElementById("firstHeading");
        firstHeading.textContent="Good Bye";
        firstHeading.style.fontWeight= " bold";

        //creating new elments in the nodes 
        let mainArea= document.getElementById("mainArea");
        h2= document.createElement("h2");
        h2.setAttribute("class", "display-6");
        h2.textContent= "This is the next section";
        mainArea.appendChild(h2);

        //then  you can manipulate this dom element through different events.
        //this is a example of annonymous function 
        h2.addEventListener("click", () =>
          {  h2.style.color = (h2.style.color == "green") ? "black" : "green"; }
        );

     
    window.addEventListener("mouseover", MouseOver);
    window.addEventListener("mouseout", MouseOut);

      
    }








//this is the syntex to add the event listners 
window.addEventListener("load", start);
})();