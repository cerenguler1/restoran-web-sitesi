// Butona tıklama olayı ekleyelim
document.querySelector(".btn.btn-primary.my-1").addEventListener("click", function(event) {
  alert("Rezervasyon işleminiz başarıyla alındı!");
});


//yukarı çıkma butonu
function yukariCik() {
  scrollTo(0, 0);
}

//rezervasyon butonu
let sayac = 0;

document.getElementById("rezervasyonBtn").addEventListener("click", function () {
  sayac++;
  document.getElementById("sayi").textContent = sayac;
});

//saat
  setInterval(() => {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleString('tr-TR');
  }, 1000);

  //hoşgeldiniz
  window.addEventListener('load', function() {
    // Sayfa ilk kez yüklendiğinde göster
    if (!sessionStorage.getItem('welcomeDisplayed')) {
        setTimeout(function() {
            document.getElementById('welcome-screen').style.display = 'none';
            let mainContent = document.getElementById('main-content');
            mainContent.style.display = 'block';
            setTimeout(function() {
                mainContent.classList.add('show');
            }, 100);
        }, 2000);

        // İlk açılışta hoşgeldiniz ekranını bir kez göster
        sessionStorage.setItem('welcomeDisplayed', 'true');
    } else {
        // Hoşgeldiniz ekranı daha sonra gösterilmesin
        document.getElementById('welcome-screen').style.display = 'none';
        let mainContent = document.getElementById('main-content');
        mainContent.style.display = 'block';
    }
});

//kalan saat hesabı
function hesaplaKalanSaat() {
    const tarih = document.getElementById("rezervasyonTarihi").value;
    const saat = document.getElementById("rezervasyonSaati").value;
    const sonuc = document.getElementById("kalanSure");

    if (tarih && saat) {
        const rezervasyonZamani = new Date(`${tarih}T${saat}`);
        const simdi = new Date();

        const farkMs = rezervasyonZamani - simdi;
        const farkSaat = farkMs / (1000 * 60 * 60);

        if (farkSaat > 0) {
            sonuc.textContent = `Rezervasyona ${farkSaat.toFixed(1)} saat kaldı.`;
        } else {
            sonuc.textContent = "Seçtiğiniz zaman geçmişte.";
        }
    } else {
        sonuc.textContent = "";
    }
}

// Tarih ve saat değişince otomatik hesapla
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("rezervasyonTarihi").addEventListener("change", hesaplaKalanSaat);
    document.getElementById("rezervasyonSaati").addEventListener("change", hesaplaKalanSaat);
});


