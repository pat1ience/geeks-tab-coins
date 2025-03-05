const coin = document.getElementById("coin");
const coinTab = document.getElementById("coinTab");
const power = document.getElementById("power");

coinTab.addEventListener('click', counterСoinPower)

function counterСoinPower() {
  let currentPower = Number(power.textContent)
  if (currentPower >= 15) {
    let currentCoin = Number(coin.textContent);
    currentCoin += 1;
    coin.textContent = currentCoin;

    currentPower -= 15;
    power.textContent = currentPower;
  } else {alert('У вас недостаточно энергии!')}
}