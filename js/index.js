const user = JSON.parse(localStorage.getItem('currentUser'));

if (!user) {
    window.location.href = './index.html';
}

const logout = document.querySelector('#logout');

logout.addEventListener('click', () => {
    alert('Hasta pronto!');
    localStorage.removeItem('currentUser');
    window.location.href = './index.html';
});
