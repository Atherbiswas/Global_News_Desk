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
        const {image_url, title , details, author, total_view} = item;
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card mb-3 border border-0">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title fw-bolder">${title}</h5>
        <p class="card-text">${details.length > 338 ? details.slice(0, 338) + '(...)' : details}</p>
        <div class="row gap-4 mt-2">
            <div class="col-12 col-md-3">
            <img src="${author.img}" class="author-img" alt="...">&nbsp;&nbsp;
            <p>${author.name ? author.name : 'autor'}</p>
            </div>
            <div class="col-12 col-md-3 mt-4">
            <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
          </svg>&nbsp;</span>${total_view}</p>
            </div>
            <div class="col-12 col-md-3 text-end">
            <button type="button" class="btn btn-info mt-4">Details News <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg></span></button>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
    `;
    newscontainer.appendChild(newsDiv);
})    
}
loadAllCategory();