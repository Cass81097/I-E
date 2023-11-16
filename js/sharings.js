$(document).ready(function () {
    let sharingsTitles = [
        `Đam mê quảng bá văn hóa Việt của nữ du học sinh Ý`,
        `Hành trình khám phá Italy của anh chàng Việt`,
        `Nam du học sinh Việt đẹp trai, đạt điểm gần tuyệt đối`,
        'Niềm vui khi học ngôn ngữ Ý của anh chàng sinh viên',
        'Nam sinh đam mê học tiếng Ý của chàng Việt'
    ];

    let sharingsContents = [
        `Chia sẻ về hành trình du học của 
            mình, Vân cho biết: Em không có 
            ý định du học ngay từ đầu, mãi 
            đến hè năm lớp 10 lên lớp 11 em 
            mới bắt đầu nhen nhóm ý tưởng.`,
        `Nghĩa có tình yêu đặc biệt 
            dành cho Italy. Với anh, Italy là nơi 
            Nghĩa học tập để mở mang nhận 
            thức lẫn trái tim . Anh ấn tượng với 
            các công trình kiến trúc.`,
        `Trước khi đi du học, Hoàng Anh là 
            niềm tự hào của gia đình khi luôn 
            đạt danh hiệu học sinh giỏi 12 
            năm liên tiếp.`,
        'Chia sẻ về hành trình của Hiếu, trước đây chưa từng học ngoại ngữ. Nhưng từ học tiếng Ý, anh càng cảm thấy thích thú và hấp dẫn.',
        'Phong có một niềm đam mê đặc biệt dành cho Italy. Với anh, việc học tiếng Ý không chỉ giúp anh hiểu thêm về nước Ý và còn giúp cho anh mở mang nhiều kiến thức lý thú hơn.'
    ];

    let sharingsImages = [
        './assets/images/person/quynh.jpg',
        './assets/images/person/nghia.jpg',
        './assets/images/person/ha.jpg',
        './assets/images/person/hieu.jpg',
        './assets/images/person/phong.jpg'
    ];

    let sharingsTimes = [
        '14/11/2023',
        '12/11/2023',
        '12/10/2023',
        '16/09/2023',
        '01/06/2023'
    ];

    let initialSharingsTitles = sharingsTitles.slice(0, 3);
    let initialSharingsContents = sharingsContents.slice(0, 3);
    let initialSharingsImages = sharingsImages.slice(0, 3);
    let initialSharingsTimes = sharingsTimes.slice(0, 3);

    function printInitialSharings() {
        let container = $('.row-sharings');

        for (let i = 0; i < initialSharingsTitles.length; i++) {
            // Check if any of the details is empty
            if (!initialSharingsTitles[i] || !initialSharingsContents[i] || !initialSharingsImages[i] || !initialSharingsTimes[i]) {
                continue; // Skip this iteration if any detail is empty
            }

            let sharingPersonDiv = $('<div class="school-sharings-people rp col-md-4 col-sharings col-sm-12"></div>');
            let sharingsAvatarDiv = $('<div class="school-sharings-avatar"></div>');
            let sharingsImage = $('<img class="sharings-image" src="" alt="">');
            let sharingsDetailDiv = $('<div class="school-sharings-detail"></div>');
            let sharingsTitle = $('<h5 class="sharings-title"></h5>');
            let sharingsContent = $('<p class="sharings-content"></p>');
            let sharingsFooterDiv = $('<div class="school-sharings-footer"></div>');
            let sharingsHistoryIcon = $('<i class="fas fa-history"></i>');
            let sharingsTime = $('<span class="sharings-time"></span>');

            sharingsImage.attr('src', initialSharingsImages[i]);
            sharingsTitle.text(initialSharingsTitles[i]);
            sharingsContent.text(initialSharingsContents[i]);
            sharingsTime.text(initialSharingsTimes[i]);

            sharingsHistoryIcon.append(sharingsTime);

            sharingsAvatarDiv.append(sharingsImage);
            sharingsDetailDiv.append(sharingsTitle);
            sharingsDetailDiv.append(sharingsContent);

            sharingsFooterDiv.append(sharingsHistoryIcon);

            sharingPersonDiv.append(sharingsAvatarDiv);
            sharingPersonDiv.append(sharingsDetailDiv);
            sharingPersonDiv.append(sharingsFooterDiv);

            container.append(sharingPersonDiv);
        }
    }

    printInitialSharings();

    // Handle Arrow
    let arrowLeft = $('.fa-sharings-left');
    let arrowRight = $('.fa-sharings-right');

    let currentIndex = 0;

    function refreshSharings() {    
        $('.row-sharings').empty();
        printInitialSharings();
    }

    arrowLeft.on('click', function () {
        while (currentIndex > 0) {
            currentIndex--;

            if (sharingsTitles[currentIndex] && sharingsContents[currentIndex] && sharingsImages[currentIndex] && sharingsTimes[currentIndex]) {
                initialSharingsTitles.pop();
                initialSharingsTitles.unshift(sharingsTitles[currentIndex]);

                initialSharingsContents.pop();
                initialSharingsContents.unshift(sharingsContents[currentIndex]);

                initialSharingsImages.pop();
                initialSharingsImages.unshift(sharingsImages[currentIndex]);

                initialSharingsTimes.pop();
                initialSharingsTimes.unshift(sharingsTimes[currentIndex]);

                $('.row-sharings').animate({
                    'margin-left': '+=200px' 
                }, 300, function() {
                
                    refreshSharings();
                    $(this).css('margin-left', '0'); 
                  
                });
                break;
            }
        }
    });

    arrowRight.on('click', function () {
        while (currentIndex < sharingsTitles.length - 1) {
            currentIndex++;
    
            if (sharingsTitles[currentIndex + 2] && sharingsContents[currentIndex + 2] && sharingsImages[currentIndex + 2] && sharingsTimes[currentIndex + 2]) {
                initialSharingsTitles.shift();
                initialSharingsTitles.push(sharingsTitles[currentIndex + 2]);
    
                initialSharingsContents.shift();
                initialSharingsContents.push(sharingsContents[currentIndex + 2]);
    
                initialSharingsImages.shift();
                initialSharingsImages.push(sharingsImages[currentIndex + 2]);
    
                initialSharingsTimes.shift();
                initialSharingsTimes.push(sharingsTimes[currentIndex + 2]);
    
                $('.row-sharings').animate({
                    'margin-left': '-=200px' 
                }, 300, function() {
                
                    refreshSharings();
                    $(this).css('margin-left', '0'); 
                  
                });
                break;
            }
        }
    });
});



