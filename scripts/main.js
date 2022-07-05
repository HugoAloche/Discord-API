window.addEventListener('load', initApp)

async function initApp() {
    await fetch('https://discord.com/api/guilds/990896868793925632/widget.json')
        .then(res => {
            res.json().then(data => {
                document.getElementById('title').innerHTML = data.name
                data.channels.forEach(channel => {
                    const li = document.createElement('li')
                    li.textContent = channel.name
                    document.getElementById('channelList').appendChild(li)
                })
                data.members.forEach(membre => {
                    const li = document.createElement('li')
                    const avatar = document.createElement('img')
                    avatar.src = membre.avatar_url;
                    li.textContent = membre.username
                    li.appendChild(avatar)
                    document.getElementById('userList').appendChild(li)
                })
                console.log(data)
            })
        })
}
