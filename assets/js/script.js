function muatPartial(id, jalurFile) {
    fetch(jalurFile)
        .then(respon => respon.text())
        .then(isi => document.getElementById(id).innerHTML = isi)
}