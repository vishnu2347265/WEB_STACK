const fetchButton = document.getElementById("fetchBooks");
const bookList = document.getElementById("booklist");
var booklist=[];
fetchButton.addEventListener("click", async ()=> {
    const apiUrl = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=v8wv1c5u7u5NUATw7wxAPBHvIACOp2n5"; 

	await fetch(apiUrl).then((res)=>
	{
		res.json().then((data)=>
		{
		
			booklist=data.results.books;
			console.log(data);
			for(let i=0;i<booklist.length;i++)
			{
				var book=document.createElement('div');
				book.className="bookdata";
				book.innerHTML=  `<div  class="table"><b> Title:</b> ${booklist[i].title} <br> <b> Author: </b> ${booklist[i].author}  <br> <b> Description: </b> ${booklist[i].description} </div>`;
				document.getElementById("booklist").appendChild(book);
			}
		})
	}).catch((err)=>
	{
		console.log(err);
	})
})

