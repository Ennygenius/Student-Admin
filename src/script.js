const icon = document.querySelector('.icon');
const links = document.querySelectorAll('.nav-list');

icon.addEventListener('click', () => {
    console.log(links);

    links.forEach(link => {
        link.classList.toggle('active');
    });
});