// لیست کتاب‌ها برای شلوغ کردن سایت

const books = [

    { id: 1, title: "The Art of War", price: "15.00", img: "assets/images/book1.jpg" },

    { id: 2, title: "Atomic Habits", price: "20.00", img: "assets/images/book2.jpg" },

    { id: 3, title: "Great Gatsby", price: "18.00", img: "assets/images/book3.jpg" },

    { id: 4, title: "Sapiens", price: "25.00", img: "assets/images/book4.jpg" }

];

const bookContainer = document.getElementById('book-list');

// نمایش اتوماتیک کتاب‌ها در صفحه

books.forEach(book => {

    bookContainer.innerHTML += `
<div class="col-md-3">
<div class="book-card p-3 text-center">
<img src="${book.img}" class="img-fluid mb-3" alt="${book.title}">
<h5 class="fw-bold">${book.title}</h5>
<p class="text-muted">€${book.price}</p>
<button class="btn btn-mirzaei w-100" onclick="addToCart(${book.id})">Add to Cart</button>
</div>
</div>

    `;

});

function addToCart(id) {

    alert("Book added to your cart!");

}
 
