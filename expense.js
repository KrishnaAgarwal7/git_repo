const savedExpense = JSON.parse(localStorage.getItem('expenseTracker'));
 
  const savedTotalExpense = JSON.parse(localStorage.getItem('totalExpense'));

const expenseTracker = savedExpense || [{
  Amount: '',
  Remark:'Transport',
  Date:'25/10/25',
  getActionType: ''
}]

let actionType = '';
document.getElementById('d').addEventListener('click', function() {
  actionType = 'DEBITED';
  
  getExpense();
});
document.getElementById('c').addEventListener('click', function() {
  actionType = 'CREDITED';
  
  getExpense();
});

function displayExpense() {
  let expenseTrackerHtml = '';
  let totalExpense = savedTotalExpense || 0;
  
  for(let i = 0 ; i < expenseTracker.length ; i++) {
    const expenseObject = expenseTracker[i];
    const Amount = expenseObject.Amount;
    const Remark = expenseObject.Remark;
    const Date = expenseObject.Date;
    const getActionType = expenseObject.getActionType;
    const html =
    
    `
    <div class="expense-item">
    EXPENSE:${i+1}:${getActionType}
    <div>Amount:₹${Amount}</div>
    <div>Remark:${Remark}</div>
    <div>Date:${Date}</div>
    <button class="js-delete-button" onclick="expenseTracker.splice(${i}, 1); localStorage.removeItem('expenseTracker' , 'totalExpense'); displayExpense();">Delete</button>
    </div>    <hr>
    `;
    expenseTrackerHtml += html;
    if(getActionType === 'DEBITED') {
    totalExpense += Number(Amount);
    } else {
      totalExpense -= Number(Amount);
    }
    const expenseColor = document.querySelector('.js-total-expense');
  if(totalExpense < 0) {
    expenseColor.style.color = 'green';
  } else {
   expenseColor.style.color = 'red';
  }
  localStorage.setItem('totalExpense', JSON.stringify(totalExpense));
  }
  document.querySelector('.html').innerHTML = expenseTrackerHtml;
  document.querySelector('.js-total-expense').innerHTML = totalExpense;
  
  
}
document.getElementById('reset').addEventListener('click', function() {
  let confirm = window.confirm('Are you sure you want to reset? All data will be lost.')
  if(confirm){localStorage.clear();
  expenseTracker.length = 0;
  displayExpense();
  }
})


function getExpense() {
  const inputAmount = document.querySelector('.js-Amount');
  let amountValue = inputAmount.value;
  const inputRemark = document.querySelector('.js-Remark');
  let remarkValue = inputRemark.value;
  const inputDate = document.querySelector('.js-Date');
  let dateValue = inputDate.value;

  expenseTracker.push({Amount:amountValue,
                       Remark:remarkValue,
                       Date:dateValue,
                       getActionType:actionType

  })
  inputAmount.value = '';
  inputRemark.value = '';
  localStorage.setItem('expenseTracker', JSON.stringify(expenseTracker));
   
  displayExpense();
}

