const groupList = document.querySelector('#grouplist');

const getGroups = () => {
	const token = JSON.parse(localStorage.getItem('userData')).token;
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	axios
		.get('https://leaguescheduler-api.herokuapp.com/groups', config)
		.then((res) => {
			res.data.map((group) => {
				groupList.innerHTML += `
                <div class="subcontainer2">
                    <h2>${group.name}</h2>
                </div>`;
			});
		});
};
