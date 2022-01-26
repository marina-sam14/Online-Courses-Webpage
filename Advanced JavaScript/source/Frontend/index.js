const coursesList = document.getElementById('courses_list');
const searchBar = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
let categories = [];


function onSearch() {
    let input = searchBar.value;
    if (searchBar.value.trim().length === 0) {
        return;
    }
    onSearchBook(input);

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


// This function has an argument which is the keyword that the search is taken place.
function onSearchBook(input) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    // Fetch the data according to input 
    fetch("https://elearning-aueb.herokuapp.com/courses/search?title=" + input)
        .then(response => {
            // Status code from 200 to 400 means that everything is fine with the fetch.
        if (response.status >= 200 && response.status <= 400) {
            console.log(response.status);
            return response.json();
        }
        else {
            throw "HTTP ERROR";
        }

        })
        .then((jsonData) => {
            // We used handlebars in order to take the results and present them into our screen. Handlebars' definition is in the html file.
            const results = jsonData.map(element => element.title);
            //renderResults(results)
            var rawTemplate = document.getElementById("handlebars-demo").innerHTML;
            var compiledTemplate = Handlebars.compile(rawTemplate);
            var ourGeneratedHTML = compiledTemplate(jsonData);

            var coursesContainer = document.getElementById("results-container");
            coursesContainer.innerHTML = ourGeneratedHTML;
        })

}

//Show searched courses
function renderResults(results) {
    const list = document.getElementById("resultsList");
    list.innerHTML = ""; //Clearing all the children in each search
    results.forEach(result => {
        const element = document.createElement("li");
        element.innerText = result;
        list.appendChild(element);
    });
}



loadCategories();















































