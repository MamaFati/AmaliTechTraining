"use strict";
const email = document.querySelector("#mail");
const submit = document.querySelector("#submit");
function validateMail(mailValue) {
    const check = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const result = check.test(mailValue.value);
    if (result === true) {
        console.log("Hi");
    }
    else if (email.value === "") {
        console.log("This feild is required!!");
    }
    else {
        console.log("Please enter a valid email");
    }
}
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", () => {
    validateMail(email);
});
//# sourceMappingURL=index.js.map