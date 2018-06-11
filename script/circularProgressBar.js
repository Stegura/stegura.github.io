var counter = document.getElementById('sbi_ig1').getContext('2d');
var no = 0; // Starting Point
var pointToFill = 4.72;  //Point from where you want to fill the circle
var cw = counter.canvas.width;  //Return canvas width
var ch = counter.canvas.height; //Return canvas height
var diff;   // find the different between current value (no) and trageted value (100)
        
    function fillCounter(){
        diff = ((no/100) * Math.PI*2*10);
                
        counter.clearRect(0,0,cw,ch);   // Clear canvas every time when function is call
                   
        counter.lineWidth = 10;     // size of stroke
                    
        counter.fillStyle = '#81868e';     // color that you want to fill in counter/circle
                    
        counter.strokeStyle = '#047378';    // Stroke Color                    
        counter.beginPath();
        counter.arc(65,65,60,pointToFill,diff/10+pointToFill);    //arc(x,y,radius,start,stop)
                    
        counter.stroke();   // to fill stroke
            
            // now add condition
            
            if(no >= 80)
            {
                clearTimeout(fill);     //fill is a variable that call the function fillcounter()
            }
            no++;
        }
        
        //now call the function
        
        var fill = setInterval(fillCounter,90);     //call the fillCounter function after every 50MS