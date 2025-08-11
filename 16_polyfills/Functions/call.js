Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new TypeError(`${this} is not a function`);
    }
    
    context = context ?? globalThis;
    
    let functionSymbol = Symbol();
    context[functionSymbol] = this;
    
    let res = context[functionSymbol](...args);
    
    delete context[functionSymbol];
    
    return res;
    
}