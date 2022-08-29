// kanye quotes 
const loadQuotes = () => {
    const URL = "https://api.kanye.rest/"
    fetch(URL)
        .then(res => res.json())
        .then(data => displayQt(data))

}
const displayQt = qt => {
    const bloqt = document.getElementById('quotes')
    bloqt.innerHTML = qt.quote;
    console.log(qt);
}
