const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const apellido = document.querySelector('#apellido').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const genero = document.querySelector('#genero').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({nombre: nombre, apellido: apellido, email: email, password: password, genero: genero})
    localStorage.setItem('users', JSON.stringify(Users))
    window.location.href = './IniciarSeccion.html'

})