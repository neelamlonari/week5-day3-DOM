let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainEl = document.querySelector( '#main-title');
  mainEl.innerHTML ="Something shorter";


  // Part 2
  document.body.style.backgroundColor='#FFC0CB';

  // Part 3
 const list =document.getElementById("favorite-things");
 list.removeChild(list.lastElementChild);

  // Part 4
document.querySelectorAll('.special-title').forEach((item) => {
  item.style.fontSize='2rem';

})
 // Part 5
  /*let chicagiItem=document.querySelectorAll('#past-races li:nth-child(4)')
  chicagoItem.parentNode.removeChild('chicagoItem')*/
document.querySelectorAll('#past-races > li').forEach((item) => {
  if(item.textContent.trim() === 'Chicago'){
    document.querySelector('#past-races').removeChild(item)
  }
})
  
  // Part 6
const li = document.createElement('li');
li.textContent = 'North Carolina';
document.querySelector('#past-races').appendChild(li);

  // Part 7

const blogPost = document.createElement('div');
blogPost.classList.add('blog-post');
blogPost.className="blog-post purple";
const heading = document.createElement('h1');
heading.textContent = 'North Carolina';
const pEl = document.createElement('p');
pEl.textContent = 'My hometown in Queens, NC';

document.querySelector('.main').appendChild(blogPost);

blogPost.appendChild(heading);
blogPost.appendChild(pEl);

  // Part 8
 /* console.log(document.querySelectorAll('#quote-title'));
 document.querySelectorAll('#quote-title').addEventListener("click" ,randomQuote())*/
 document.querySelector('#quote-title').addEventListener('click', (evt) => {
  randomQuote()
})
  // Part 9
/*document.querySelectorAll('.blog-post').forEach((item)=>{
  item.addEventListener('mouseout',(event) => {
item.currentTarget.classlist.toggle('purple');
  }
  )
   item.addEventListener('mouseenter', (evt) =>{
    item.stoppropogation();
    item.currentTarget.classList.toggle('red');
  })
 }
)*/ const blogPosts = document.querySelectorAll(".blog-post");

  blogPosts.forEach(function (element) {
    
    element.addEventListener("mouseout", function () {
      element.classList.toggle("purple");
    });

    element.addEventListener("mouseenter", function () {
      element.classList.toggle("red");
    });
  });

})




