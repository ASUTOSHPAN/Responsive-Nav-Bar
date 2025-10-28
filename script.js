let anchor = document.getElementById("anchor");
anchor.style.maxHeight = "0px";

function toggleMenu() {
    if (anchor.style.maxHeight === "0px") {
        anchor.style.maxHeight = "300px";
    } else {
        anchor.style.maxHeight = "0px";
    }
}
