function Telefon(marka, cena, kolor, aparat) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
    this.aparat = aparat;

}

Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + ", aparat  to " + this.aparat  + ".");
}
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "2px");
var SamsungGalaxyS6 = new Telefon("Samsung", 2000, "szary", "1px")
var OnePlusOne = new Telefon("One", 1250, "czarny", "22px");


iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();
