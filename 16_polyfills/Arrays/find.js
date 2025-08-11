Array.prototype.myFind = function(cb){
    if(!Array.isArray(this)){
        throw new TypeError('myFind can only be called on Arrays');
    }
    if(typeof cb !== 'function'){
        throw new TypeError(`${cb} is not a function`);
    }
    for(let i = 0 ; i < this.length ; i++){
        if(this.hasOwnProperty(i) && cb(this[i], i, this)){
            return this[i];
        }
    }
    return undefined;
}
