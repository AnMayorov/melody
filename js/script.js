$(document).ready(function() {
  var currentFloor = 2; // переменная с этажом
  var floorPath = $(".home-image path"); // отдельный этаж в SVG
  var counterUp = $(".counter-up"); // кнопка увеличения этажа
  var counterDown = $(".counter-down"); // кнопка меньшения этажа
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  // функция при наведении на этаж
  floorPath.on("mouseover", function() { 
    floorPath.removeClass("current-floor"); // удаление активного класса у этажа
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа
    $(".counter").text(currentFloor); // запись значения этажа в счётчик
  });

  floorPath.on("click", toggleModal); // при клике на этаж, вызывает окно
  modalCloseButton.on("click", toggleModal); // при клике на крестик, закрывает окно
  viewFlatsButton.on("click", toggleModal);

  // отслеживаем клик по кнопке вверх
  counterUp.on("click", function() { 
    // проверка значения этажа (не < 18)
    if (currentFloor < 18) {  
      currentFloor++; // прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1 (не работает)
    $(".counter").text(currentFloor); // запись значения этажа в счётчик
    floorPath.removeClass("current-floor"); // удаление активного класса у этажа
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсветка текущего этажа
    };
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      $(".counter").text(currentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    };
  });
  function toggleModal() {  // функция открыть-закрыть окно
    modal.toggleClass("is-open")
  }
});