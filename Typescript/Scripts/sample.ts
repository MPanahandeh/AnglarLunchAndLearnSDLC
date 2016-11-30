class Greeter<T extends Greeter<string>|string> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        if (typeof this.greeting === "string")
            return this.greeting;
        else {            
            let greater = new Greeter<Greeter<string>>(this.greeting as Greeter<string>);
            return greater.greeting.greet();
        }
    }
}

window.onload = function () {
	
	
   	let greeter1 = new Greeter<string>("Hello, world");
	let greeter2 = new Greeter<Greeter<string>>(greeter1);

	let button = document.createElement('button');
	button.textContent = "Say Hello";
	button.onclick = function() {
   	 alert(greeter2.greet());
	}
	
	document.body.appendChild(button);
};