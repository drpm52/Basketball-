"use strict"
let homeScore = document.querySelector('.home-score-number');
let homeScoreNumber = Number(homeScore.textContent);
let guestScore = document.querySelector('.guest-score-number');
let guestScoreNumber =  Number(guestScore.textContent);
let timer = document.querySelector('.count-down-number');
let period = document.querySelector('.period-number');
let periodNumber =Number( document.querySelector('.period-number').textContent);
let countDownNumber = document.querySelector('.count-down-number');
let resetBtn = document.querySelector('.reset');
 

function homeAdd1(){
  
homeScore.textContent = homeScoreNumber+= 1;
}
function homeAdd2(){
 homeScore.textContent = homeScoreNumber+= 2;
}
function homeAdd3(){
  homeScore.textContent = homeScoreNumber+= 3;
}
function guestAdd1(){
    guestScore.textContent = guestScoreNumber+= 1;
}
function guestAdd2(){
    guestScore.textContent = guestScoreNumber+= 2;
}
function guestAdd3(){
     guestScore.textContent = guestScoreNumber+= 3;
    
}

function changePeriod(){
    if (timer.textContent === "00:00" && Number(period.textContent) < 4)
    
    period.textContent = Number(period.textContent)+ 1;
    else{
       period.textContent = " "; 
    }
        }

function start(){
   
    
    timer.textContent = `12:00`;
   if (Number(period.textContent)>= 0  && Number(period.textContent) <4 ){
       period.textContent = Number(period.textContent)+1;
        countdown();
   } 
   
   
   else{
       
   return
      }
   
    
    
}
function reset(){
    
    homeScore.textContent = 0;
    guestScore.textContent= 0;
    timer.textContent = 0;
    period.textContent = 0;
 
    
    
}
function countdown() {
						let seconds = 12 * 60; // Convert 12 minutes to seconds
					
						
						const timer = setInterval(function() {
                             seconds -=1;
                             
							let minutes = Math.floor(seconds / 60);
							let remainingSeconds = seconds % 60;
                           
                           
						
                            
							// // Format the countdown as mm:ss
							let formattedCountdown = `${minutes}:${remainingSeconds}`
							
							// // Update the textContent of the paragraph element
							countDownNumber.textContent = formattedCountdown;
                            
                            if (remainingSeconds < 10 ){
                                formattedCountdown = `${minutes}:0${remainingSeconds}`;
                              
                                 countDownNumber.textContent = formattedCountdown;}
                                  
                            if (minutes < 10 ){
                                 formattedCountdown = `0${minutes}:${remainingSeconds}`
                                 countDownNumber.textContent = formattedCountdown;
                            }
                            if ( remainingSeconds === 0 && periodNumber <4 )
                            { 
                                periodNumber += 1;
                                period.textContent = periodNumber;
                                clearInterval(timer);
                            }
                           
                             else if (remainingSeconds < 0 && periodNumber=== 4 ){
                                clearInterval(timer);
                                 countDownNumber.textContent = `Game Over`
                             
                                 
                             }
                              
                             } , 1000); // Update every second (1000 milliseconds)
					}
