const commonDiv = (numbers = []) => {

    var min = Math.min(... numbers);

    var minHalf = min/2;

    var commonDividers = [];

    for(var i = 2; i <= minHalf; i++){
        let isDivider = false;
        for(const element of numbers){
            if((element % i) === 0)
                isDivider = true;
            else {
                isDivider = false;
                break;
            }
        }
        if(isDivider) commonDividers.push(i);
    }
    
    return commonDividers;

}

commonDiv([42,12,18]);