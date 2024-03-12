import throttle from "lodash.throttle";

const KEY_TEXT_SAVE = "feedback-form-state";

const formRef = document.querySelector(".feedback-form");
const inputEmailRef = formRef.querySelector("[name=email]");
const inputMessageRef = formRef.querySelector("[name=message]");
// console.log("🚀formRef", formRef)
// console.log("🚀inputEmailRef", inputEmailRef);
// console.log("🚀inputMessageRef", inputMessageRef);

let baseDate = {
    email: "",
    message: ""
};

let typeError = "";

function saveText () {
    baseDate = {
        email: inputEmailRef.value,
        message: inputMessageRef.value
    }
    // console.log("🚀baseDate", baseDate)

    localStorage.setItem(KEY_TEXT_SAVE, JSON.stringify(baseDate));
    // console.log(JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)))
}

function btnClick (e) {
    e.preventDefault();
    
    localStorage.removeItem(KEY_TEXT_SAVE);

    inputEmailRef.value = "";
    inputMessageRef.value = "";

    console.log(baseDate)
}

formRef.addEventListener("input", throttle(saveText, 500));
formRef.addEventListener("submit", btnClick)

try {
    JSON.parse(localStorage.getItem(KEY_TEXT_SAVE)).email;
} catch (error) {
    typeError = error.name;
}

if(typeError === "") {
    const parsFile = JSON.parse(localStorage.getItem(KEY_TEXT_SAVE));
    if(inputEmailRef.value !== " ") {
        inputEmailRef.value = parsFile.email;
    } 
    if (inputEmailRef.value !== " ") {
        inputMessageRef.value = parsFile.message;
    }
}