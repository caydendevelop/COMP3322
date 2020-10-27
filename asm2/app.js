// let body = document.getElementsByTagName('body')[0];
// let headerBlock = document.createElement('header');
// headerBlock.id = 'headerBlockID';
// headerBlock.className = 'headerBlockCSS';
// headerBlock.innerHTML = hihi;
// body.appendChild('headerBlock');

function myHeader() {
    let headerBlock = document.createElement("header")
    return(

    headerBlock.id = 'headerBlockID';
    headerBlock.className = 'headerBlockCSS';
    headerBlock.innerHTML = "Some title";
    document.body.appendChild(headerBlock);
    )
}

// var myDiv = document.createElement("div");
//
// //Set its unique ID.
// myDiv.id = 'div_id';
//
// //Add your content to the DIV
// myDiv.innerHTML = "<h1>Hello World!</h1>";
//
// //Finally, append the element to the HTML body
// document.body.appendChild(myDiv);

// document.write('<div> hi </div>')