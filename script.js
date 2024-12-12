document.addEventListener('DOMContentLoaded', function() {
  // 各ステップの次へボタンを有効にする関数
  function nextStep(stepNumber) {
    // すべてのステップを非表示にする
    for (let i = 1; i <= 6; i++) {
      document.getElementById("step" + i).style.display = "none";
    }
    // 次のステップを表示
    document.getElementById("step" + stepNumber).style.display = "block";
  }

  // 戻るボタンを処理する関数
  function prevStep(stepNumber) {
    // すべてのステップを非表示にする
    for (let i = 1; i <= 6; i++) {
      document.getElementById("step" + i).style.display = "none";
    }
    // 前のステップを表示
    document.getElementById("step" + stepNumber).style.display = "block";
  }

  // 入力欄の変更を監視して次へボタンの有効化
  function enableNextButton(stepNumber, requiredInput) {
    const inputField = document.getElementById("input" + stepNumber);
    const nextButton = document.getElementById("nextButton" + stepNumber);

    // 正しい入力をチェックして次へボタンを有効にする
    inputField.addEventListener('input', function() {
      if (inputField.value === requiredInput) {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  }

  // 最初のステップを表示
  nextStep(1);
  enableNextButton(1, "くろわっさん");
  enableNextButton(2, "あんぱん");
  enableNextButton(3, "くりーむぱん");
  enableNextButton(4, "さんどいっち");
  enableNextButton(5, "しおぱん");
  enableNextButton(6, "しおぱん");
});
