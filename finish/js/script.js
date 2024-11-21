/**
 * 各種データ
 */

const gendarData = [
  { code: '01', id: 'gendar01', name: '男性' },
  { code: '02', id: 'gendar02', name: '女性' },
  { code: '03', id: 'gendar03', name: 'その他' },
  { code: '04', id: 'gendar04', name: '無回答' },
];

const jobData = [
  { code: '01', id: 'job01', name: '学生' },
  { code: '02', id: 'job02', name: '会社員(正社員)' },
  { code: '03', id: 'job03', name: '契約社員・派遣社員' },
  { code: '04', id: 'job04', name: 'パート・アルバイト' },
  { code: '05', id: 'job05', name: '自営業・フリーランス' },
  { code: '06', id: 'job06', name: '公務員' },
  { code: '07', id: 'job07', name: '主婦・主夫' },
  { code: '08', id: 'job08', name: '無職・求職中' },
  { code: '09', id: 'job09', name: 'その他' },
];

const interestData = [
  { code: '01', id: 'interest01', name: '旅行・観光' },
  { code: '02', id: 'interest02', name: 'グルメ・料理' },
  { code: '03', id: 'interest03', name: 'ファッション・美容' },
  { code: '04', id: 'interest04', name: 'スポーツ・フィットネス' },
  { code: '05', id: 'interest05', name: '音楽・映画' },
  { code: '06', id: 'interest06', name: 'アート・デザイン' },
  { code: '07', id: 'interest07', name: '読書・文学' },
  { code: '08', id: 'interest08', name: 'ゲーム・アニメ' },
  { code: '09', id: 'interest09', name: 'テクノロジー・ガジェット' },
  { code: '10', id: 'interest10', name: 'ビジネス・投資' },
  { code: '11', id: 'interest11', name: '子育て・家庭' },
  { code: '12', id: 'interest12', name: '自然・アウトドア' },
];

const prefData = [
  { code: '01', name: '北海道' },
  { code: '02', name: '青森県' },
  { code: '03', name: '岩手県' },
  { code: '04', name: '宮城県' },
  { code: '05', name: '秋田県' },
  { code: '06', name: '山形県' },
  { code: '07', name: '福島県' },
  { code: '08', name: '茨城県' },
  { code: '09', name: '栃木県' },
  { code: '10', name: '群馬県' },
  { code: '11', name: '埼玉県' },
  { code: '12', name: '千葉県' },
  { code: '13', name: '東京都' },
  { code: '14', name: '神奈川県' },
  { code: '15', name: '新潟県' },
  { code: '16', name: '富山県' },
  { code: '17', name: '石川県' },
  { code: '18', name: '福井県' },
  { code: '19', name: '山梨県' },
  { code: '20', name: '長野県' },
  { code: '21', name: '岐阜県' },
  { code: '22', name: '静岡県' },
  { code: '23', name: '愛知県' },
  { code: '24', name: '三重県' },
  { code: '25', name: '滋賀県' },
  { code: '26', name: '京都府' },
  { code: '27', name: '大阪府' },
  { code: '28', name: '兵庫県' },
  { code: '29', name: '奈良県' },
  { code: '30', name: '和歌山県' },
  { code: '31', name: '鳥取県' },
  { code: '32', name: '島根県' },
  { code: '33', name: '岡山県' },
  { code: '34', name: '広島県' },
  { code: '35', name: '山口県' },
  { code: '36', name: '徳島県' },
  { code: '37', name: '香川県' },
  { code: '38', name: '愛媛県' },
  { code: '39', name: '高知県' },
  { code: '40', name: '福岡県' },
  { code: '41', name: '佐賀県' },
  { code: '42', name: '長崎県' },
  { code: '43', name: '熊本県' },
  { code: '44', name: '大分県' },
  { code: '45', name: '宮崎県' },
  { code: '46', name: '鹿児島県' },
  { code: '47', name: '沖縄県' },
];

/**
 * checkboxとradioを作る関数
 */
function createFormCheck(dataArray, wrapperElm, wrapperClassArray, inputType, inputName) {
  for (let i = 0; i < dataArray.length; i++) {
    let formCheckWrapper = document.createElement('div');
    for (let j = 0; j < wrapperClassArray.length; j++) {
      formCheckWrapper.classList.add(wrapperClassArray[j]);
    }
    let inputElm = document.createElement('input');
    inputElm.setAttribute('type', inputType);
    inputElm.setAttribute('name', inputName);
    inputElm.setAttribute('id', dataArray[i].id);
    inputElm.value = dataArray[i].code;
    inputElm.classList.add('form-check-input');

    let labelElm = document.createElement('label');
    labelElm.setAttribute('for', dataArray[i].id);
    labelElm.classList.add('form-check-label');
    labelElm.innerText = dataArray[i].name;

    formCheckWrapper.append(inputElm);
    formCheckWrapper.append(labelElm);
    wrapperElm.append(formCheckWrapper);
  }
}

/**
 * 都道府県
 */
const prefElm = document.getElementById('pref');

for (let i = 0; i < prefData.length; i++) {
  let optionElm = document.createElement('option');
  optionElm.value = prefData[i].code;
  optionElm.innerText = prefData[i].name;
  prefElm.append(optionElm);
}

/**
 * 性別
 */
const gendarElm = document.getElementById('gendar');

