const rev = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "/Image/image-2.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "/Image/image-1.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "/Image/image-3.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "/Image/image-4.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const imagefile = document.querySelector(".imagefile");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");
const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");
// imagefile.src = rev[0].img;
// author.innerHTML = rev[0].name;
// job.innerHTML = rev[0].job;
// info.textContent = rev[0].text;
let current = 0;
window.addEventListener("DOMContentLoaded", () => {
  imagefile.src = rev[current].img;
  author.innerHTML = rev[current].name;
  job.innerHTML = rev[current].job;
  info.textContent = rev[current].text;
});

const show = (current) => {
  imagefile.src = rev[current].img;
  author.innerHTML = rev[current].name;
  job.innerHTML = rev[current].job;
  info.textContent = rev[current].text;
};

nextbtn.addEventListener("click", () => {
  if (current == rev.length-1) current = 0;
  else {
    current++;
    console.log(current);
  }
  show(current);
});
prevbtn.addEventListener("click", () => {
    if (current == 0) current = rev.length-1;
    else {
      current--;
      console.log(current);
    }
    show(current);
  });
  randombtn.addEventListener("click",()=>{
     current=Math.floor(Math.random()*rev.length)
console.log(Math.random())
show(current)
  })