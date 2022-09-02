//load category from api link...
const loadAllCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayAllCategory(data.data.news_category))
}
// Display to Ui all category list...
const displayAllCategory = categories => {
    for(const category of categories){
        const allCategory = document.getElementById('all-category');
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
        <a class="nav-link active p-2 mx-3 fs-5 text-black-50 fw-semibold" aria-current="page" href="#">${category.category_name}</a>
        `;
        allCategory.appendChild(li);
    }
}
  