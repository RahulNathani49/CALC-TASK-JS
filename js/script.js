function calc() {
    var num1 = document.getElementById('num1').textContent;
    var num2 =
        document.getElementById('num2').textContent;

    var sum = (+num1 + +num2);
    res = document.querySelector('#result>h1').textContent = sum;
    x = document.getElementById('h1');
    console.log(x);
    
    x.style.color = "white";
}
