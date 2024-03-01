document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.ba-slider');
    const handle = document.querySelector('.slider-handle');
    const imgOverlay = document.querySelector('.img-overlay');

    const slideReady = (e) => {
        e.preventDefault();
        document.addEventListener('mousemove', slideMove);
        document.addEventListener('mouseup', slideFinish);
    };

    const slideMove = (e) => {
        let rect = slider.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let width = slider.offsetWidth;
        if (x < 0) x = 0;
        else if (x > width) x = width;

        handle.style.left = x + 'px';
        imgOverlay.style.clip = `rect(0, ${x}px, ${rect.height}px, 0)`;
    };

    const slideFinish = () => {
        document.removeEventListener('mousemove', slideMove);
        document.removeEventListener('mouseup', slideFinish);
    };

    handle.addEventListener('mousedown', slideReady);
});




document.addEventListener('DOMContentLoaded', function() {
    const beforeImage = document.querySelector('.before-image');
    const afterImage = document.querySelector('.img-overlay img');
    const prevButton = document.getElementById('prevImage');
    const nextButton = document.getElementById('nextImage');

    // 假设图片数组
    const images = [
        { before: './assets/img/Lway/ours.jpg', after: './assets/img/Lway/stablesr.jpg' },
        { before: './assets/img/Lway/ours2.jpg', after: './assets/img/Lway/stablesr2.jpg' }
        // 添加更多图片路径
    ];

    let currentIndex = 0; // 当前图片索引

    // 更新图片函数
    function updateImages(index) {
        beforeImage.src = images[index].before;
        afterImage.src = images[index].after;
    }

    // 上一张图片
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImages(currentIndex);
        } else {
            // 如果已经是第一张图片，可以选择循环到最后一张
            currentIndex = images.length - 1;
            updateImages(currentIndex);
        }
    });

    // 下一张图片
    nextButton.addEventListener('click', function() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateImages(currentIndex);
        } else {
            // 如果已经是最后一张图片，可以选择循环到第一张
            currentIndex = 0;
            updateImages(currentIndex);
        }
    });
});
