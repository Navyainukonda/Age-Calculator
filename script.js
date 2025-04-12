function updateCurrentTime() {
  const now = new Date();
  document.getElementById("currentTime").innerText = 
    "Current Date & Time: " + now.toLocaleString();
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();


  function setDynamicBackground() {
    const hour = new Date().getHours();
    const body = document.body;

    if (hour >= 5 && hour < 12) {
      body.className = 'morning';
    } else if (hour >= 12 && hour < 18) {
      body.className = 'afternoon';
    } else if (hour >= 18 && hour < 21) {
      body.className = 'evening';
    } else {
      body.className = 'night';
    }
  }

  setDynamicBackground();




let userInput  = document.getElementById("date")

userInput.max = new Date().toISOString().split('T')[0];
let result = document.getElementById('result');

function calculateAge(){
  let birthDate = new Date(userInput.value);

  let d1= birthDate.getDate();
  let m1 = birthDate.getMonth() +1;
  let y1 = birthDate.getFullYear();


  let today = new Date() ;

  let d2= today.getDate();
  let m2 = today.getMonth() +1 ;
  let y2 = today.getFullYear() ;


  let d3,m3,y3

  y3 = y2-y1;
  if(m2>= m1){
    m3 = m2-m1
  } else{
    y3--;
    m3 = 12 + m2 - m1
  }

  if(d2>=d1){
    d3 = d2-d1
  } else{
m3--;
d3 = getDaysInMonth(y1,m1) + d2 - d1
  }

  if(m3<0){
    m3 = 11;
    y3--
  }

result.innerHTML = ` You are ${y3} years, ${m3} months and  ${d3} days old.`  
}


  function getDaysInMonth(year,month){
    return new Date(year, month, 0).getDate()
  

  



}