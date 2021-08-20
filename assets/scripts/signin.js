const signinForm = document.querySelector(".form");

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const info = signinForm.querySelectorAll('input');
    const data = {
        email: info[0].value,
        password: info[1].value
    };

    axios.post(`https://leaguescheduler-api.herokuapp.com/auth/signin`, data)
    .then(res => {
        localStorage.setItem('userData', JSON.stringify(res.data));
        window.open('/homepage');
    }).catch(err => {
        alert('Erro! Tente novamente!');
        console.log(err);
    });
});