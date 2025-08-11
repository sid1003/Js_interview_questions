Array.prototype.myReduce = function(cb, initialValue){
    if(!Array.isArray(this)){
        throw new TypeError('myReduce can only be called on Arrays');
    }
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }
    let acc = initialValue;
    let startIndex = 0;
    if(acc === undefined){
        if(this.length === 0){
            throw new TypeError('cannot call Reduce on empty array with no initial value');
        }
        acc = this[0];
        startIndex = 1;
    }
    for(let i = startIndex ; i < this.length ; i++){
        if(this.hasOwnProperty(i)){
            acc = cb(acc, this[i], i, this);
        }
    }
    return acc;
}