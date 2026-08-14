function convertToBinary() {
    let input =
    document.getElementById("decimalInput").value;
    let result =
        document.getElementById("binaryResult");
    if (input === "") {
        result.innerHTML =
        "Please enter a valid decimal number";
        return;
    }
    let decimal = parseInt(input);
    let binary = decimal.toString(2);
    result.innerHTML = binary;
}
document
.getElementById("decimalInput")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        convertToBinary();
    }
});
