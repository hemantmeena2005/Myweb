const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05
});
console.log('hemant');

var elems = document.querySelectorAll('.sec');

var pic = document.querySelector('#pic');

elems.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        var bg = e.getAttribute('data-img');
        pic.style.backgroundImage = `url(${bg})`;
    });
});

function changeBackgroundColor(color, p) {
    document.getElementById('color').style.backgroundColor = color;
    document.getElementById('right').innerText = p;
}

function resetBackgroundColor() {
    document.getElementById('page8').style.backgroundColor = 'rgb(49, 138, 255)';
}

// Check if Shery.js is correctly included
if (typeof Shery !== 'undefined' && Shery.mouseFollower) {
    Shery.mouseFollower();
}


Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",/
    // duration: 1,
  });

