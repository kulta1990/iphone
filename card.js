function Handy(oprice, pwpacket) {

    this.oprice = oprice;
    this.pwpacket = pwpacket;

};


//Brutto szamitas tablazatba
Handy.prototype.Brutto = function () {
    return this.pwpacket * 1.07;
};

var iphonenew = new Handy(1200, 800);
var iphoneused = new Handy(700, 200);
var iphonefm = new Handy(1500, 1100);

document.getElementById("calc").addEventListener("click", function () {
    var originalprice = Number(document.getElementById("product").value);

    if (originalprice == 0) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.setAttribute("style", "color: red; font-weight: bold");
        td2.setAttribute("style", "color: green; font-weight: bold");
        td3.setAttribute("style", "color: rgba(45,47,44,1); font-weight: bold");
        td1.appendChild(document.createTextNode(iphonenew.oprice + " CHF"));
        td2.appendChild(document.createTextNode(iphonenew.pwpacket + " CHF"));
        td3.appendChild(document.createTextNode(iphonenew.Brutto() + " CHF"));

    } else if (originalprice == 1) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.setAttribute("style", "color: red; font-weight: bold");
        td2.setAttribute("style", "color: green; font-weight: bold");
        td3.setAttribute("style", "color: rgba(45,47,44,1); font-weight: bold");
        td1.appendChild(document.createTextNode(iphoneused.oprice + " CHF"));
        td2.appendChild(document.createTextNode(iphoneused.pwpacket + " CHF"));
        td3.appendChild(document.createTextNode(iphoneused.Brutto() + " CHF"));

    } else if (originalprice == 2) {
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        td1.setAttribute("style", "color: red; font-weight: bold");
        td2.setAttribute("style", "color: green; font-weight: bold");
        td3.setAttribute("style", "color: rgba(45,47,44,1); font-weight: bold");
        td1.appendChild(document.createTextNode(iphonefm.oprice + " CHF"));
        td2.appendChild(document.createTextNode(iphonefm.pwpacket + " CHF"));
        td3.appendChild(document.createTextNode(iphonefm.Brutto() + " CHF"));

    } else { }

    var tr = document.createElement("tr");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);


    document.getElementById("torzs").appendChild(tr);

});



