const steps = [
    "https://docs.google.com/document/d/e/2PACX-1vTne29t3wV1TZk1393D4YVlSJguE_x14OjBskkN6eLDSW6WhJ_kiVauP4jqJkDJ0uxyLmNywL6A1eTx/pub?embedded=true",
    "https://docs.google.com/document/d/e/2PACX-1vQAEYIji4Q9EHRe_Tn9sXka_XnHun3AsrOVv1dOgWjRWr1ZN5hTzk18qB9g1myBH3_GHFCJY3XHbBSu/pub?embedded=true",
    "https://docs.google.com/document/d/e/2PACX-1vQzQ_lgw1ze36jyojRzVMY7IoBR2ZWI1HwpP42xgjD4IFHlOfIFu5baSOIRP17cCc-vtuH5gPQn-OAk/pub?embedded=true",
    "https://docs.google.com/document/d/e/2PACX-1vQZguQ9j_VTueyCwR7iUBc7L4stmWUrn0mE_BFMb8-SShRgkZt3V-Xs5l23ivcgPg0A7-bE8fFWR62y/pub?embedded=true",
    "https://docs.google.com/document/d/e/2PACX-1vR8HQRODU-rZi-o3GMnQS0oPibwvxCHie6IafQb3wIeLJtJ3Ye-pnaSuF82vnoWrQj4e0i6s376_Q0S/pub?embedded=true",
    "https://docs.google.com/document/d/e/2PACX-1vTUbWpQwkt1h-p1YU_-3_gbDPvGk08OmVVoiyjKCYFck_DDSGoMKu9FraTl17R18YSrV1JEFfK4jySu/pub?embedded=true"
];

const passwords = [
    "annpann",
    "sanndoitti",
    "siopann",
    "kurowassann",
    "meronnpann"
];

let currentStep = 0;

const iframe = document.getElementById("step-frame");
const passwordInput = document.getElementById("password");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

function updateUI() {
    iframe.src = steps[currentStep];
    prevButton.disabled = currentStep === 0;
    nextButton.disabled = false;
    passwordInput.value = "";
    passwordInput.placeholder = "パスワードを入力してください";
}

prevButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateUI();
    }
});

nextButton.addEventListener("click", () => {
    const enteredPassword = passwordInput.value;
    if (enteredPassword === passwords[currentStep]) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateUI();
        } else {
            nextButton.disabled = true;
        }
    } else {
        passwordInput.value = "";
        passwordInput.placeholder = "パスワードが間違っています";
    }
});

updateUI();
