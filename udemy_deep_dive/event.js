function Emitter(){
    this.events = {}
    this.on = function (type, fn){
        if(!Array.isArray(this.events[type])){
            this.events[type] = [];
        }
        this.events[type].push(fn);
    }

    this.emit = function (type){
        if (Array.isArray(this.events[type])){
            this.events[type].forEach(listener => listener());
        }
    }
}

module.exports = Emitter;