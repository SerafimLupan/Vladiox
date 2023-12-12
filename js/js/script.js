function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

var form = document.getElementById('formular');
                form.addEventListener("submit", e => {
                    e.preventDefault();
                    fetch(form.action, {
                        method: "POST",
                        body: new FormData(document.getElementById("formular")),
                    }).then(() =>{
                        alert("Comanda dumneavoastră a fost trimisă cu succes!");
                        form.reset();
                    });
                });
