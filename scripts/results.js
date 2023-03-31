const resultsList = document.getElementById('results')

new URLSearchParams(window.location.search).forEach((value, id) => {
    resultsList.append(`${id}: ${value}`)
    resultsList.append(document.createElement('br'))
})