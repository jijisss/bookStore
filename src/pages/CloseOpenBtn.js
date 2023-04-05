const btnClickHandler = (data, className) => {
  const infoBox = document.querySelector("." + className);
  if (data.target.dataset.btnToggle === "open") {
    // 접기로 클래스명 바꾸기
    data.target.dataset.btnToggle = "close";
    data.target.classList.remove("open");
    data.target.classList.add("close");
    infoBox.classList.remove("open");
  } else {
    // 펼치기로 클래스명 바꾸기
    data.target.dataset.btnToggle = "open";
    data.target.classList.remove("close");
    data.target.classList.add("open");
    infoBox.classList.add("open");
  }
};

export default btnClickHandler;
