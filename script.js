/*show DIV/window for registration process*/

function ShowElement() {
    var x = document.getElementById("sikeres_reg");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};
/*show DIV/window for registration process*/

function ShowElement() {
    var x = document.getElementById("sikeres_reg");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};



var gomb2 = document.getElementById('gomb2').addEventListener("click", function () {

    var jelszo = document.getElementById("password1").value;
    var email = document.getElementById("email").value;
    var jelszo2 = document.getElementById("password2").value;

/*regex e-mail and password TEST process*/

    var regexemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    var regexjelszo = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!(regexemail.test(email))) {
        alert("A megadott e-mail cim nem megfelelo");

    } else if (!(regexjelszo.test(jelszo))) {
        alert("A jelszonak muszaj tartalmaznia min 8 kar. es egy szamot");

    } else if (jelszo != jelszo2) {
        alert("A ket jelszo nem egyezik.");
    } else {

        ShowElement();
    }

})

/* hide registration DIV with close_button*/

var y = document.getElementById("gomb_success").addEventListener("click", () => {
   var x = document.getElementById("sikeres_reg");
    x.style.display = `none`;

});


