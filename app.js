function showTime(){
    let displayDate=new Date()
var hrs=displayDate.getHours();
var secs=displayDate.getSeconds();
var  mins= displayDate.getMinutes();
var meridian='PM'

 if (secs< 10) {
     secs='0'+secs
 }

if (mins<10) {
    mins="0"+mins
}
if (hrs<=12) {
    meridian="AM"
}
if (hrs>12) {
    hrs=hrs-12
}

hrs=(hrs<10) ? "0"+hrs:hrs
    screen= hrs + ': ' +mins + ": "+secs +' '+meridian;
 
    document.getElementById('displayTime').textContent=screen;
   
    setTimeout(showTime)
  



}


