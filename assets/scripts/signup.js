const signupForm = document.querySelector(".form");

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const info = signupForm.querySelectorAll('input');
    const data = {
        name: info[0].value,
        nickname: info[1].value,
        email: info[2].value,
        avatar: info[3].value,
        password: info[4].value
    };

    if(data.password !== info[5].value) {
        return alert('Os campos de senha devem ser iguais!');
    };

    axios.post(`https://leaguescheduler-api.herokuapp.com/auth/signup`, data)
    .then(res => {
        alert('Usuário cadastrado com sucesso');
        window.open('/');
    }).catch(err => {
        alert('Erro! Tente novamente!');
        console.log(err);
    });
});