axios.get("https://leonardoapi.onrender.com/songs")

    .then(
        (res) => {
            const contenedor = document.getElementById('track-list')

            //recorrer las canciones//
            res.data.songs.map(
                (song) => {
                    //esto se repite por cada canción

                    const songHtml = document.createElement('div')
                    songHtml.classList.add('main-content__item')

                    songHtml.innerHTML = `
                            <img src="${song.path.front}" alt="Portada de una canción">
                            <div>
                                <p>${song.title}</p>
                                <p>${song.author}</p>
                            </div>
                    `

                    songHtml.addEventListener('click', () =>{
                        document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                        document.getElementById('current-song-img').setAttribute('src', song.path.front)
                        document.getElementById('current-song-title').innerHTML = song.title
                        document.getElementById('current-song-author').innerHTML = song.author
                    })


                    contenedor.appendChild(songHtml)


                }
            )
        }


    )
