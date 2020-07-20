function myFunction() {
    var date = ["birthday"]["Date"]
    var month = ["birthday"]["Month"]
    var year = ["birthday"]["Year"]

    if ((date.value <= "0") && (date.value > "31")) {
        document.getElementById("form1")
        alert("Invalid Date")
    }
    if ((month.value <= "0") && (month.value0 > "12")) {
        alert("Invalid Month")
    }
    if (year.value == "") {
        alert("Enter Your Birthyear")
    }
}