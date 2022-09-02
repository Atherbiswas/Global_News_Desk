//load category from api link...
const loadAllCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayAllCategory(data.data.news_category))
}
// Display to Ui all category list...
const displayAllCategory = categories => {
    for(const category of categories){
        // console.log(category)
        const allCategory = document.getElementById('all-category');
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
        <a class="nav-link active p-2 mx-3 fs-5 text-black-50 fw-semibold" aria-current="page" onclick="loadPerCategoryNews('${category.category_id}')" href="#">${category.category_name}</a>
        `;
        allCategory.appendChild(li);
    }
}
// Every category load news from api...
const loadPerCategoryNews = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPercategoryNews(data.data[0]))
}
const displayPercategoryNews = category => {
    console.log(category)
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = `
    <div class="col-md-4">
        <img src="${category.thumbnail_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${category.title}</h5>
            <p class="card-text">${category.details}</p>
            <div class="player">
            <img src="..." class="img-fluid" alt="...">
            <p class="player-name">John Smith</p>
            </div>
        </div>
    </div>
    `;
}

 