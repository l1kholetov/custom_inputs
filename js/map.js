// При успешной загрузке API выполняется
      // соответствующая функция.
      ymaps.ready(function () {

        var myMap = new ymaps.Map("map", {
          center: [59.939032, 30.315827],
          zoom: 13
        });
      // Создание геообъекта с типом точка (метка).
        var myPlacemark = new ymaps.Placemark([59.939032, 30.315827], {}, {
          iconLayout: 'default#image',
          iconImageHref: '/img/svg/map.svg',
          iconImageSize: [48, 48],
          iconImageOffset: [-24, -43]
        });

      // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
      });
