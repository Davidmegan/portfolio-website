const projects = [
    {
        imgSrc: '/todo.png',
        imgAlt: 'todo image',
        title: 'Todo App',
        desc: 'This is a simple Todo app built using <strong>flutter</strong> with <strong>ISAR</strong> database.',
        link: 'https://github.com/Davidmegan/PRODIGY_AD_02'
    },
    {
        imgSrc: '/countdown.jpg',
        imgAlt: 'cooldown image',
        title: 'Countdown website',
        desc: 'A countdown website for the new year using <strong>JS</strong>.',
        link: 'https://github.com/Davidmegan/Countdown'
    },
    {
        imgSrc: '/tic-tac-toe.png',
        imgAlt: 'tic-tac-toe image',
        title: 'TIC-TAC-TOE',
        desc: 'A two player tic-tac-toe game using <strong>python</strong>.',
        link: 'https://github.com/Davidmegan/TIC-TAC-TOE'
    }
];

let projectsHTML = ''

for(let i = 0; i < projects.length; i++) {
    const project = projects[i];
    projectsHTML += `
    <div class="project__card">
        <img class="project__img" src="${project.imgSrc}" alt="${project.imgAlt}">
        <h4 class="project__title">${project.title}</h4>
        <p class="project__desc">${project.desc}</p>
        <a class="btn project__view" href="${project.link}" target="_blank">view</a>
    </div>`;
}

const projectCardsContainer = document.getElementById("projects__collection")

projectCardsContainer.innerHTML = projectsHTML