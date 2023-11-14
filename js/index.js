$(document).ready(function () {
    let arrowLeft = $('.fa-news-left');
    let arrowRight = $('.fa-news-right');
    let newsTitles = [
        'Tọa đàm Dịch Văn học dành cho SV định hướng',
        'Nội dung tin tức 2',
        'Nội dung tin tức 3'
    ];
    let newsContents = [
        `Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi
        Tọa đàm Dịch văn học với sự tham gia của diễn giả
        Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm
        dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả,
        nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa`,
        'Nội dung tin tức 2',
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
// document.addEventListener('DOMContentLoaded', function() {
//     // Xác định các biểu tượng mũi tên
//     let arrowLeft = document.querySelector('.fa-news-left');
//     let arrowRight = document.querySelector('.fa-news-right');

//     // Mảng các nội dung tin tức (ví dụ)
//     let newsTitles = [
//         'Tọa đàm Dịch Văn học dành cho SV định hướng',
//         'Nội dung tin tức 2',
//         'Nội dung tin tức 3'
//     ];

//     let newsContents = [
//         `Sáng ngày 13/4/2022, Khoa tiếng Italia đã tổ chức buổi
//         Tọa đàm Dịch văn học với sự tham gia của diễn giả
//         Nguyễn Xuân Hồng - Một dịch giả có nhiều tác phẩm
//         dịch có uy tín. Khách mời của buổi tọa đàm là dịch giả,
//         nhà báo Nguyễn Xuân Hồng, Trưởng phòng thư kí tòa`,
//         'Nội dung tin tức 2',
//         'Nội dung tin tức 3'
//     ];

//     let newsImages = [
//         './assets/images/news.jpg',
//         './assets/images/news/image1.jpg',
//         './assets/images/news/image2.jpg'
//     ];

//     let newsTime = [
//         '21/10/2023',
//         '08/10/2023',
//         '16/09/2023'
//     ];

//     let currentIndex = 0;

//     function updateNewsContent(index) {
//         let newsTitleDiv = document.querySelector('.news-title');
//         let newsContentDiv = document.querySelector('.news-content');
//         let newsImageDiv = document.querySelector('.news-image');
//         let newsTimeDiv = document.querySelector('.news-time');

//         let directionClass = index > currentIndex ? 'animateRight' : 'animateLeft';
//         let oppositeDirectionClass = index > currentIndex ? 'animateLeft' : 'animateRight';

//         newsImageDiv.classList.add(directionClass);

//         setTimeout(function() {
//             newsContentDiv.innerHTML = newsContents[index];
//             newsTitleDiv.innerHTML = newsTitles[index];
//             newsImageDiv.src = newsImages[index];
//             newsTimeDiv.innerHTML = newsTime[index];

//             newsImageDiv.classList.remove(directionClass);

//             setTimeout(function() {
//                 newsImageDiv.classList.remove(oppositeDirectionClass);
//             }, 300);
//         }, 300);

//         currentIndex = index;
//     }

//     updateNewsContent(currentIndex);

//     arrowLeft.addEventListener('click', function() {
//         let newIndex = currentIndex > 0 ? currentIndex - 1 : newsContents.length - 1;
//         updateNewsContent(newIndex);
//     });

//     arrowRight.addEventListener('click', function() {
//         let newIndex = currentIndex < newsContents.length - 1 ? currentIndex + 1 : 0;
//         updateNewsContent(newIndex);
//     });
// });


// Handle Cooperate
document.addEventListener('DOMContentLoaded', function () {
    // Xác định các biểu tượng mũi tên
    let arrowLeft = document.querySelector('.fa-cooperates-left');
    let arrowRight = document.querySelector('.fa-cooperates-right');

    // Mảng các nội dung tin tức (ví dụ)
    let newsTitles = [
        'Call for papers Convego Internazionale ItaHanu',
        'Nội dung tin tức 2',
        'Nội dung tin tức 3'
    ];

    let newsContents = [
        `In occasione del 15o anniversario del Dipartimento di
        Italianistica presso l’Università di Hanoi e celebrando la
        prima Settimana dell Italia in ASEAN, considerato il forte
        e reciproco interesse tra l Italia e l’ASEAN, l’Università di
        Hanoi (HANU) intende organizzare`,
        'Nội dung tin tức 2',
        'Nội dung tin tức 3'
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