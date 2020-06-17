window.onload = function () {
    myFunction()
};

function myFunction() {
    const app = document.getElementById('root')
    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    app.appendChild(container)
    var request = new XMLHttpRequest()
    request.open('GET',
        'https://hiit.ria.rocks/videos_api/cdn/com.rstream.crafts?versionCode=40&lurl=Canvas%20painting%20ideas', true)
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            data.forEach(post => {
                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const h1 = document.createElement('h2')
                h1.textContent = post.title

                var img = document.createElement('img')
                img.src = post["medium thumbnail"]


                container.appendChild(card)
                card.appendChild(h1)
                card.appendChild(img)                
                
            })
        } else {
            const errorMessage = document.createElement('marquee')
            errorMessage.textContent = `Gah, it's not working!`
            app.appendChild(errorMessage)
        }
    }

    request.send()
}