function sjekkSvar() {
    let riktig = 0;
    const total = 7;

    const spm1 = document.querySelector('input[name="q1"]:checked');
    const spm2 = document.querySelector('input[name="q2"]:checked');
    const spm3 = document.querySelector('input[name="q3"]:checked');
    const spm4 = document.querySelector('input[name="q4"]:checked');
    const spm5 = document.querySelector('input[name="q5"]:checked');
    const spm6 = document.querySelector('input[name="q6"]:checked');
    const spm7 = document.querySelector('input[name="q7"]:checked');
    

    if (spm1 && spm1.value === "riktig") riktig++;
    if (spm2 && spm2.value === "riktig") riktig++;
    if (spm3 && spm3.value === "riktig") riktig++;
    if (spm4 && spm4.value === "riktig") riktig++;
    if (spm5 && spm5.value === "riktig") riktig++;
    if (spm6 && spm6.value === "riktig") riktig++;
    if (spm7 && spm7.value === "riktig") riktig++;

    const resultBox = document.getElementById("result");
    resultBox.classList.remove("success", "fail");

    if (riktig === total) {
      resultBox.innerHTML = ` Fantastisk! Du fikk ${riktig} av ${total} riktige!`;
      resultBox.classList.add("success");
    } else if (riktig >= 1) {
      resultBox.innerHTML = ` Du fikk ${riktig} av ${total} riktige. Prøv igjen!`;
      resultBox.classList.add("success");
    } else {
      resultBox.innerHTML = ` Ingen riktige. Du klarer det neste gang!`;
      resultBox.classList.add("fail");
    }
  }