function submitted() {
    alert("Form Submitted")
}
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('.sidebarGo');
})