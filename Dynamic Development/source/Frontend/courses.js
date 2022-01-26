
// URI changes in the 10th place, ?category=id,where the id changes.
let id = window.location.search[10];

function onChangeId() {

    // console.log(id);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    };
    //fetch the appropriate data according to id. 
    fetch(`https://elearning-aueb.herokuapp.com/courses/search?category=${id}`)
    .then(response => {
        // Status code from 200 to 400 means that everything is fine with the fetch.
        if (response.status >= 200 && response.status <= 400) {
            // console.log(response.status);
            return response.json();
        }
        else {
            throw "HTTP ERROR";
        }
    })
        .then((jsonData) => {
            // We used handlebars in order to take the results and present them into our screen. Handlebars' definition is in the html file.
            const results = jsonData.map(element => element.title);
            var rawTemplate = document.getElementById("handlebars-demo").innerHTML;
            var compiledTemplate = Handlebars.compile(rawTemplate);
            var ourGeneratedHTML = compiledTemplate(jsonData);

            var coursesContainer = document.getElementById("courses-container");
            coursesContainer.innerHTML = ourGeneratedHTML;
        })



}


// Load Categories
const loadCategories = async () => {
    try {
        const res = await fetch('https://elearning-aueb.herokuapp.com/categories');
        categories = await res.json();
        displayCategories(categories);
        console.log(categories);
        
    } catch (err) {
        console.error(err);
    }
};

//Print Categories
// Categories are located in the left side of the screen. Each category is a reference for course.html where more info for the courses is available.
const displayCategories = (_categoriess) => {
    const htmlString = _categoriess
        .map((_category) => {
            return `
            <li class="character">
                
                <a href="courses.html?category=${_category.id}">Category ${_category.id}</a>
                <p>Title: ${_category.title}</p>
               
               
            </li>
        `;
        })
        .join('');
        resultsList.innerHTML = htmlString;
};


addEventListener("load",loadCategories);
onChangeId();
