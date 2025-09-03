        //   First method
// let timer_display = document.querySelector(".timer_display");
// let startBtn = document.getElementById("start");
// let pauseBtn = document.getElementById("pause");
// let resetBtn = document.getElementById("reset");

// let msec  = 0o0;
// let secs = 0o0;
// let mins = 0o0;
// let hrs= 0o0;

// let timerId = null;

// startBtn.addEventListener("click", function(){
//     if(timerId !==null){
//         clearInterval(timerId);
//     } 
//     timerId=setInterval(startTimer, 10);
// });
// pauseBtn.addEventListener("click", function(){
//     clearInterval(timerId);
// });
// resetBtn.addEventListener("click", function(){
//     clearInterval(timerId);
//     timer_display.innerHtml = "00:00:00:00";
// });


// function startTimer(){
//     msec++;
//     if(msec == 1000){
//         msec=0;
//         secs++;
//         if(secs == 60){
//             secs=0;
//             mins++;
//             if(mins == 60){
//                 mins=0;
//                 hrs++;
//             }
//         }
//     }
//     let msecString = msec < 10 ? '0$(msec)': msec;
//     let secsString = msec < 10 ? '0$(secs)': secs;
//     let minsString = mins < 10 ? '0$(mins)': mins;
//     let hrsString = hrs < 10 ? '0$(hrs)': hrs;

 
//     if(msec<10){
//         msecString = '0${msec}';
//     }
//     else{
//         msecString=msec;
//     }
//     timer_display.innerHtml = '${hrsString}: ${minsString}:${secsString}:${msecString}'
// }

           // second method
// let [msecs, secs, mins, hrs] = [0, 0, 0, 0];
// let timer_display= document.getElementById("timer_display");
// let timer=null;

// function stopwatch(){
//     msecs++;
//     if(msecs=100){
//         msecs = 0;
//         secs++;
//         if(secs==60){
//             secs=0;
//             mins++;
//             if(mins==60){
//                 mins=0;
//                 hrs++;
//             }
//         }
//     }

//     let h = hrs < 10 ? "0" + hrs : hrs;
//     let m = mins < 10 ? "0" + mins : mins;
//     let s = secs < 10 ? "0" + secs : secs;
//     let ms = msecs < 10 ? "0" + msecs : msecs;

//     timer_display.innerHTML = h +":"+ m+":"+ s +":"+ ms; 
// }

// function watchStart(){
//     if(timer!=null){
//         clearInterval(timer);
//     }
//     timer=setInterval(stopwatch,1000)
// }
// function watchStop(){
//     clearInterval(timer);
// }
// function watchReset(){
//     clearInterval(timer);
//     [msecs, secs, mins, hrs] = [0, 0, 0, 0];
//     timer_display.innerHTML="00:00:00:00";
// }

        // Third method

let [milliseconds, seconds, minutes, hours]=[0, 0, 0, 0];
let timeRef = document.querySelector("#timer_display");
let int;

//implementation start function
document.getElementById("start").addEventListener("click", ()=>{
    int = setInterval(updateTime, 10);
});
 function updateTime(){
    milliseconds += 10;
    if (milliseconds==1000){
        milliseconds=0;
        seconds++;
        if(seconds == 60){
            seconds=0;
            minutes++;
            if(minutes==60){
                minutes=0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timeRef.textContent = `${h}:${m}:${s}:${ms}`;
 }
 document.getElementById("pause").addEventListener("click", ()=>{
    clearInterval(int);
});
document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(int);
    milliseconds=0;
    seconds=0;
    minutes=0;
    hours=0;
    timeRef.textContent= "00 : 00: 00: 000";
});
