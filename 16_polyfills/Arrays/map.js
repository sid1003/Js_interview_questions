Array.prototype.myMap = function(cb){
    if(!Array.isArray(this)){
        return new TypeError("myMap can only be called on Arrays");
    }
    if(typeof cb !== 'function'){
        return new TypeError(`${cb} is not a function`);
    }
    let temp = new Array(this.length);
    for(let i = 0 ; i < this.length ; i++){
        if(this.hasOwnProperty(i)){
            temp.push(cb(this[i], i, this));
        }
    }
    return temp;
}