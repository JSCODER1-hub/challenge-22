// Selecting our main Elements
import jsonData from  "../data.json" assert {type: 'json'};
let subscriptions = document.querySelectorAll(".type span");
let cards = document.querySelectorAll(".card");

subscriptions.forEach(sub =>{
    sub.onclick = function(arr){
        subscriptions.forEach(sub =>{sub.classList.remove("active")});
        sub.classList.add("active");    
        
        fetchData(sub);
    }
})


function fetchData(sub){
    cards.forEach(card=>{
        let currentHours = card.querySelector("h1 span");
        let prevHours = card.querySelector("p span");

            for(let i =0 ; i <5 ;i++){
            if (card.classList.contains(jsonData[i].title))
            {
                let type = sub.textContent;
                type = type.toString().toLowerCase();
                currentHours.innerHTML = jsonData[i]["timeframes"][`${type}`].current;
                prevHours.innerHTML = jsonData[i]["timeframes"][`${type}`].previous;
                
            }}
           
        
    })
}
