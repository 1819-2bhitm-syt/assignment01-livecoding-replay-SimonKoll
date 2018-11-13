function Person(vorname, nachname){
    this.vorname = vorname;
    this.nachname = nachname;
}

Person.prototype.getName = function () {
    return this.vorname + " " + this.nachname;

};

function Schueler(vorname, nachname, schule){
    this.vorname = vorname;
    this.nachname = nachname;
    this.schule = schule;
}

Schueler.prototype.__proto__=Person.prototype;

Schueler.prototype.getName = function () {

    return this.vorname + " " + this.nachname + "( " + this.schule + " )";
};


let erik = new Schueler("Erik", "Müller", "HTL Leonding");
let susi = new Person("Susi", "Musterfrau");

console.log(erik.getName());
console.log(susi.getName());