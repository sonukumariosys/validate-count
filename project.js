
    let count = 0;
    function increment() {       
                     
        if (count <= 4) {
            count += 1;  
        document.getElementById("count-el").innerHTML = count;
       
       
        }
    }
    function decrement() { 
          
        if (count > 0) { 
            count =count-1;            
      document.getElementById("count-el").innerHTML = count;
        }
    }
