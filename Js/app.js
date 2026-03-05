document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = {
                brans: document.getElementById('brans').value,
                doktor: document.getElementById('doktor').value,
                tarih: document.getElementById('tarih').value,
                durum: 'Aktif'
            };

            console.log("SQL Tablosuna gönderilecek veriler:", formData);

            alert(`Sayın Ahmet Yılmaz, ${formData.brans} bölümünden ${formData.doktor} ile randevunuz ${formData.tarih} tarihine başarıyla tanımlanmıştır.`);

            window.location.href = 'my-appointments.html';
        });
    }
    const bransSelect = document.getElementById('brans');
    const doktorSelect = document.getElementById('doktor');

    if (bransSelect && doktorSelect) {
        bransSelect.addEventListener('change', (e) => {
            const secilenBrans = e.target.value;
            
            doktorSelect.innerHTML = '<option value="" disabled selected>Doktor Seçin</option>';

            const doktorListesi = {
                kardiyoloji: ['Dr. Ahmet Yılmaz', 'Dr. Mehmet Öz'],
                goz: ['Dr. Ayşe Demir', 'Dr. Fatma Şahin'],
                dahiliye: ['Dr. Caner Bulut', 'Dr. Selin Aras']
            };

            if (doktorListesi[secilenBrans]) {
                doktorListesi[secilenBrans].forEach(doktor => {
                    const option = document.createElement('option');
                    option.value = doktor;
                    option.textContent = doktor;
                    doktorSelect.appendChild(option);
                });
            }
        });
    }
});