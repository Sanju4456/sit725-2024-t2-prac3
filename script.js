// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const submitForm = () => {
  let formData = {};
  formData.first_name = $('#first_name').val();
  formData.last_name = $('#last_name').val();
  formData.password = $('#password').val();
  formData.email = $('#email').val();
  console.log("Form Data Submitted: ", formData);
}

const cardList = [
  {
    image: "./Rose 1.jpg",
    title: "Rose Flower      :",
    link: "About Kitten 2",
    
  },
  {
    image: "./rose 2.jpg",
    title: "Rose Flower 2    :",
    link: "About Kitten 3",
   
  },
  {
    image: "./Rose 3.jpg",
    title: "Rose Flower 3   :",
    link: "About Kitten 3",
   
  }
];

// Generate HTML for each card
const cardContainer = document.getElementById("cardContainer");
cardList.forEach(card => {
  const cardHTML = `
    <div class="card">
      <img src="${card.image}" alt="${card.title}">
      <h5>${card.title}</h5>
      <a href="${card.link}" target="_blank">More Info</a>
    </div>
  `;
  cardContainer.innerHTML += cardHTML;
});
