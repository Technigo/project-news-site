const mainNews = document.getElementById('mainNewsCard')
const gridNews = document.getElementById('gridNewsCard')


fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=EW6VIEkH86qFPuhG7gGWGEWDMPGXjmzm')

  .then((response) => {
    return response.json()
  })
  .then((json) => {
    console.log(json)
    mainNews.innerHTML = `
    <img class="main-image" src="${json.results[0].multimedia[2].url}" alt="Picture from latest news">
    <a href="${json.results[0].url}" class="text-wrapper"><h2><span>Right now:</span> ${json.results[0].title}</h2>
    <h3>${json.results[0].abstract}</h3></a>
    `

    json.results.slice(1).forEach((results) => {
      gridNews.innerHTML += `
      <img class="grid-image" src="${results.multimedia[2].url}" alt="Picture from latest news">
      <a href="${results.url}" class="grid-text-wrapper"><h4>${results.title}</h4>
      <h5>${results.abstract}</h5></a>
    `

    })

  })
