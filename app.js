console.log("Let's get this party started!");
const cardsContainer = document.querySelector('#gifContainer');

async function getGif(q) {
	let res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: { api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym', limit: '20', q }
	});
	let { title, rating, id } = res.data.data[Math.floor(Math.random()*20)];
    createGif(title,rating,id);
}



//create the gif and container while adding it to the DOM
function createGif(title,rating,id){
    const newCardContainer = document.createElement("div");
    newCardContainer.classList.add("col-3","m-1");
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.setAttribute("src",`https://media.giphy.com/media/${id}/giphy.gif`);
    cardImg.setAttribute("alt",title);
    const cardBody = document.createElement('div');
    cardBody.classList.add("card-body");
    const cardText1 = document.createElement('p');
    cardText1.classList.add("card-text");
    cardText1.innerHTML=`<strong>Title: </strong>${title}`;
    const cardText2 = document.createElement('p');
    cardText2.classList.add("card-text");
    cardText2.innerHTML=`<strong>Rating: </strong>${rating}`;
    cardBody.append(cardText1,cardText2);
    newCard.append(cardImg,cardBody);
    newCardContainer.append(newCard);
    cardsContainer.append(newCardContainer);
}

//Create cards when search
const search = document.querySelector('#search');
search.addEventListener('click', async function() {
	const searchText = document.querySelector('#searchText');
	getGif(searchText.value);
	searchText.value = '';
});

//Remove all gifs when click
const removeSearch = document.querySelector('#clear');
removeSearch.addEventListener('click', function() {
	cardsContainer.innerHTML = '';
});
