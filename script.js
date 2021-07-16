
const catList = document.getElementById('catList');
const searchBar = document.getElementById('searchBar');
let kvCat= []; // kvcat its just kishorevijay cat for reference 

// console.log(searchBar); ITS JUST FOR TESTING THE OUTPUT 

// BELOW PART FOR SEARCH OPTION AND FETCHING DATA FROM THE API USING AWAIT & ASYNC , FOR ERROR : TRY & CATCH USED

searchBar.addEventListener('keyup', (k) => {
    const searchString = k.target.value;

    const filteredtags = kvCat.filter((cat) => {
        return (
         cat.id.includes(searchString) ||
         cat.tags.includes(searchString) || cat.created_at.includes(searchString)
        );
    });
    displayCat(filteredtags);
});

const loadCat = async () => {
    try {
        const res = await fetch('  https://cataas.com/api/cats?tags=cute');
        kvCat = await res.json();
        displayCat(kvCat);
    } catch (err) {
        console.error(err);
    }
};


// INSIDE OF THE BELOW FUNCTION IF WE NEED TO SHOW IMAGE FOR EACH AND EVERY CAT JUST ADD THE SOURCE BELOW TO <P> TAG , IMAGE : <img src="https://cataas.com/cat/id ">

const displayCat = (cat) => {
    const htmlString = cat
        .map((cat) => {
            return `
            <li class="cat">
                <h2>${cat.id}</h2>
                <h4>${cat.created_at}</h4>
                <p>tags: ${cat.tags}</p>     
            </li>  `;
        })
        .join('');
    catList.innerHTML = htmlString;
};

// THIS IS FOR POPUP FUNCTION : WHEN WE CLICK ONCE THE POPUP IMG WILL COME AND CLICK AGAIN THE POPUP WILL CLOSE

    function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }
  

loadCat();
