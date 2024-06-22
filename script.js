function moveUnderline(button) {
     const buttons = document.querySelectorAll('.menu button,.');
    const underline = document.querySelector('.underline');
    const index = Array.from(buttons).indexOf(button);
    underline.style.left = `${index * 50}%`;
}