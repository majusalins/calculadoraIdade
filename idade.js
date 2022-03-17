function idade(event) {
    event.preventDefault();
    var d1 = document.getElementById('data').value;
    var m1 = document.getElementById('mes').value;
    var a1 = document.getElementById('ano').value;
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var a2 = date.getFullYear();
    var mes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + mes[m2 - 1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        a2 = a2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var a = a2 - a1;
    document.getElementById('idade').innerHTML = 'Você tem ' + a + ' anos, ' + m + ' meses e ' + d + ' dias de idade.';
    console.log(idade);
}