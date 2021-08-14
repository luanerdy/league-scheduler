// Simular participantes
const data = [
  {
    name: 'Luan',
    status: 1,
    avatar: 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg',
  },
  {
    name: 'Rafa',
    status: 2,
    avatar: 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg',
  },
  {
    name: 'Victor',
    status: 3,
    avatar: 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg',
  },
  {
    name: 'Marcos',
    status: 4,
    avatar: 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg',
  },
];

const listOfParticipants = document.getElementById('participants-list');

function createLi() {
  const li = document.createElement('li');
  return li;
}

function createImg() {
  const img = document.createElement('img');
  return img;
}

function createAvatar(avatarImg) {
  const img = createImg();
  img.classList.add('user-avatar');
  img.src = avatarImg;
  img.alt = 'Avatar';
  return img;
}

function generateList(list, data) {
  data.forEach((el) => {
    const li = createLi();
    li.classList.add('participant');
    li.textContent = el.name;
    li.appendChild(createAvatar(el.avatar));
    list.appendChild(li);
  });
}

generateList(listOfParticipants, data);
