const pdfFiles = [
    "コンサル.pdf",
    "ステップ1-1.pdf", "ステップ1-2.pdf", "ステップ1-3.pdf",
    "ステップ1-4.pdf", "ステップ1-5.pdf", "ステップ1-6.pdf",
    "ステップ1-7.pdf", "ステップ2-1.pdf", "ステップ3-1.pdf",
    "ステップ4-1.pdf", "ステップ5-1.pdf", "ステップ6-1.pdf"
];

// 暗号ボタンを表示するページ
const secretCodes = {
    "ステップ1-1.pdf": "１",
    "ステップ1-2.pdf": "２",
    "ステップ1-3.pdf": "３",
    "ステップ1-5.pdf": "５",
    "ステップ1-6.pdf": "６"
};

// パスワードが必要なページ
const passwords = {
    "ステップ1-5.pdf": "１２３",  // 1-4 → 1-5
    "ステップ2-1.pdf": "５６"    // 1-7 → 2-1
};

let currentIndex = 0;

function updateViewer() {
    const pdfObject = document.getElementById("pdfObject");
    const pdfLink = document.getElementById("pdfLink");
    const pdfTitle = document.getElementById("pdfTitle");
    const secretButtonContainer = document.getElementById("secretButtonContainer");
    const secretText = document.getElementById("secretText");

    pdfObject.data = pdfFiles[currentIndex];
    pdfLink.href = pdfFiles[currentIndex];
    pdfTitle.textContent = "現在のファイル: " + pdfFiles[currentIndex];

    const passwordInput = document.getElementById("passwordInput");
    const nextBtn = document.getElementById("nextBtn");

    // **暗号ボタンの表示**
    if (secretCodes[pdfFiles[currentIndex]]) {
        secretButtonContainer.style.display = "block";
        secretText.textContent = ""; // クリア
    } else {
        secretButtonContainer.style.display = "none";
    }

    // **パスワードの制御**
    if (passwords[pdfFiles[currentIndex]]) {
        passwordInput.style.display = "inline";
        passwordInput.value = ""; // 入力をクリア
        nextBtn.disabled = true;
    } else {
        passwordInput.style.display = "none";
        nextBtn.disabled = false;
    }

    // **「戻る」ボタンの有効・無効化**
    document.getElementById("prevBtn").disabled = (currentIndex === 0);

    // **ページを一番上から表示**
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
}

function revealSecret() {
    const secretText = document.getElementById("secretText");
    secretText.textContent = secretCodes[pdfFiles[currentIndex]] || "";
}

function nextStep() {
    if (currentIndex < pdfFiles.length - 1) {
        currentIndex++;
        updateViewer();
    }
}

function prevStep() {
    if (currentIndex > 0) {
        currentIndex--;
        updateViewer();
    }
}

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const currentPdf = pdfFiles[currentIndex];

    if (passwords[currentPdf] && passwordInput === passwords[currentPdf]) {
        document.getElementById("nextBtn").disabled = false;
    } else {
        document.getElementById("nextBtn").disabled = true;
    }
}

// 初期表示の設定
updateViewer();
