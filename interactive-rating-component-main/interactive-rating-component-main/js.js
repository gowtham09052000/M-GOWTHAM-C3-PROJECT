const rating_card = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit");
const rates= document.getElementById("rate");
const rating= document.querySelector(".rating_section");
const thank = document.querySelector(".thank_section");

  let rate = null;


  rating_card.forEach((rating_card)=>{

                    rating_card.addEventListener("click",(e) => {
                     const active = document.querySelector           ('.checked');
                     if(active){
                       active.classList.remove("checked")
                          }
                      const card = e.target;
                      card.classList.add("checked");
                        rate = e.target.innerText;
                    });
                   

  });
  submit.addEventListener("click",() => 
  {
                    if (rate) {
                      rates.innerText = rate;
                      rating.classList.add("hidden");
                      thank.classList.remove("hidden");
                    }

  });