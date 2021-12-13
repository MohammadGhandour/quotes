const quote = document.getElementById('quote')

const getQuote = () => {
    fetch ('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = data.content
        })
    fetch ('https://picsum.photos/375/1000')
    .then((res) => {
        document.getElementById('pic').innerHTML = `<img src=${res.url} />`
    })
}



quote.onclick = () => getQuote();
getQuote();