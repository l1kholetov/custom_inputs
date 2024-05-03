// При успешной загрузке API выполняется
      // соответствующая функция.
      ymaps.ready(function () {

        var myMap = new ymaps.Map("map", {
          center: [48.872185, 2.354224],
          zoom: 14
        });
      // Создание геообъекта с типом точка (метка).
        var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/svg/map.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -43]
        });

      // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
      });
