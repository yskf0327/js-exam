/**
 * 生年月日のフォーム
 */
(function () {
  const selectBirthyear = document.getElementById('birthyear');
  const selectBirthmonth = document.getElementById('birthmonth');
  const selectBirthdate = document.getElementById('birthdate');

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const currentDate = now.getDate();

  const startYear = 1900;
  createOption(selectBirthyear, startYear, currentYear, currentYear);

  const startMonth = 1;
  createOption(selectBirthmonth, startMonth, 12, currentMonth);

  const firstMonth = new Date(currentYear, 0, 1);
  let endOfMonth = new Date(currentYear, 1, 0).getDate();
  const startDate = 1;
  createOption(selectBirthdate, startDate, endOfMonth, currentDate);

  const eventTargetArray = [selectBirthyear, selectBirthmonth];
  eventTargetArray.forEach((select) => {
    select.addEventListener('change', () => {
      selectBirthdate.innerHTML = '';
      let selectedYear = selectBirthyear.value;
      let selectedMonth = selectBirthmonth.value;
      endOfMonth = new Date(selectedYear, selectedMonth, 0).getDate();
      createOption(selectBirthdate, startDate, endOfMonth);
    });
  });

  function createOption(parentElm, startValue, maxValue, current = null) {
    let value = startValue;
    while (value <= maxValue) {
      const optionElm = document.createElement('option');
      optionElm.value = value;
      optionElm.innerText = value;
      if (value === current) {
        optionElm.setAttribute('selected', 'true');
      }
      parentElm.append(optionElm);
      value++;
    }
  }
})();
