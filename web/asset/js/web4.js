console.log(window);

let button = document.querySelector(".s1-btn");
 button.addEventListener("click", () => {
   let navbar = document.getElementsByClassName("s1")[0];
   navbar.style.backgroundColor = "rgb(2, 116, 120)";

   let logo = document.getElementsByClassName("logo")[0];
   logo.style.Color = "#047f92";

  let s2 = document.getElementsByClassName("s2")[0];
  s2.style.backgroundColor = "rgb(20, 24, 31)";

  let menu = document.querySelectorAll(".s1-A a").forEach((link) => {
    link.style.color = "#ddd";
  });

  let s3 = document.getElementsByClassName("s3")[0];
  s3.style.backgroundColor = "rgb(20, 24, 31)";

  let s3box = document.getElementsByClassName("s3-boxs")[0];
  s3box.style.backgroundColor = "rgb(2, 170, 176)";

  document.querySelectorAll(".c3-box").forEach((containers) => {
    containers.style.backgroundColor = "rgb(90, 132, 133)";
  });

  let s4 = document.getElementsByClassName("s4")[0];
  s4.style.backgroundColor = "rgb(20, 24, 31)";
  // s4 text
  document.querySelectorAll(".s4-text").forEach((text) => {
    text.style.color = "#e0e0e0";
  });

  let s5 = document.getElementsByClassName("s5")[0];
  s5.style.backgroundColor = "rgb(20, 24, 31)";

  document.querySelectorAll(".s5-box").forEach((boxes) => {
    boxes.style.backgroundColor = "rgb(2, 170, 176)";
  });

  let s6 = document.getElementsByClassName("s6")[0];
  s6.style.backgroundColor = "rgb(20, 24, 31)";

  let S7 = document.getElementsByClassName("S7")[0];
  S7.style.backgroundColor = "rgb(20, 24, 31)";
  let s7 = document.getElementsByClassName("s7")[0];
  s7.style.backgroundColor = "rgb(20, 24, 31)";

  document.querySelectorAll(".s7-text").forEach((text) => {
    text.style.color = "#e0e0e0";
  });
  document.querySelectorAll(".card").forEach((cards) => {
    cards.style.backgroundColor = "rgb(2, 170, 176)";
  });

  let s8 = document.getElementsByClassName("s8")[0];
  s8.style.backgroundColor = "rgb(20, 24, 31)";
  let boxes = document.getElementsByClassName("s8-boxes")[0];
  boxes.style.backgroundColor = "rgb(20, 24, 31)";

  document.querySelectorAll(".s8-box").forEach((box) => {
    box.style.backgroundColor = "rgb(2, 170, 176)";
  });
  let s9 = document.getElementsByClassName("s9")[0];
  s9.style.backgroundColor = "rgb(20, 24, 31)";

  let end = document.getElementsByClassName("s10")[0];
  end.style.backgroundColor = "rgb(3, 3, 3)";

});



  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const countText = card.querySelector(".count");
    let count = 0;

     const plus = card.querySelector(".plus");
    plus.addEventListener("click", () => {
      count++;
      countText.textContent = count;
    });

    const minus = card.querySelector(".minus");
    minus.addEventListener("click", () => {
      if (count > 0) {
        count--;
        countText.textContent = count;
      }
    });
    
   const reset = card.querySelector(".reset")
    reset.addEventListener("click", () => {
      count = 0;
      countText.textContent = count;
    });
  });


 