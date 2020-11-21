const form = document.querySelector("#github-form")
const userList = document.querySelector("#user-list")
console.log(userList)

form.addEventListener("submit", event => {
    event.preventDefault()
    const input = event.target.search.value 
    searchFetchRequest(input)
})

const searchFetchRequest = searchValue => {
    return fetch(`https://api.github.com/search/users?q=${searchValue}`)
        .then(response => response.json())
        .then(gitHubMatches => console.log(gitHubMatches))
}