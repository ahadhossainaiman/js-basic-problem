


// kilometerToMeter

function kilometerToMeter(km){
    var meter
    if(km >=0){
        meter = km*1000;
    }else if(km <0){
        console.log("Distnce cannot be negative");  // Error massage here;
    }
    return meter;
}




// budgetCalculator

 function budgetCalculator(watch,phone,laptop){
    var total;
     if(watch>=0 && phone>=0 && laptop>=0){
        var amountOfWatch = watch*50;
        var amountOfPhone = phone*100;
        var amountOfLaptop = laptop*500;
         total = amountOfWatch + amountOfPhone + amountOfLaptop;
     }else{
        console.log("Product cannot be negative value");   // Error massage here;
     }
     return total;  
 }





// hotelCost

function hotelCost(day){
    var cost;

    if(day <= 10 && day >= 0){
        var cost = day*100;
    }else if(day <= 20 && day >= 0){
        var firstPart = 10*100;
        var remaining = day-10;
        var secondPart = remaining*80;
        var cost = firstPart + secondPart;
    }else if(day >20 && day >= 0){
        var firstPart = 10*100;
        var secondPart = 10*80;
        var remaining = day-20;
        var thirdPart = remaining*50;
        var cost = firstPart + secondPart + thirdPart
    }else{
        console.log("Day cannot be negative");  // Error massage here;
    }
    return cost;
}



// megaFriend

function megaFriend(arr){
    var result = "";
    for(var i = 0;i<arr.length;i++){
        var currentName = arr[i];
        if(currentName.length>result.length){
            result = arr[i];
        }else if(currentName.length < 0){
            console.log("Error");          // Error massage here;
        }
    }
    return result;
}

