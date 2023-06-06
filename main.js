function kirim(){
    url = "https://wa.me/+6289644412720";
    var form = document.forms[0];
    var nama = form.querySelector('[name="nama"]').value;
    var konten = form.querySelector('[name="konten"]').value;
    url_full = url + "?text=" + encodeURIComponent("Halo Admin, Saya " + nama + ".  ");
    url_full = url_full + encodeURIComponent("Saya ingin memberikan kritik / saran : " + konten);
    console.log(url_full);
    window.open(url_full, '_blank').focus();
}