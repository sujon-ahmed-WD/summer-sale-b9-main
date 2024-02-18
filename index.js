const cards = document.querySelectorAll(".card");

// -- COUNT NEA ExPlayn korvo :::-
let count = 1;
let totalPries = 0;

// console.log(cards);
//  ata dea sob golo dora holo ..
for (const card of cards) {
  //   const elment = card[index];
  //   console.log(card);
  card.addEventListener("click", function () {
    // console.log("sujon");

    // title  ka foccus kora hoba akhon -<><><
    const title = card.querySelector("h3").innerText;
    // This a card object
    // $  doller sine golo ka alda kora kaj korlam ..
    const pries = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );

    console.log(pries);

    // console.log(title, pries);

    // this is a Creat korvo Right golo ka Create element.  menction korvo..<><>
    const titleContainer = document.getElementById("title-container");
    // console.log(titleContainer);

    const p = document.createElement("p");
    p.innerText = count + "  . " + title;
    const p2 = document.createElement("p");
    p2.innerText = pries;
    titleContainer.appendChild(p);
    count++;
    titleContainer.appendChild(p2);

    // total Pries --<><><> Calculted korvo ....
    totalPries += pries;
    document.getElementById("totalPrice").innerText = totalPries;
    console.log(totalPries);
  });
}
// part 2
const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  // get the value from input
  const couponElemnt = document.getElementById("input-field").value;
  // kuopn code  name golo thike korvo..
  const cupuonCode = couponElemnt.split(" ").join(" ").toUpperCase();
  console.log(cupuonCode);

  if (totalPries >= 200) {
    if (cupuonCode === "SELL200") {
      // discunt claculted korlam ...
      const discountElement = document.getElementById("discountPrice");
      const discountAmount = totalPries * 0.2;
      discountElement.innerText = discountAmount;

      // rest total calculation
      const restTotal = document.getElementById("total");
      restTotal.innerText = totalPries - discountAmount;
      // input faka korbo
      document.getElementById("input-field").value = " ";
    } else {
      alert("Invalid coupon.");
    }
  } else {
    alert(" Must be $200. Pay");
  }
});
