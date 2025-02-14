const loader1 = document.querySelector('.loader1');
const loader2 = document.querySelector('.loader2')
const content = document.querySelector('.main');

window.onload = function() {
    document.body.classList.add('no-background');

    setTimeout(function() {
        document.body.classList.remove('no-background');
    }, 4500);
};

window.addEventListener('load', () => {
    setTimeout(() => {
        loader1.style.display = 'none';
        loader2.style.display = 'none';
        content.style.display = 'block';
    }, 4500);
});

window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','Respectful', 'Loyal', 'Thoughtful', 'Caring'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
});

const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navigation.classList.remove('active');
    });
});