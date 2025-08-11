Array.prototype.myFilter = function(cb){
    if(!Array.isArray(this)){
        throw new TypeError('myFilter can only be called Arrays');
    }
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }
    let temp = [];
    for(let i = 0 ; i < this.length ; i++){
        if(this.hasOwnProperty(i) && cb(this[i], i, this)){
            temp.push(this[i]);
        }
    }
    return temp;
}