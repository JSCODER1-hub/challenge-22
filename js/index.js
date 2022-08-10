// Selecting our main Elements
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

        fetch("../data.json").then(response =>{
            return response.json();
        }).then(jsonData => {
            // let p = JSON.parse(jsonData)
            console.log(jsonData[1].title);
            for(let i =0 ; i <5 ;i++){
            if (card.classList.contains(jsonData[i].title))
            {
                let type = sub.textContent;
                type = type.toString().toLowerCase();
                console.log(type)
                currentHours.innerHTML = jsonData[i]["timeframes"][`${type}`].current;
                prevHours.innerHTML = jsonData[i].timeframes.daily.previous;
                
            }}
           
        })
    })
}
// {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   }