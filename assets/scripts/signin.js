const signinForm = document.querySelector(".form");

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const info = signinForm.querySelectorAll('input');
    const data = {
        email: info[0].value,
        password: info[1].value
    };

    axios.post(`http://localhost:4000/auth/signin`, data)
    .then(res => {
        window.open('/homepage');
    }).catch(err => {
        alert('Erro! Tente novamente!');
        console.log(err);
    });
});