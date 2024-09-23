let isDecrypted = false; // Shifrdan chiqarilganligini tekshirish uchun o'zgaruvchi

function sezerShifrlash(matn, qadam) {
    let shifrlanganMatn = '';
    
    for (let i = 0; i < matn.length; i++) {
        let harf = matn[i];

        if (harf.match(/[a-z]/i)) {
            let code = matn.charCodeAt(i);
            let yangiCode = code + qadam;

            if (harf >= 'A' && harf <= 'Z') {
                if (yangiCode > 'Z'.charCodeAt(0)) yangiCode -= 26;
            } else if (harf >= 'a' && harf <= 'z') {
                if (yangiCode > 'z'.charCodeAt(0)) yangiCode -= 26;
            }
            shifrlanganMatn += String.fromCharCode(yangiCode);
        } else {
            shifrlanganMatn += harf;
        }
    }
    
    return shifrlanganMatn;
}

function sezerShifrdanChqarish(shifrlanganMatn, qadam) {
    return sezerShifrlash(shifrlanganMatn, -qadam);
}

document.getElementById('encryptButton').addEventListener('click', () => {
    const matn = document.getElementById('inputText').value;
    const qadam = parseInt(document.getElementById('step').value);
    const shifrlangan = sezerShifrlash(matn, qadam);
    document.getElementById('outputText').value = shifrlangan;
    isDecrypted = false; // Har safar shifrlashda flagni qayta tiklash
});

document.getElementById('decryptButton').addEventListener('click', () => {
    if (isDecrypted) {
        alert("Matn allaqachon shifrdan chiqarilgan!");
        return;
    }

    const shifrlanganMatn = document.getElementById('outputText').value;
    const qadam = parseInt(document.getElementById('step').value);
    const aslMatn = sezerShifrdanChqarish(shifrlanganMatn, qadam);
    document.getElementById('outputText').value = aslMatn;
    isDecrypted = true; // Shifrdan chiqarilganini belgilang
});