createFormCheck(gendarData, gendarElm, ['form-check', 'form-check-inline'], 'radio', 'gendar');
// for (let i = 0; i < gendarData.length; i++) {
//   let formCheckWrapper = document.createElement('div');
//   formCheckWrapper.classList.add('form-check', 'form-check-inline');

//   let radioElm = document.createElement('input');
//   radioElm.setAttribute('type', 'radio');
//   radioElm.setAttribute('name', 'gendar');
//   radioElm.setAttribute('id', gendarData[i].id);
//   radioElm.value = gendarData[i].code;
//   radioElm.classList.add('form-check-input');

//   let labelElm = document.createElement('label');
//   labelElm.setAttribute('for', gendarData[i].id);
//   labelElm.classList.add('form-check-label');
//   labelElm.innerText = gendarData[i].name;
//   console.log(labelElm);

//   formCheckWrapper.append(radioElm);
//   formCheckWrapper.append(labelElm);

//   gendarElm.append(formCheckWrapper);
// }

/**
 * 職業
 */
const jobElm = document.getElementById('job');

createFormCheck(jobData, jobElm, ['form-check', 'form-check-inline'], 'radio', 'job');

/**
 * 興味関心
 */
const interestElm = document.getElementById('interest');

createFormCheck(interestData, interestElm, ['form-check', 'form-check-inline'], 'checkbox', 'interest');

/**
 * メールマガジン
 */
const newsLetterSwitch = document.getElementById('news-letter-switch');
const newsLetterOptionsElm = document.getElementById('news-letter-options');

newsLetterSwitch.addEventListener('click', function () {
  if (newsLetterSwitch.checked === true) {
    newsLetterOptionsElm.style.display = 'block';
  } else {
    newsLetterOptionsElm.style.display = 'none';
  }
});

/**
 * 入力内容確認ボタンの処理
 */
const submitButton = document.getElementById('submit-button');
const privacyPolicyCheck = document.getElementById('privacy-policy');

privacyPolicyCheck.addEventListener('click', function () {
  console.log(privacyPolicyCheck.checked);
  if (privacyPolicyCheck.checked === true) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', 'true');
  }
});

/**
 * メールアドレスの入力チェック(確認用と一致)
 */
const emailInputArray = document.querySelectorAll('input[type=email]');
const emailErrorElm = document.getElementById('error-email');

console.log(emailInputArray);

for (let i = 0; i < emailInputArray.length; i++) {
  emailInputArray[i].addEventListener('keyup', function () {
    let email01 = emailInputArray[0].value;
    let email02 = emailInputArray[1].value;

    if (email01 && email02) {
      console.log(email01);
      console.log(email02);
      if (email01 !== email02) {
        emailErrorElm.innerText = 'メールアドレスが一致しません';
      } else {
        emailErrorElm.innerText = '';
      }
    }
  });
}

/**
 * パスワードの入力チェック(確認用と一致)
 */
const passwordInputArray = document.querySelectorAll('input[type=password]');
const passwordErrorElm = document.getElementById('error-password');

for (let i = 0; i < passwordInputArray.length; i++) {
  passwordInputArray[i].addEventListener('keyup', function () {
    let password01 = passwordInputArray[0].value;
    let password02 = passwordInputArray[1].value;

    if (password01 && password02) {
      console.log(password01);
      console.log(password02);
      if (password01 !== password02) {
        passwordErrorElm.innerText = 'パスワードが一致しません';
      } else {
        passwordErrorElm.innerText = '';
      }
    }
  });
}

/**
 * ユーザー名の入力チェック(文字数)
 */
const usernameInput = document.getElementById('username');
const usernameErrorElm = document.getElementById('error-username');
usernameInput.addEventListener('keyup', function () {
  if (usernameInput.value.length < 4) {
    usernameErrorElm.innerText = 'ユーザー名は4文字以上で設定してください';
  } else {
    usernameErrorElm.innerText = '';
  }
});

/**
 * 電話番号の入力チェック(数値)
 */
const telInput = document.getElementById('tel');
const telErrorElm = document.getElementById('error-tel');

telInput.addEventListener('keyup', function () {
  if (isNaN(telInput.value)) {
    telErrorElm.innerText = '電話番号は半角数字で入力してください';
  } else {
    telErrorElm.innerText = '';
  }
});

/**
 * 郵便番号の入力チェック(数値・桁数)
 */
const postcodeInput = document.getElementById('postcode');
const postcodeErrorElm = document.getElementById('error-postcode');

postcodeInput.addEventListener('keyup', function () {
  console.log(postcodeInput.value.length);
  if (isNaN(postcodeInput.value)) {
    postcodeErrorElm.innerText = '郵便番号は半角数字で入力してください';
  } else if (postcodeInput.value.length !== 7) {
    postcodeErrorElm.innerText = '郵便番号は7桁で入力してください';
  } else {
    postcodeErrorElm.innerText = '';
  }
});

/**
 * 特記事項の残り入力文字数
 */
const commentInput = document.getElementById('comment');
const commentCountElm = document.getElementById('comment-count');
let remainNumber = 0;

commentInput.addEventListener('keyup', function () {
  const MAX_COMMENT_LENGTH = commentInput.getAttribute('maxlength');
  remainNumber = MAX_COMMENT_LENGTH - commentInput.value.length;
  commentCountElm.innerText = remainNumber;
});
