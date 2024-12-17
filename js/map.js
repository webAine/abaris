ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.75, 37.62],
    zoom: 17,
    controls: [],
  });

  var myPlacemark = new ymaps.Placemark(
    [55.684899, 37.889376],
    {}, // Объект данных (содержимое подсказки и балуна, если нужно)
    {
      iconLayout: "default#image", // Указываем, что используется изображение
      iconImageHref: "/images/mark.svg", // Абсолютный путь к изображению
      iconImageSize: [30, 30], // Размеры иконки
      iconImageOffset: [-30, -25], // Смещение для центрирования
    }
  );

  myMap.geoObjects.add(myPlacemark);

  // Проверяем координаты
  myMap.setCenter(myPlacemark.geometry.getCoordinates());
}
