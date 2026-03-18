# TODO: Perbaikan Morabooth

## Task List:

- [x] 1. Perbaiki CSS countdown - lebih besar, animasi pulse, warna kontras
- [x] 2. Rapihkan hasil foto - ratio yang bagus untuk download
- [x] 3. Pertahankan QR code untuk download (sesuai request user)
- [x] 4. Perbaiki countdown tidak muncul di foto ke-2 dan seterusnya
- [x] 5. Perbaiki rasio foto gepeng

## Implementasi:

- Edit file: morabooth.html

## Perubahan yang dilakukan:

1. **Countdown**:
   - Diperbesar ke 180px, warna kuning emas (#FFD700) dengan efek glow oranye
   - Animasi pulse, dan bayangan teks tebal
   - Menggunakan recursive function dengan setTimeout (bukan setInterval) agar muncul di setiap foto
   - Durasi countdown 3 detik (lebih cepat dari 5 detik)

2. **Rasio Foto**:
   - Ditambahkan fungsi `drawImageCover` untuk mempertahankan aspect ratio
   - Foto dipotong (crop) agar sesuai rasio 1:1, tidak gepeng/stretched

3. **Modal Hasil Foto**:
   - Background gradient yang lebih menarik
   - Tata letak lebih rapi dengan flexbox
   - Gambar hasil di dalam container dengan shadow
   - Tombol download dengan gradient ungu-biru menarik
   - Tombol close yang lebih jelas (bulat merah)
   - QR code tetap ada untuk download via HP

4. **Responsif**: Tambahan media query untuk layar kecil
