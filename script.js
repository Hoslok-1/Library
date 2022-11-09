const submitBtn = document.getElementById('submitBtn')
let bookName;
let pages;
let readStatus;
let myLibrary =[]



submitBtn.onclick = function addBookToLibrary(){
    bookName = document.getElementById('bookName').value;
    myLibrary.push(bookName)
    document.getElementById('bookName').value = ""
    console.log(myLibrary)
}









document.getElementById('resetBtn').onclick = function(){
    myLibrary=[]
    console.log(myLibrary)
}