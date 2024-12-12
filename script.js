function nextStep(stepNumber) {
  // 現在のステップを非表示にする
  document.getElementById('step' + (stepNumber - 1)).style.display = 'none';
  
  // 次のステップを表示する
  document.getElementById('step' + stepNumber).style.display = 'block';
  
  // 現在のステップのボタンを無効にする
  document.getElementById('step' + (stepNumber - 1)).querySelector('button').disabled = true;

  // 次のステップのボタンを有効にする
  if (stepNumber < 6) {
    document.getElementById('step' + stepNumber).querySelector('button').disabled = false;
  }
}
