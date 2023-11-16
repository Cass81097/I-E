$(document).ready(function () {
    let arrowLeft = $('.fa-news-left');
    let arrowRight = $('.fa-news-right');
    let newsTitles = [
        'Tọa đàm Dịch Văn học dành cho SV định hướng',
        'Khu nghiên cứu dành cho SV',
        'Nội dung tin tức 3'
    ];
    let newsContents = [
        `Sáng ngày 21/10/2023, Khoa tiếng Italia đã tổ chức buổi
        Tọa đàm Dịch văn học với sự tham gia của diễn giả
        Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm
        dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả,
        nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa`,
        'Chiều ngày 08/10/2023, Khoa tiếng Italia có mở một trung tâm nghiên cứu hóa học dành cho sinh viên có đam mê',
        'Nội dung tin tức 3'
    ];
    let newsImages = [
        './assets/images/news.jpg',
        './assets/images/news/image1.jpg',
        './assets/images/news/image2.jpg'
    ];
    let newsTime = [
        '21/10/2023',
        '08/10/2023',
        '16/09/2023'
    ];
    let currentIndex = 0;

    function updateNewsContent(index) {
        let newsTitleDiv = $('.news-title');
        let newsContentDiv = $('.news-content');
        let newsImageDiv = $('.news-image');
        let newsTimeDiv = $('.news-time');

        let directionClass = index > currentIndex ? 'animateRight' : 'animateLeft';
        let oppositeDirectionClass = index > currentIndex ? 'animateLeft' : 'animateRight';

        if (index === 0 && currentIndex === 0) {
            newsContentDiv.html(newsContents[index]);
            newsTitleDiv.html(newsTitles[index]);
            newsImageDiv.attr('src', newsImages[index]);
            newsTimeDiv.html(newsTime[index]);
            return;
        }

        if (index === newsContents.length - 1 && currentIndex === newsContents.length - 1) {
            return;
        }

        newsImageDiv.addClass(directionClass);
        setTimeout(function () {
            newsContentDiv.html(newsContents[index]);
            newsTitleDiv.html(newsTitles[index]);
            newsImageDiv.attr('src', newsImages[index]);
            newsTimeDiv.html(newsTime[index]);

            newsImageDiv.removeClass(directionClass);
            setTimeout(function () {
                newsImageDiv.removeClass(oppositeDirectionClass);
            }, 300);
        }, 300);

        currentIndex = index;
    }

    updateNewsContent(currentIndex);

    arrowLeft.on('click', function () {
        let newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
        updateNewsContent(newIndex);
    });

    arrowRight.on('click', function () {
        let newIndex = currentIndex < newsContents.length - 1 ? currentIndex + 1 : currentIndex;
        updateNewsContent(newIndex);
    });
});

