var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (typeof this.greeting === "string")
            return this.greeting;
        else {
            var greater = new Greeter(this.greeting);
            return greater.greeting.greet();
        }
    };
    return Greeter;
}());
window.onload = function () {
    var greeter1 = new Greeter("Hello, world");
    var greeter2 = new Greeter(greeter1);
    var button = document.createElement('button');
    button.textContent = "Say Hello";
    button.onclick = function () {
        alert(greeter2.greet());
    };
    document.body.appendChild(button);
};
