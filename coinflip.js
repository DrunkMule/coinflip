let betPlaced = false;
let balance = 100;
function placeAllIn(outcome) {
if (!betPlaced) {
const bet = balance;
if (bet > 0) {
  balance -= bet;
  document.getElementById('balance-amount').textContent = balance.toFixed(2);
  betPlaced = true;
  document.getElementById('bet-heads').disabled = true;
  document.getElementById('bet-tails').disabled = true;
  document.getElementById('all-in-heads').disabled = true;
  document.getElementById('all-in-tails').disabled = true;
  document.getElementById('result').textContent = ''; // Clear result element

  document.getElementById('coinflip-animation').classList.add('spinning');

  setTimeout(function() {
    stopAnimation();
    const coinflipOutcomes = ['Heads', 'Tails'];
    const randomOutcome = coinflipOutcomes[Math.floor(Math.random() * coinflipOutcomes.length)];
    document.getElementById('coinflip-animation').setAttribute('data-outcome', randomOutcome);
    const lastOutcomesList = document.getElementById('last-outcomes-list');
    const listItem = document.createElement('li');
    listItem.textContent = randomOutcome;
    lastOutcomesList.appendChild(listItem);

    if (randomOutcome === outcome) {
      balance += bet * 1.9;
      document.getElementById('result').textContent = 'Du vandt $' + (bet * 0.9).toFixed(2) + '!';
    } else {
      document.getElementById('result').textContent = 'Du tabte $' + (bet).toFixed(2) + '!';
    }
    document.getElementById('balance-amount').textContent = balance.toFixed(2);
    betPlaced = false;
    document.getElementById('bet-heads').disabled = false;
    document.getElementById('bet-tails').disabled = false;
    document.getElementById('all-in-heads').disabled = false;
    document.getElementById('all-in-tails').disabled = false;
  }, 1000);
} else {
  document.getElementById('result').textContent = 'Not enough balance to place bet';
}
}
}

function placeBet(bet, outcome) {
if (!betPlaced) {
if (balance >= bet) {
  balance -= bet;
  document.getElementById('balance-amount').textContent = balance.toFixed(2); // Format balance with 2 decimal places
  betPlaced = true;
  document.getElementById('bet-heads').disabled = true;
  document.getElementById('bet-tails').disabled = true;
  document.getElementById('result').textContent = ''; // Clear result element

  document.getElementById('coinflip-animation').classList.add('spinning');

  setTimeout(function() {
    stopAnimation();
    const coinflipOutcomes = ['Heads', 'Tails'];
    const randomOutcome = coinflipOutcomes[Math.floor(Math.random() * coinflipOutcomes.length)];
    document.getElementById('coinflip-animation').setAttribute('data-outcome', randomOutcome);
    const lastOutcomesList = document.getElementById('last-outcomes-list');
    const listItem = document.createElement('li');
    listItem.textContent = randomOutcome;
    lastOutcomesList.appendChild(listItem);

    if (randomOutcome === outcome) {
      balance += bet * 2;
      document.getElementById('result').textContent = 'Du vandt $' + (bet * 1).toFixed(2) + '!'; // Format bet with 2 decimal places
    } else {
      document.getElementById('result').textContent = 'Du tabte $' + (bet).toFixed(2) + '!'; // Format bet with 2 decimal places
    }
    document.getElementById('balance-amount').textContent = balance.toFixed(2); // Format balance with 2 decimal places
    betPlaced = false;
    document.getElementById('bet-heads').disabled = false;
    document.getElementById('bet-tails').disabled = false;
    }, 1000);
    } else {
    document.getElementById('result').textContent = 'Not enough balance to place bet';
 }
}
}

function stopAnimation() {
document.getElementById('coinflip-animation').classList.remove('spinning');
}
