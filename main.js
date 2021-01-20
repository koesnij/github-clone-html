// 전체 영역을 침범하지 않고 모듈화
(function (window, document) {
  "use strict";
  // convention
  const $toggles = document.querySelectorAll(".toggle"); // return NodeList
  const $toggleBtn = document.getElementById("toggle-btn");

  $toggleBtn.addEventListener("click", () => toggleElements());

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      offElements();
    }
  });

  const toggleElements = () => {
    [].forEach.call($toggles, (toggle) => {
      toggle.classList.toggle("on");
    });
  };

  const offElements = () => {
    [].forEach.call($toggles, (toggle) => {
      toggle.classList.remove("on");
    });
  };
})(window, document);
