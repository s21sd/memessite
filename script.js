// this is the free memes generator site
let searchButton = document.querySelector('#search')
let meme = document.querySelector('.memes img');
let my = document.querySelector('.my');

const updateDetails = (data) => {

    meme.setAttribute("src", data.url);



}



const sendApiReq = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((Response) => Response.json()
            .then(data => {
                updateDetails(data);
            })

        );

};


searchButton.addEventListener("click", () => {

    sendApiReq();
})