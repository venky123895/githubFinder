const searchInput=document.getElementById('input');
const clickButton=document.getElementById('but');
const container=document.getElementById('container');

init()

function init(){
    getUsers()
    clickButton.addEventListener('click',getUsers);
}

async function getUsers(){
    const streamResponse = await fetch(`https://api.github.com/search/users?q=${searchInput.value}`)
    const textResponse = await streamResponse.text();
    const jsonResponse=JSON.parse(textResponse);
    renderUsers(jsonResponse.items);
}

function renderUsers(userData){
    let html=``;
    for(let i=0;i<userData.length;i++){
        const profilePictureUrl=userData[i]['avatar_url'];
        const profileUrl=userData[i]['html_url'];
        const userName=userData[i]['login'];
        html += ` <div class="profile">
        <img src="${profilePictureUrl}" class="profile_image" alt="profile"/>
        <h3 class="username">${userName}</h3>
        <a class="link" href='${profileUrl}'>visit</a>
    </div>`;
    }
    container.innerHTML=html;
}