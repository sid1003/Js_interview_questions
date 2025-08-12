const throttle = (func, limit) => {
    let flag = false;
    return function(){
        if(!flag){
            func.apply(this, arguments);
            flag = true;
            setTimeout(() => {
                flag = false;
            }, limit);
        }
    }
}