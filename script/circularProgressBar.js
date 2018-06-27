function progressBar(skillLevev,counter){
    var no = 0; // Starting Point
    var pointToFill = 4.72;  //Point from where you want to fill the circle
    var diff;   // find the different between current value (no) and trageted value (100)
    function fillCounter(){
        diff = ((no/100) * Math.PI*2*10);
        counter.clearRect(0,0,counter.canvas.width,counter.canvas.height);   // Clear canvas every time when function is call    
        counter.lineWidth = 10;     // size of stroke                   
        counter.strokeStyle = '#047378';    // Stroke Color                    
        counter.beginPath();
        counter.arc(65,65,60,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)         
        counter.stroke();   // to fill stroke
            // now add condition
            if(no >= skillLevev){
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }       
        //now call the function
    var fill = setInterval(fillCounter,50);     //call the fillCounter function after every 50MS
}
function runProgressBar(){ 
    var barsArr = document.getElementsByClassName('sbi_progressBar');
    for(var i= 0; i < barsArr.length; i++){
        progressBar(barsArr[i].textContent, document.getElementById(barsArr[i].id).getContext('2d'));
    }
}
