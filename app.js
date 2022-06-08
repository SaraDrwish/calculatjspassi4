let display = document.getElementById("disp");
let result = document.getElementById("result");
// let buttons = document.querySelectorAll("button");
let buttons = Array.from(document.querySelectorAll("button") );
let equal = document.querySelector("equal");

buttons.map( button => {
    button.addEventListener("click" , (e) =>{  

       switch(e.target.innerText){
           case 'C' :
               display.innerHTML = " ";
               result.innerHTML="";
               break ;
           case "⇚" :
               if( display.innerHTML){
                display.innerHTML =  display.innerHTML.slice( 0, -1);
               }
               break;
            case '=':
                try{
                    // result.innerText = eval(result.innerText);
                     if(  display.innerText = display.innerText ){
                            result.innerText = eval(display.innerText ) ;
                    }
                 }catch{
                    result.innerText = "erorr!!";
                }
                break;

            default:
               display.innerText += e.target.innerText;
                 
       }

    } );

});

