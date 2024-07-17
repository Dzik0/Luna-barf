const dNeckInput = document.querySelector('.dneck-js');
const dWingInput = document.querySelector('.dwing-js');
const dLegInput = document.querySelector('.dleg-js');
const dFeetInput = document.querySelector('.dfeet-js');
const meat = document.querySelector('.meat-js');
const offal = document.querySelector('.offal-js');
const liver = document.querySelector('.liver-js');
const infoElement = document.querySelector('.container-js');

function goCount () {
  let trueBone = Math.round(Number(dNeckInput.value) * 0.5 + Number(dWingInput.value) * 0.39 + Number(dLegInput.value) * 0.27 + Number(dFeetInput.value) * 0.60);

  let boneMeat = Math.round(Number(dNeckInput.value) + Number(dWingInput.value) + Number(dLegInput.value) + Number(dFeetInput.value));

  let totalMeatHave = boneMeat + Number(meat.value) + Number(offal.value) + Number(liver.value);

  let totalMeatNeed = Math.round(trueBone * 100 / 15);

  let offalNeed = Math.round(totalMeatNeed * 0.15 - Number(offal.value));
  let liverNeed = Math.round(totalMeatNeed * 0.05 - Number(liver.value));

document.querySelector('.container-js').innerHTML = `
<div class="all-info">
<div> You need to buy:</div>
<div>Total: <span>${totalMeatNeed}g</span></div>
<div>Offal: <span>${offalNeed}g</span></div>
<div>Liver: <span>${liverNeed}g</span></div>
<div>Meat left: <span>${totalMeatNeed - totalMeatHave}g</span></div>
</div>
`;
}