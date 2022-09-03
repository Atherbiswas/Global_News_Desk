//load category from api link...
const loadAllCategory = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayAllCategory(data.data.news_category))
}
// Display to Ui all category list...
const displayAllCategory = categories => {
    categories.forEach(category => {
        // console.log('amar data',category)
        const allCategory = document.getElementById('all-category');
        const li = document.createElement('li');
        li.classList.add('nav-item')
        li.innerHTML = `
        <a class="nav-link active p-2 mx-3 fs-5 text-black-50 fw-semibold" aria-current="page" onclick="loadPerCategoryNews('${category.category_id}')" href="#">${category.category_name}</a>
        `;
        allCategory.appendChild(li);
        // console.log('amar data', category.category_id )
    })
}
// Every category load news from api...
const loadPerCategoryNews = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPercategoryNews(data?.data))
    
}
const displayPercategoryNews = category => {
    const newscontainer = document.getElementById('news-container');
    newscontainer.innerHTML = '';
    category.forEach(item => {
        console.log(item)
        const {image_url, title , details, author} = item;
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${details.length > 338 ? details.slice(0, 338) + '(...)' : details}</p>
        <div class="author">
            <img src="${author.img}" class="img-fluid" alt="...">
            <p>${author.name}</p>
            </div>
      </div>
    </div>
  </div>
</div>
    `;
    newscontainer.appendChild(newsDiv);
})    
}