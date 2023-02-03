document.querySelector("form").
addEventListener('submit',(e)=>
{e.preventDefault();



    const numOfUsers = document.querySelector('[name = numofusers]').value;
    const nationalities = document.querySelector('[name = nationalities]').value;


    fetch(`https://randomuser.me/api/?results=${numOfUsers}&nat=${nationalities}`)
    .then((result)=> result.json() )
    .then((data) =>{

        const users = data.results;
        const htmlData = users.map((user) =>`
        <div class = "users">
        <img src="${user.picture.large}" alt="Avatar of ${user.name.first} ${user.name.last}" />
        <div>
        ${user.name.first} ${user.name.last} ${`(${user.dob.age})`} 
        </div>
        <div>
        ${user.email}
        </div>
        <div>
        ${user.location.city} ${`,`} ${user.location.state} ${`,`} ${user.nat}
        </div>
        </div>
        `).join("");
        document.querySelector(".js-users").innerHTML = htmlData;

    });
});