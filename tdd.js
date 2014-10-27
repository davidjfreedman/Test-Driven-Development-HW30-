// Hey Iron Yard Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____
//  / / / / __/ / / / __/ / _ \/ ___/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents) {
    console.log('\n\n"It ' + description + '"');
    contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
    return {
        toBe: function(expectation) {
            if (target === expectation) {
                console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation);
                return true;
            } else {
                console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation);
                return false;
            }
        }
    }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
//  _______________________________
// | only add code to THIS section |
//  -------------------------------
//   \
//    \
//        __
//       UooU\.'@@@@@@`.
//       \__/(@@@@@@@@@@)
//            (@@@@@@@@)
//            `YY~~~~YY'
//             ||    ||


function Dog(options) {
    if (!options) {
        options = {};
    }
    this.color = options.color || "yellow";
    this.hungry = options.hungry === undefined ? true : options.hungry; //the ? acts as an if statement, (if true) : (if false)
    // this.hungry = options.hungry || true;
    this.status = options.status || 'normal';
    this.name = options.name || "dog";
    this.owner = options.owner || undefined;
    // this.owner = (function() {
    //     // options.owner;
    //     if (!!options.owner) {
    //         options.owner.cool = false;
    //     };
    //     // return ...
    // })()
}

function Human(options) {
    if (!options) {
        options = {}
    }
    this.pronoun = options.pronoun;
    this.name = options.name;
    this.cool = options.cool || false;
}

Human.prototype.pet = function(animal) {
    if (!animal) {
        console.log(this.name + " pets " + this.pronoun + "self.")
    }
    if (!!animal) {
        animal.status = "happy";
        console.log(this.name + " pets " + animal.name + ".")
    }
}

Human.prototype.feed = function(animal) {
    if (!animal) {
        function ranNum() {
            var ran = parseInt(Math.random() * 3);
            return ran;
        };
        var quotes = [
            this.name + " feeds on " + this.pronoun + "self.",
            this.name + " feeds on the blood of the innocent.",
            this.name + " feeds on your hopes and dreams."
        ]
        console.log(quotes[ranNum()]);
    }
    if (!!animal) {
        animal.hungry = false;
        console.log(this.name + " feeds " + animal.name + " so that " + animal.name + " will stop eating " + this.pronoun + " socks.")
    }
}
// ????????
// ????????
// ????????

//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

var sadie = new Dog({
    color: "black",
    hungry: false,
    name: "sadie"
});

var moonshine = new Dog({
    color: "blue-red",
    name: "moonshine"
});

var atticus = new Dog({
    name: "atticus"
});


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

var mason = new Human({
    pronoun: "him",
    name: "mason"
});

var julia = new Human({
    pronoun: "her",
    cool: true,
    name: "julia"
});


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D
function runTests() {
    it("should make Sadie happy when Mason pets her", function() {
        expect(sadie.status).toBe('normal');
        mason.pet(sadie);
        expect(sadie.status).toBe('happy');
    });

    it("should make Sadie black", function() {
        expect(sadie.color).toBe('black');
    });

    it("should be make Moonshine hungry and Sadie not hungry", function() {
        expect(moonshine.hungry).toBe(true);
        expect(sadie.hungry).toBe(false);
    });

    it("should make Moonshine no longer hungry when you feed him", function() {
        julia.feed(moonshine);
        expect(moonshine.hungry).toBe(false);
    });


    it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function() {
        sadie.owner = mason;
        expect(moonshine.owner).toBe(undefined);
        expect(atticus.owner).toBe(undefined);
    });

    it("should make Julia cool and Mason not cool", function() {
        sadie.owner = mason;
        expect(julia.cool).toBe(true);
        expect(mason.cool).toBe(false);
    });
    mason.feed();
    julia.feed();
    julia.pet();
    mason.pet();
}

window.onload = runTests();
