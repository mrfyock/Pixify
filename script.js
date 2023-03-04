const imageSets = [
    {
      id:1,  
      name: 'Andrew Smith',
      title: 'Innocence',
      images: [
        'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
        'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
        'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
      ],
    },
    {
      id:2,
      name: 'Jane Doe',
      title: 'Nature Adventures',
      images: [
        'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
        'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
      ],
    },
    {
      id:3,
      name: 'Irna Tawsen',
      title: 'Faces of the World',
      images: [
        'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
        'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ],
    },
    {
      id:4,
      name: 'Mark Dale',
      title: 'Wild Animals',
      images: [
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
        'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
      ]
    },
    {
    id:5,
    name: 'Irna Townsen',
    title: 'Travel Diaries',
    images: [
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80']
    }
  ];

//card 1//
let card1 = document.getElementById("card1img");
card1.src = imageSets[1].images[0];
let card1title = imageSets[1].title;
let card1name = imageSets[1].name;
let card1details = document.getElementById("oneTitleArtist");
card1details.innerHTML = card1title + " - " + card1name;
const viewGalleryOneBtn = document.getElementById("viewGalleryOneBtn");
viewGalleryOneBtn.innerHTML = "see more";

//card 2//
 const card2 = document.getElementById("card2img");
 card2img.src = imageSets[2].images[0];
const card2title = imageSets[2].title;
const card2name = imageSets[2].name;
const card2details = document.getElementById("twoTitleArtist");
card2details.innerHTML = card2title + " - " + card2name;
const viewGalleryTwoBtn = document.getElementById("viewGalleryTwoBtn");
viewGalleryTwoBtn.innerHTML = "see more";

 //card 3//
 const card3 = document.getElementById("card3img");
 card3img.src = imageSets[3].images[0];
const card3title = imageSets[3].title;
const card3name = imageSets[3].name;
const card3details = document.getElementById("threeTitleArtist");
card3details.innerHTML = card3title + " - " + card3name;
const viewGalleryThreeBtn = document.getElementById("viewGalleryThreeBtn");
viewGalleryThreeBtn.innerHTML = "see more";
 //card 4//
const card4 = document.getElementById("card4img");
card4img.src = imageSets[0].images[0];
const card4title = imageSets[0].title;
const card4name = imageSets[0].name;
const card4details = document.getElementById("fourTitleArtist");
card4details.innerHTML = card4title + " - " + card4name;
const viewGalleryFourBtn = document.getElementById("viewGalleryFourBtn");
viewGalleryFourBtn.innerHTML = "see more";

//card 5//
const card5 = document.getElementById("card5img");
card5img.src = imageSets[4].images[0];
const card5title = imageSets[4].title;
const card5name = imageSets[4].name;
const card5details = document.getElementById("fiveTitleArtist");
card5details.innerHTML = card5title + " - " + card5name;
const viewGalleryFiveBtn = document.getElementById("viewGalleryFiveBtn");
viewGalleryFiveBtn.innerHTML = "see more";

 //card 6//
const card6 = document.getElementById("card6img");
card6img.src = imageSets[1].images[0];
const card6title = imageSets[1].title;
const card6name = imageSets[1].name;
const card6details = document.getElementById("sixTitleArtist");
card6details.innerHTML = card6title + " - " + card6name;
const viewGallerySixBtn = document.getElementById("viewGallerySixBtn");
viewGallerySixBtn.innerHTML = "see more";

//darkmode//

function darkMode() {
const el = document.body;
el.classList.toggle("dark-mode");
  if (el.classList.contains("dark-mode")) {
    button = document.getElementById("darkmode");
    button.innerHTML = "Light Mode";
  } else{
  button = document.getElementById("darkmode");
  button.innerHTML = "Dark Mode";
} 
};


function viewGalleryOne() {
  
  //hide main elements and show gallery
  const main = document.querySelector(".main");
  main.style.display = "none";
  const title = document.getElementById("galleryTitle");
  title.classList.add("title");
  title.innerHTML = imageSets[1].title;
  const name = document.getElementById("galleryArtist");
  name.classList.add("artist");
  name.innerHTML = imageSets[1].name;
  let currentImg = document.getElementById("gallery");
  currentImg.style.display = "block";
  currentImg.src = imageSets[1].images[0];

  // Add next and previous buttons
  const buttonsDiv = document.querySelector(".buttons");
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-btn");
  nextButton.addEventListener("click", nextImage);
  buttonsDiv.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("prev-btn");
  prevButton.addEventListener("click", prevImage);
  buttonsDiv.appendChild(prevButton);
  
  // Add counter element
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${imageSets[1].images.length}`;
  //nextbutton//
  let currentIndex = 0;
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSets[1].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[1].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[1].images.length) % imageSets[1].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[1].images.length}`;
  }
}




function viewGalleryTwo() {
  const main = document.querySelector(".main");
  main.style.display = "none";
  const title = document.getElementById("galleryTitle");
  title.classList.add("title");
  title.innerHTML = imageSets[2].title;
  const name = document.getElementById("galleryArtist");
  name.classList.add("artist");
  name.innerHTML = imageSets[2].name;
  let currentImg = document.getElementById("gallery");
  currentImg.style.display = "block";
  currentImg.src = imageSets[2].images[0];
  // Add next and previous buttons
  const buttonsDiv = document.querySelector(".buttons");
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-btn");
  nextButton.addEventListener("click", nextImage);
  buttonsDiv.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("prev-btn");
  prevButton.addEventListener("click", prevImage);
  buttonsDiv.appendChild(prevButton);
  // Add counter element
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${imageSets[1].images.length}`;
   //nextbutton//
  let currentIndex = 0;
  function nextImage() {
  currentIndex = (currentIndex + 1) % imageSets[2].images.length;
  currentImg.src = imageSets[2].images[currentIndex];
  counter.innerHTML = `${currentIndex + 1} of ${imageSets[2].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[2].images.length) % imageSets[2].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[2].images.length}`;
  }
}
function viewGalleryThree(){
  const main = document.querySelector(".main");
  main.style.display = "none";
  const title = document.getElementById("galleryTitle");
  title.classList.add("title");
  title.innerHTML = imageSets[3].title;
  const name = document.getElementById("galleryArtist");
  name.classList.add("artist");
  name.innerHTML = imageSets[3].name;
  let currentImg = document.getElementById("gallery");
  currentImg.style.display = "block";
  currentImg.src = imageSets[3].images[0];
  // Add next and previous buttons
  const buttonsDiv = document.querySelector(".buttons");
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-btn");
  nextButton.addEventListener("click", nextImage);
  buttonsDiv.appendChild(nextButton);
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("prev-btn");
  prevButton.addEventListener("click", prevImage);
  buttonsDiv.appendChild(prevButton);
  // Add counter element
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${imageSets[3].images.length}`;
    

  //nextbutton//
  let currentIndex = 0;
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSets[3].images.length;
    currentImg.src = imageSets[3].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[3].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[3].images.length) % imageSets[3].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[3].images.length}`;
  }
}
function viewGalleryFour(){
  const main = document.querySelector(".main");
main.style.display = "none";
const title = document.getElementById("galleryTitle");
title.classList.add("title");
title.innerHTML = imageSets[0].title;
const name = document.getElementById("galleryArtist");
name.classList.add("artist");
name.innerHTML = imageSets[0].name;
let currentImg = document.getElementById("gallery");
currentImg.style.display = "block";
currentImg.src = imageSets[0].images[0];
 // Add next and previous buttons
 const buttonsDiv = document.querySelector(".buttons");
 const nextButton = document.createElement("button");
 nextButton.textContent = "Next";
 nextButton.classList.add("next-btn");
 nextButton.addEventListener("click", nextImage);
 buttonsDiv.appendChild(nextButton);
 const prevButton = document.createElement("button");
 prevButton.textContent = "Previous";
 prevButton.classList.add("prev-btn");
 prevButton.addEventListener("click", prevImage);
 buttonsDiv.appendChild(prevButton);
  // Add counter element
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${imageSets[0].images.length}`;
  

  //nextbutton//
  let currentIndex = 0;
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSets[0].images.length;
    currentImg.src = imageSets[2].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[0].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[0].images.length) % imageSets[0].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[0].images.length}`;
  }
}

function viewGalleryFive(){
  const main = document.querySelector(".main");
main.style.display = "none";
const title = document.getElementById("galleryTitle");
title.classList.add("title");
title.innerHTML = imageSets[4].title;
const name = document.getElementById("galleryArtist");
name.classList.add("artist");
name.innerHTML = imageSets[4].name;
let currentImg = document.getElementById("gallery");
currentImg.style.display = "block";
currentImg.src = imageSets[4].images[0];
 // Add next and previous buttons
 const buttonsDiv = document.querySelector(".buttons");
 const nextButton = document.createElement("button");
 nextButton.textContent = "Next";
 nextButton.classList.add("next-btn");
 nextButton.addEventListener("click", nextImage);
 buttonsDiv.appendChild(nextButton);
 const prevButton = document.createElement("button");
 prevButton.textContent = "Previous";
 prevButton.classList.add("prev-btn");
 prevButton.addEventListener("click", prevImage);
 buttonsDiv.appendChild(prevButton);
  // Add counter element
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${imageSets[1].images.length}`;
 
  //nextbutton//
  let currentIndex = 0;
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSets[4].images.length;
    currentImg.src = imageSets[4].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[4].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[4].images.length) % imageSets[4].images.length;
    currentImg.src = imageSets[4].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[4].images.length}`;
  }
}

function viewGallerySix() {
  //hide main elements and show gallery
  const main = document.querySelector(".main");
  main.style.display = "none";
  const title = document.getElementById("galleryTitle");
  title.classList.add("title");
  title.innerHTML = imageSets[1].title;
  const name = document.getElementById("galleryArtist");
  name.classList.add("artist");
  name.innerHTML = imageSets[1].name;
  let currentImg = document.getElementById("gallery");
  currentImg.style.display = "block";
  currentImg.src = imageSets[1].images[0];

  // Add next and previous buttons
  const buttonsDiv = document.querySelector(".buttons");
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-btn");
  nextButton.addEventListener("click", nextImage);
  buttonsDiv.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("prev-btn");
  prevButton.addEventListener("click", prevImage);
  buttonsDiv.appendChild(prevButton);
  
  // Add counter element
  const counter = document.getElementById("counter");
    counter.innerHTML = `1 of ${imageSets[1].images.length}`;
   //nextbutton//
  let currentIndex = 0;
  function nextImage() {
    currentIndex = (currentIndex + 1) % imageSets[1].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[1].images.length}`;
  }
  
  //previousbutton//
  function prevImage() {
    currentIndex = (currentIndex - 1 + imageSets[1].images.length) % imageSets[1].images.length;
    currentImg.src = imageSets[1].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${imageSets[1].images.length}`;
  }
}

// store user entries//
// does not work properly. Once changeViewGalleryOne is called, the page refreshes and loses user data.
const entries = [];

function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
   if(name == ''){
    return "please enter a name";
   }
  const entryTitle = document.getElementById("entryTitle").value;
  if(entryTitle == ''){
    return "please enter a Title";
   }
  const imageUrls = [
    document.getElementById("entry1").value,
    document.getElementById("entry2").value,
    document.getElementById("entry3").value,
    document.getElementById("entry4").value,
    document.getElementById("entry5").value
  ];


  /*ran out of time to get this to work */
//   const entry1 = document.getElementById("entry1").value;
//   if(entry1 == ''){
//     entry1.classList.add("error");
//     } else{
//     imageUrls.push(entry1);
//   }
//  const entry2 = document.getElementById("entry2").value;
//   if(entry2 == ''){
//     return "please enter valid URL's";
//   } else{
//     imageUrls.push(entry2);
//   }
//   const entry3 = document.getElementById("entry3").value;
//   if(entry3 == ''){
//     return "please enter valid URL's";
//   } else{
//     imageUrls.push(entry3);
//   }
//  const entry4 = document.getElementById("entry4").value;
//   if(entry4 == ''){
//     return "please enter valid URL's";
//   } else{
//     imageUrls.push(entry4);
//   }
//   const entry5 = document.getElementById("entry5").value;
//   if (entry5 == ''){
//     return "please enter valid URL's";
//   } else{
//     imageUrls.push(entry5);
//   };


  const newEntry = {
    name: name,
    title: entryTitle,
    images: imageUrls
  };

  // Push the new object into the global entries array
  entries.push(newEntry);

}

// function showError(id){
//   const input = document.getElementsById(id);
//   input.classList.add("error");
// }
// function removeError(id){
//   const input = document.getElementsById(id);
//   input.classList.remove("error");
// }



function changeCard1(){
let card1 = document.getElementById("card1img");
card1.src = entries[0].images[0];
let card1title = entries[0].title;
let card1name = entries[0].name;
let card1details = document.getElementById("oneTitleArtist");
card1details.innerHTML = card1title + " - " + card1name;
const viewGalleryOneBtn = document.getElementById("viewGalleryOneBtn");
viewGalleryOneBtn.innerHTML = "see more";


}
//See note from above. This should work like the others however, once function is called script is refreshed and lose the user data 
function changeViewGalleryOne(){
  const main = document.querySelector(".main");
  main.style.display = "none";
  const title = document.getElementById("galleryTitle");
  title.classList.add("title")
  title.innerHTML = newEntry[0].title;
  const name = document.getElementById("galleryArtist");
  name.classList.add("artist");
  name.innerHTML = newEntry[0].name;
  let currentImg = document.getElementById("gallery");
  currentImg.style.display = "block";
  currentImg.src = newEntry[0].images[0];

  const buttonsDiv = document.querySelector(".buttons");
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("next-btn");
  nextButton.addEventListener("click", nextImage);
  buttonsDiv.appendChild(nextButton);

  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("prev-btn");
  prevButton.addEventListener("click", prevImage);
  buttonsDiv.appendChild(prevButton);

  //add counter//
  const counter = document.getElementById("counter");
  counter.innerHTML = `1 of ${newEntry[0].images.length}`;
  //next button//
  function nextImage(){
  let currentIndex = (currentIndex + 1) % newEntry[0].images.length;
  currentImg.src = newEntry[0].images[currentIndex];
  counter.innerHTML = `${currentIndex} of ${newEntry[0].images.length}`;
  }
  //prev button//
  function prevImage(){
    currentIndex = (currentIndex - 1) % newEntry[0].images.length;
    currentImg.src = newEntry[0].images[currentIndex];
    counter.innerHTML = `${currentIndex + 1} of ${newEntry[0].images.length}`;
  }
}
const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(event) {
  submitForm(event);
  changeCard1();
 
});
