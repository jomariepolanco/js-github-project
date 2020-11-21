const form = document.querySelector("#github-form")
const userList = document.querySelector("#user-list")
// console.log(userList)

form.addEventListener("submit", event => {
    event.preventDefault()
    const input = event.target.search.value 
    searchFetchRequest(input)
})

const searchFetchRequest = searchValue => {
    return fetch(`https://api.github.com/search/users?q=${searchValue}`)
        .then(response => response.json())
        .then(gitHubMatches => renderSearchResults(gitHubMatches.items))
}

const renderSearchResults = (data) => {
    data.forEach(user => {
        const userH3 = document.createElement("h3")
        userH3.textContent = user.login
        userH3.dataset.id = user.id 
        const userImg = document.createElement("img")
        userImg.src = user.avatar_url 
        const userLink = document.createElement("a")
        userLink.href = user.html_url 
        userLink.textContent = user.html_url 
        userH3.append(userLink, userImg)
        userList.append(userH3)
    })
}