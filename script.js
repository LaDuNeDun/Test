$(document).ready(function () {
    // Mengatur event mouseenter dan mouseleave pada elemen .container
    $('.container').mouseenter(function () {
        // Menggerakkan .card ke atas
        $('.card').stop().animate({
            top: '-100px'  // Ubah nilai top sesuai keinginan
        }, 500);  // Durasi animasi dalam milidetik
    }).mouseleave(function () {
        // Mengembalikan .card ke posisi semula
        $('.card').stop().animate({
            top: '5px'  // Sesuaikan dengan posisi awal di CSS
        }, 500);  // Durasi animasi yang sama
    });
});
