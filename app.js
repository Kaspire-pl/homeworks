// Zadanie #1
function exchange(current, target, ammount) {
    var req = fetch('https://api.exchangerate-api.com/v4/latest/' + current);
    req.then(function (res) {
        return res.json();
    }).then(function (body) {
        var exchange = body.rates[current] * ammount * body.rates[target];
        console.log(exchange);

    }).catch(error =>
        console.log("Błąd: żądany adres nie istnieje! ")
    );
}
exchange('PLN', 'USD', 100)

// Zadanie #2
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.admin = false;
    }

    isAdmin() {
        return this.admin;
    }
}
class Admin extends User {
    constructor(name, email) {
        super(name, email);
        this.admin = true;
    }
}

const users = [new User('Krzychu', 'krzychu@krzy.pl'), new Admin('Ada', 'e@ewq.com'), new User('Zbychu', 'zbychu@krzy.pl'),new User('Krycha', 'krycha@krzy.pl'), new Admin('Zyga', 'zyga@ewq.com')]

console.log(users);

// Zadanie #3
class Service {
    static counter = 0;
    constructor(){
        this.id = Service.counter++
    }
}

class RandomService extends Service {
    getValue(){
        return Math.random();
    }
}

class TimeService extends Service {
    getValue(){
        return Date();
    }
}

class Component {
    constructor(time = new TimeService(), rand = new RandomService()){
        this.rand = rand.getValue();
        this.time = time.getValue();
    }
    getTime(){
        return this.time;
    }
    getRandom(){
        return this.rand;
    }
}

const service = new Service();
const randomService = new RandomService();
const timeService = new TimeService();
const component = new Component();

console.log(service)
console.log(randomService.getValue());
console.log(timeService.getValue());
console.log(component.getTime());
console.log(component.getRandom());