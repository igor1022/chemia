const products = [
    {
    name: "АБИЛИФАЙ (Арипипразол) 5мг №28",
    price: "2,580.00 грн.",
    image: "/images/abilify.png",
  },
  {
    name: "Аддерал 30мг 100 шт",
    price: "3,500.00 грн.",
    image: "/images/Alderal1.png",
  },
  {
    name: "Аддерал xr 25мг 100 шт",
    price: "3,800.00 грн.",
    image: "/images/Alderal2.png",
  },
  {
    name: "Аддерол 10мг 100",
    price: "3,200.00 грн.",
    image: "/images/Alderal3.png",
  },
  {
    name: "АЗАЛЕПТИН",
    price: "490.00 грн.",
    image: "/images/azaleptin.png",
  },
  {
    name: "Алпразолам 1 мг. 50 шт",
    price: "1,100.00 грн.",
    image: "/images/alprazolam.png",
  },
  {
    name: "Альгерика 300 мг, 56 капс",
    price: "2,750.00 грн.",
    image: "/images/algerika.png",
  },
  {
    name: "Андриол ТК 40мг 30 шт",
    price: "1,500.00 грн.",
    image: "/images/andriol1.png",
  },
  {
    name: "Атомоксетин Канон 18 мг капсулы 7 шт",
    price: "1,100.00 грн.",
    image: "/images/atomok.png",
  },
  {
    name: "Баклофен 25 мг, 50 табл",
    price: "240.00 грн.",
    image: "/images/baklofen.png",
  },
  {
    name: "Валиум 10 мг 50 табл.",
    price: "1,350.00 грн.",
    image: "/images/valium.png",
  },
  {
    name: "Голдлайн Плюс капс 10мг+158,5мг N90",
    price: "2,700.00 грн.",
    image: "/images/Goldline.png",
  },
  {
    name: "Голдлайн Плюс капс 15мг+153,5мг N90",
    price: "3,200.00 грн.",
    image: "/images/Goldline1.png",
  },
  {
    name: "Дюрогезик (фентанил) 25мкг/ч 5 штук",
    price: "2,500.00 грн.",
    image: "/images/Durogesic.png",
  },
  {
    name: "Дюрогезик матрикс 75мкг/ч N5",
    price: "4,100.00 грн.",
    image: "/images/Durogesic1.png",
  },
  {
    name: "Дюрогезик пластырь 50 мкг/ч 5 штук",
    price: "3,400.00 грн.",
    image: "/images/durogesic2.png",
  },
  {
    name: "Ивадал 10 мг, 20 табл.",
    price: "1,350.00 грн.",
    image: "/images/Ivadal2.png",
  },
  {
    name: "Клофелин 0.15мг 50 штук",
    price: "650.00 грн.",
    image: "/images/klophelin1.png",
  },
  {
    name: "Клофелин капли глазные 0,5%",
    price: "550.00 грн.",
    image: "/images/klophelin2.png",
  },
  {
    name: "Клофелин-раствор для иньекций",
    price: "1,100.00 грн.",
    image: "/images/Clophelin3.png",
  },
  // Добавленные товары
  {
    name: "Концерта (Concerta) таб 36мг",
    price: "2,800.00 грн.",
    image: "/images/concerta.png",
  },
  {
    name: "Ксанакс (Алпразолам) 0.5мг 100 штук",
    price: "2,500.00 грн.",
    image: "/images/xanax1.png",
  },
  {
    name: "Ксанакс (алпразолам) 2мг 30 шт",
    price: "2,000.00 грн.",
    image: "/images/xanax2.png",
  },
  {
    name: "Ксанакс 0.5 мг 30 шт",
    price: "1,300.00 грн.",
    image: "/images/xanax3.png",
  },
  {
    name: "Ксанакс XANAX 1 MG (Alprazolam) 30",
    price: "1,500.00 грн.",
    image: "/images/xanax4.png",
  },
  {
    name: "Линдакса 15 мг, 90 капс.",
    price: "3,500.00 грн.",
    image: "/images/lindaksa1.png",
  },
  {
    name: "Линдакса 15мг 30 капс",
    price: "2,500.00 грн.",
    image: "/images/lindaksa2.png",
  },
  {
    name: "Лирика 150, 56 капс",
    price: "1,200.00 грн.",
    image: "/images/lirika1.png",
  },
  {
    name: "Лирика 300 мг, 14 капс",
    price: "1,350.00 грн.",
    image: "/images/lirika2.png",
  },
  {
    name: "Лирика 300 мг, 56 капс",
    price: "2,200.00 грн.",
    image: "/images/lirika3.png",
  },
  {
    name: "Лирика 75 мг N56 капс.",
    price: "1,450.00 грн.",
    image: "/images/lirika4.png",
  },
  {
    name: "Метадон (METHADONE) 10мг №100",
    price: "1,400.00 грн. – 1,900.00 грн.",
    image: "/images/metadon.png",
  },
  {
    name: "Модасомил (Модафинил, Модалерт, Провигил) 100мг №30",
    price: "1,500.00 грн.",
    image: "/images/modasomil.png",
  },
  {
    name: "Морфин 10 мг, 100 таб",
    price: "1,600.00 грн.",
    image: "/images/morphine.png",
  },
  {
    name: "Морфин 50мг/мл 50мл",
    price: "1,250.00 грн.",
    image: "/images/morphine2.png",
  },
  {
    name: "Налбуфин раствор 10мг/мл амп.1мл 10 шт",
    price: "1,200.00 грн.",
    image: "/images/nalbuphine.png",
  },
  {
    name: "Паксил 20 мг 100 шт.",
    price: "1,100.00 грн.",
    image: "/images/paxil.png",
  },
  {
    name: "Прегабалин Рихтер 56 капс",
    price: "3,000.00 грн.",
    image: "/images/pregabalin.png",
  },
  {
    name: "Провигил (Provigil) 100мг 100 табл",
    price: "2,500.00 грн.",
    image: "/images/provigil.png",
  },
  {
    name: "Редуксин 15мг 30 капс",
    price: "2,500.00 грн.",
    image: "/images/reduxin.png", // Изображение нужно добавить
  },
  {
    name: "Реладорм №10",
    price: "1,100.00 грн.",
    image: "/images/reladorm.png", // Изображение нужно добавить
  },
  {
    name: "Риталин 10мг 100 шт",
    price: "2,200.00 грн.",
    image: "/images/ritalin1.png", // Изображение нужно добавить
  },
  {
    name: "Риталин 10мг 30 штук",
    price: "1,500.00 грн.",
    image: "/images/ritalin2.png", // Изображение нужно добавить
  },
  {
    name: "Риталин SR (Ritalin) 20 мг",
    price: "3,200.00 грн.",
    image: "/images/ritalin_uno.png", // Изображение нужно добавить
  },
  {
    name: "Субутекс 8мг 28 табл.",
    price: "3,000.00 грн.",
    image: "/images/subutex.png",
  },
  ];
  
  export default products;
  