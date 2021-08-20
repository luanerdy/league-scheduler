const createGroupForm = document.querySelector('#container-geral');

const handleSubmit = event => {
    event.preventDefault();
    const name = createGroupForm.querySelector('#name');
    const image = createGroupForm.querySelector('#image');
    const description = createGroupForm.querySelector('#descri');
    const token = JSON.parse(localStorage.getItem('userData')).token;
    const data = {
        name,
        image,
        description
    };
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    axios.post('https://leaguescheduler-api.herokuapp.com/groups/new', data, config)
    .then(res => {
        window.location.href = '/';
    });
};

createGroupForm.addEventListener('submit', handleSubmit);
