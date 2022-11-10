const submitBtn = document.getElementById('submitBtn')
let booksInLibrary = document.getElementById('booksInLibrary')
let bookName;
let pages;
let readStatus;
let myLibrary =[]

//actions which take place upon hitting the submit button
submitBtn.onclick = function addBookToLibrary(){
    bookName = document.getElementById('bookName').value;
    myLibrary.push(bookName)
    temp();
    document.getElementById('bookName').value = ""
    console.log(myLibrary)
}

let holdsBook="";
function temp()
{
    booksInLibrary.textContent=myLibrary;
}



document.getElementById('resetBtn').onclick = function clearLibrary(){
    myLibrary=[]
    booksInLibrary.textContent="Books present"
    console.log(myLibrary)
}