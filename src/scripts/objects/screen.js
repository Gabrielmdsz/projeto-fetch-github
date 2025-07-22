const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                        <img src="${user.avatarUrl}" alt="Foto do perfil do Usuário" />
                        <div class="data">
                           <h1>${user.name ?? 'Não posssui nome cadastrado ;-;'}</h1>
                          <p>${user.bio ?? 'Não possui bio cadastrada ;-; '}</p>
                          <div class="follow"> 
                          <p>👥Followings: ${user.following}</p><p>👥Followers: ${user.followers}</p>
                          </div>
                        </div>
                        </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<div>
                                                                <li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>
                                                                <p>🍴${repo.forks_count}⭐${repo.stargazers_count}👀${repo.watchers_count}👨‍💻${repo.language ?? "Não detectado"}</p>
                                                                </div>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ""
        user.events.forEach(event => eventsItens += `<li><strong>${event.repo.name}</strong>   -   ${event.payload.commits?.[0]?.message ?? 'Sem mensagem de commit'} </li>` );
        
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }