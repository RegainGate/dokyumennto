const pdfFiles = [
    "コンサル.pdf",
    "ステップ1-1.pdf", "ステップ1-2.pdf", "ステップ1-3.pdf",
    "ステップ1-4.pdf", "ステップ1-5.pdf", "ステップ1-6.pdf",
    "ステップ1-7.pdf", "ステップ2-1.pdf", "ステップ3-1.pdf",
    "ステップ4-1.pdf", "ステップ5-1.pdf", "ステップ6-1.pdf"
];

// 暗号を表示するページ
const codes = {
    "ステップ1-1.pdf": "１",
    "ステップ1-2.pdf": "２",
    "ステップ1-3.pdf": "３",
    "ステップ1-5.pdf": "５",
    "ステップ1-6.pdf": "６"
};

// パスワードが必要なページ
const passwords = {
    "ステップ1-5.pdf": "123",
    "ステップ2-1.pdf": "56",
    "ステップ3-1.pdf": "2",
    "ステップ4-1.pdf": "3",
    "ステップ5-1.pdf": "4",
    "ステップ6-1.pdf": "5"
};

let currentIndex = 0;

function updateViewer() {
    const pdfObject = document.getElementById("pdfObject");
    const pdfLink = document.getElementById("pdfLink");
    const pdfTitle = document.getElementById("pdfTitle");
    const codeSection = document.getElementById("codeSection");
    const codeText = document.getElementById("codeText");

    pdfObject.data = pdfFiles[currentIndex];
    pdfLink.href = pdfFiles[currentIndex];
    pdfTitle.textContent = "現在のファイル: " + pdfFiles[currentIndex];

    // 暗号ボタンの表示・非表示
    if (codes[pdfFiles[currentIndex]]) {
        codeSection.classList.remove("hidden");
        codeText.textContent = "";
    } else {
        codeSection.classList.add("hidden");
    }

    const passwordInput = document.getElementById("passwordInput");
    const nextBtn = document.getElementById("nextBtn");

    // パスワードが必要なページ
    if (passwords[pdfFiles[currentIndex]]) {
        passwordInput.style.display = "inline";
        passwordInput.value = ""; // 入力をクリア
        nextBtn.disabled = true;
    } else {
        passwordInput.style.display = "none";
        nextBtn.disabled = false;
    }

    // 「戻る」ボタンの有効・無効化
    document.getElementById("prevBtn").disabled = (currentIndex === 0);

    // **ページを一番上から表示**
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
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

function revealCode() {
    const currentPdf = pdfFiles[currentIndex];
    if (codes[currentPdf]) {
        document.getElementById("codeText").textContent = codes[currentPdf];
    }
}

// 初期表示の設定
updateViewer();
