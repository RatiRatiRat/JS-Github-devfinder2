// const input=document.getElementById("Inputsearch")
// const button=document.getElementById("btn")

// button.addEventListener("click",()=>{
//     const input_value= input.Value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(Response=>Response.json)
//     .then(data => console.log(data))
// })


// const input = document.getElementById("Inputsearch");
// const button = document.getElementById("btn");

// button.addEventListener("click", () => {
//     const input_value = input.value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));
// });


// const input = document.getElementById("Inputsearch");
// const button = document.getElementById("btn");
// const octopusImg = document.querySelector(".octupus");
// const userNameElement = document.getElementById("username");
// const emailElement = document.getElementById("email");

// button.addEventListener("click", () => {
//     const input_value = input.value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Update the HTML elements with the fetched data
//         userNameElement.textContent = data.name;
//         emailElement.textContent = data.email ? data.email : "Email not provided";
//         octopusImg.src = data.avatar_url;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// });

// const input = document.getElementById("Inputsearch");
// const button = document.getElementById("btn");
// const octopusImg = document.querySelector(".octupus");
// const userNameElement = document.getElementById("username");
// const emailElement = document.getElementById("email");
// const reposElement = document.querySelector(".Repos");
// const followersElement = document.querySelector(".Followers2");
// const followingElement = document.querySelector(".Following2");

// button.addEventListener("click", () => {
//     const input_value = input.value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Update the HTML elements with the fetched data
//         userNameElement.textContent = data.name;
//         emailElement.textContent = data.email ? data.email : "Email not provided";
//         octopusImg.src = data.avatar_url;
//         reposElement.textContent = data.public_repos;
//         followersElement.textContent = data.followers;
//         followingElement.textContent = data.following;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// });


// const input = document.getElementById("Inputsearch");
// const button = document.getElementById("btn");
// const octopusImg = document.querySelector(".octupus");
// const userNameElement = document.getElementById("username");
// const createdAtElement = document.getElementById("created_at");
// const reposElement = document.querySelector(".Repos");
// const followersElement = document.querySelector(".Followers2");
// const followingElement = document.querySelector(".Following2");

// button.addEventListener("click", () => {
//     const input_value = input.value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Update the HTML elements with the fetched data
//         userNameElement.textContent = data.name;
//         createdAtElement.textContent = "Joined at " + new Date(data.created_at).toLocaleDateString();
//         octopusImg.src = data.avatar_url;
//         reposElement.textContent = data.public_repos;
//         followersElement.textContent = data.followers;
//         followingElement.textContent = data.following;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// });

// const input = document.getElementById("Inputsearch");
// const button = document.getElementById("btn");
// const octopusImg = document.querySelector(".octupus");
// const userNameElement = document.getElementById("username");
// const createdAtElement = document.getElementById("created_at");
// const bioElement = document.querySelector(".bio"); // Selecting the <p> element for the bio
// const reposElement = document.querySelector(".Repos");
// const followersElement = document.querySelector(".Followers2");
// const followingElement = document.querySelector(".Following2");

// button.addEventListener("click", () => {
//     const input_value = input.value;
//     fetch(`https://api.github.com/users/${input_value}`)
//     .then(response => response.json())
//     .then(data => {
//         // Update the HTML elements with the fetched data
//         userNameElement.textContent = data.name;
//         createdAtElement.textContent = "Joined at " + new Date(data.created_at).toLocaleDateString();
//         bioElement.textContent = data.bio ? data.bio : "No bio available";
//         octopusImg.src = data.avatar_url;
//         reposElement.textContent = data.public_repos;
//         followersElement.textContent = data.followers;
//         followingElement.textContent = data.following;
//     })
//     .catch(error => console.error('Error fetching data:', error));
// });

const input = document.getElementById("Inputsearch");
const button = document.getElementById("btn");
const octopusImg = document.querySelector(".octupus");
const userNameElement = document.getElementById("username");
const createdAtElement = document.getElementById("created_at");
const bioElement = document.querySelector(".bio"); // Selecting the <p> element for the bio
const locationElement = document.querySelector(".location"); // Selecting the <p> element for the location
const reposElement = document.querySelector(".Repos");
const followersElement = document.querySelector(".Followers2");
const followingElement = document.querySelector(".Following2");
const span=document.querySelector(".darkmode")
const body=document.body
const Main=document.querySelector(".main")
const Navbar=document.querySelector(".navbar")
const userarea=document.querySelector(".userarea")
const userinfo=document.querySelector(".userinfo")
const followers=document.querySelector(".followers")
const data=document.querySelector(".data")
const Inputsearch=document.getElementById("Inputsearch")

button.addEventListener("click", () => {
    const input_value = input.value;
    fetch(`https://api.github.com/users/${input_value}`)
    .then(response => response.json())
    .then(data => {
        // Update the HTML elements with the fetched data
        userNameElement.textContent = data.name;
        createdAtElement.textContent = "Joined at " + new Date(data.created_at).toLocaleDateString();
        bioElement.textContent = data.bio ? data.bio : "No bio available";
        locationElement.textContent = data.location ? "Location: " + data.location : "Location not specified";
        octopusImg.src = data.avatar_url;
        reposElement.textContent = data.public_repos;
        followersElement.textContent = data.followers;
        followingElement.textContent = data.following;
    })
    .catch(error => console.error('Error fetching data:', error));
});

span.addEventListener("click", function() {
    body.style.backgroundColor = "#1E2A47";
    Main.style.backgroundColor = "#4B6A9B";
    Navbar.style.backgroundColor = "#4B6A9B";
    userarea.style.backgroundColor = "#4B6A9B";
    userinfo.style.backgroundColor="#4B6A9B";
    followers.style.backgroundColor="#1E2A47"
    data.style.backgroundColor="#1E2A47"
    Inputsearch.style.backgroundColor="#1E2A47"
});
