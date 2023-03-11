function navToggle() {
    let hdrNavigation = document.querySelector('.hdrNavigation');
    if (hdrNavigation.style.display === 'none' || hdrNavigation.style.display === '') {
        hdrNavigation.style.display = 'block';
    } else {
        hdrNavigation.style.display = 'none';
    };
};