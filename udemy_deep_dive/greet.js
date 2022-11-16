function Greeter(){
    this.greeting = 'Hello world!';
    this.greet = () => console.log(this.greeting)
}

module.exports = new Greeter();