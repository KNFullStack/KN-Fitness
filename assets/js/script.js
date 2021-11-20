// Code taken from https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-navbar-on-click thanks to user "Zim".
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {
    toggle: false
})
navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        bsCollapse.toggle()
    })
})