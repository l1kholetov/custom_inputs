// При успешной загрузке API выполняется
      // соответствующая функция.
      ymaps.ready(function () {

        var myMap = new ymaps.Map("map", {
          center: [60.072869, 30.321278],
          zoom: 14
        });
      // Создание геообъекта с типом точка (метка).
        var myPlacemark = new ymaps.Placemark([60.072869, 30.321278], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/svg/map.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -43]
        });

      // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
      });
