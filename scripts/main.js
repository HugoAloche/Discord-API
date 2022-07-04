window.addEventListener('load', initApp)

function initApp () {
    fetch('https://discord.com/api/guilds/990896868793925632/widget.json')
        .then(res => {
            res.json().then(data => {
                console.log(data)
            })
    })
}