// Handle Education
$(document).ready(function () {
    let arrowLeft = $('.fa-educations-left');
    let arrowRight = $('.fa-educations-right');

    let educationsTitles = [
        'Hệ Chính quy Ngôn ngữ Italia',
        'Giảng dạy hóa học',
        'Nội dung tin tức 3'
    ];

    let educationsContents = [
        `Chương trình đào tạo đại học ngành Ngôn ngữ Italia nhằm
        đào tạo sinh viên có phẩm chất chính trị vững vàng; có kiến
        thức, kỹ năng, thái độ và đạo đức phù hợp để làm việc trong
        môi trường đa ngôn ngữ, đa văn hóa và có khả năng thích ứng
        cao với những thay đổi nhanh chóng của nền kinh tế đang
        trong quá trình hội.`,
        `Chương trình đào tạo đại học ngành Ngôn ngữ Italia giảng dạy thêm về môn hóa học giúp sinh viên có nhiều kiến thức bổ ích và phát triển.`,
        'Nội dung tin tức 3'
    ];

    let educationsImages = [
        './assets/images/educations/education.png',
        './assets/images/educations/abstract-abstraction-biology-chemistry-wallpaper-preview.jpg',
        './assets/images/educations/background-book-bookcase-books.jpg'
    ];

    let currentIndex = 0;

    function updateEducationsContent(index) {
        let educationsTitleDiv = $('.educations-title');
        let educationsContentDiv = $('.educations-content');
        let educationsImageDiv = $('.educations-image');

        let directionClass = index > currentIndex ? 'animateRight' : 'animateLeft';
        let oppositeDirectionClass = index > currentIndex ? 'animateLeft' : 'animateRight';

        if (index === 0 && currentIndex === 0) {
            educationsTitleDiv.html(educationsTitles[index]);
            educationsContentDiv.html(educationsContents[index]);
            educationsImageDiv.attr('src', educationsImages[index]);
            return;
        }

        if (index === educationsContents.length - 1 && currentIndex === educationsContents.length - 1) {
            return;
        }

        educationsImageDiv.addClass(directionClass);
        setTimeout(function () {
            educationsTitleDiv.html(educationsTitles[index]);
            educationsContentDiv.html(educationsContents[index]);
            educationsImageDiv.attr('src', educationsImages[index]);

            educationsImageDiv.removeClass(directionClass);

            setTimeout(function () {
                educationsImageDiv.removeClass(oppositeDirectionClass);
            }, 300);
        }, 300);

        currentIndex = index;
    }

    updateEducationsContent(currentIndex);

    arrowLeft.on('click', function () {
        let newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
        updateEducationsContent(newIndex);
    });

    arrowRight.on('click', function () {
        let newIndex = currentIndex < educationsContents.length - 1 ? currentIndex + 1 : currentIndex;
        updateEducationsContent(newIndex);
    });
});

// Handle Cooperate
document.addEventListener('DOMContentLoaded', function () {
    // Xác định các biểu tượng mũi tên
    let arrowLeft = document.querySelector('.fa-cooperates-left');
    let arrowRight = document.querySelector('.fa-cooperates-right');

    // Mảng các nội dung tin tức (ví dụ)
    let newsTitles = [
        'Call for papers Convego Internazionale ItaHanu',
        'La Magia di Roma',
        'Il Gusto della Cucina Italiana'
    ];

    let newsContents = [
        `In occasione del 15o anniversario del Dipartimento di
        Italianistica presso l’Università di Hanoi e celebrando la
        prima Settimana dell Italia in ASEAN, considerato il forte
        e reciproco interesse tra l Italia e l’ASEAN, l’Università di
        Hanoi (HANU) intende organizzare`,
        `Roma non è solo una città, è un capolavoro vivente. Ogni strada racconta storie di imperi, artisti e santi. Passeggiando per i suoi vicoli, si può sentire il respiito della storia in ogni pietra. La città eterna incanta con il suo mix di antico e moderno, un luogo dove il tempo sembra essersi fermato`,
        `La cucina italiana è un’arte che celebra la semplicità e la qualità degli ingredienti. Ogni regione ha i suoi piatti unici, ricchi di sapori e tradizioni. Dai formaggi ricchi ai vini robusti, ogni boccone è un viaggio attraverso i sensi. Mangiare in Italia è un'esperienza che unisce famiglia, amici e la gioia della vita`,

    ];

    let newsTime = [
        '04/11/2023',
        '02/10/2023',
        '12/09/2023'
    ];

    let currentIndex = 0;

    function updateNewsContent(index) {
        let newsTitleDiv = document.querySelector('.cooperates-title');
        let newsContentDiv = document.querySelector('.cooperates-content');
        let newsTimeDiv = document.querySelector('.cooperates-time');

        setTimeout(function () {
            newsContentDiv.innerHTML = newsContents[index];
            newsTitleDiv.innerHTML = newsTitles[index];
            newsTimeDiv.innerHTML = newsTime[index];
        }, 300);
    }

    updateNewsContent(currentIndex);

    arrowLeft.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = newsContents.length - 1;
        }
        updateNewsContent(currentIndex);
    });

    arrowRight.addEventListener('click', function () {
        if (currentIndex < newsContents.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateNewsContent(currentIndex);
    });
});

