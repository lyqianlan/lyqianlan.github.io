const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/博丽灵梦2.jpg") {
    myImage.setAttribute("src", "images/bolilingmeng.jpg");
  } else {
    myImage.setAttribute("src", "images/博丽灵梦2.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("输入你的名字喵");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `请支持博丽灵梦, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `请支持博丽灵梦, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};