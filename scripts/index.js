const canvas = document.querySelector(".canvas");
const value1 = document.querySelector("#input-first");
const value2 = document.querySelector("#input-second");
const valueDegree = document.querySelector("#input-middle");
const generateBtn = document.querySelector(
    ".button-container button:nth-of-type(1)"
);
const copyBtn = document.querySelector(
    ".button-container button:nth-of-type(2)"
);
const popup = document.querySelector(".popup");
const small = document.querySelector(".popup .small");
const cross = document.querySelector(".popup i");
const range = document.querySelector("#range");

generateBtn.addEventListener("click", () => {
    ifHelper(value1, value2, valueDegree);

    canvas.style.background = `linear-gradient(
        ${valueDegree.value}deg,
        ${value1.value} ${range.value}%,
       ${value2.value} 100%
    )`;
});

cross.addEventListener("click", () => {
    popup.classList.remove("visible");
});

copyBtn.addEventListener("click", () => {
    copyBtn.classList.add("tool-tip");

    navigator.clipboard.writeText(`background: linear-gradient(
        ${valueDegree.value}deg,
        ${value1.value} ${range.value}%,
       ${value2.value} 100%
    );`);
});

copyBtn.addEventListener("mouseleave", () => {
    copyBtn.classList.remove("tool-tip");
});

const ifHelper = (value1, value2, valueDegree) => {
    if (
        value1.value.length === 0 ||
        (value1.value.length !== 4 && value1.value.length !== 7) ||
        value2.value.length === 0 ||
        (value2.value.length !== 4 && value2.value.length !== 7) ||
        valueDegree.value.length === 0 ||
        !value1.value.startsWith("#") ||
        !value2.value.startsWith("#")
    ) {
        popup.classList.add("visible");
    }
};

range.addEventListener("input", () => {
    canvas.style.background = `linear-gradient(
        ${valueDegree.value}deg,
        ${value1.value} ${range.value}%,
       ${value2.value} 100%
    )`;
});
