<script>
    document.addEventListener('DOMContentLoaded', function () 
        // Pastikan DOM sudah dimuat sebelum menambahkan event listener
        const form = document.getElementById('transaksiForm');

        // Pastikan elemen form ditemukan
         {
            form.addEventListener('submit', function (e) {
                e.preventDefault(); // Mencegah pengiriman form

                // Ambil nilai input dari form
                const nama = document.getElementById('namaTransaksi')?.value.trim();
                const jumlah = document.getElementById('jumlah')?.value.trim();
                const kategori = document.getElementById('kategori')?.value;

                // Validasi input
                if (!nama) {
                    alert('Nama Transaksi harus diisi!');
                    return;
                }

                if (!jumlah || isNaN(jumlah) || jumlah <= 0) {
                    alert('Jumlah harus berupa angka yang lebih besar dari 0!');
                    return;
                }

                if (!kategori) {
                    alert('Kategori harus dipilih!');
                    return;
                }
                // Jika semua validasi berhasil
                alert('Transaksi berhasil disimpan!'); 

                // Reset form setelah validasi berhasil
                from.reset();
         })
        } else {
            console.error('Form dengan ID "transaksiForm" tidak ditemukan.')
        }
    )
</script>