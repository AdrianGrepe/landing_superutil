import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Button from "./Button";
import Card from "./Card";
import Carousel from "./Carousel";
import sedan from "../assets/images/sedan.jpeg";
import suv from "../assets/images/suv.jpeg";
import hb from "../assets/images/hb.jpg";
import rzr from "../assets/images/rzr.jpg";
import styles from "./Catalog.module.css";

export const materials = [
  {
    id: "transpirable",
    name: "Transpirable",
    description: "Ideal para climas cálidos y secos",
  },
  {
    id: "impermeable",
    name: "Impermeable",
    description: "Para climas humedos y lluviosos",
  },
  {
    id: "afelpada",
    name: "Afelpada",
    description: "Protege de rasguños y abrasiones",
  },
];

export const fundas = [
  {
    id: "tsedan",
    type: "transpirable",
    image: sedan,
    title: "Funda Transpirable Sedán",
    description:
      "Perfecta para climas cálidos, permite la circulación del aire.",
    models: [
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445332507-cubierta-funda-audi-a1-2007-al-2022-hc0-transpirable-_JM",
      },
      {
        name: "Nissan Altima",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442296163-cubierta-funda-nissan-altima-2005-2022-sg1-transpirable-_JM",
      },
      {
        name: "Chevrolet Malibu",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445513196-cubierta-funda-chevrolet-malibu-2005-2018-sg1-transpirable-_JM",
      },
      {
        name: "Mazda 3",
        url: "https://articulo.mercadolibre.com.mx/MLM-1582645055-cubierta-funda-mazda-3-2003-2023-sm2-transpirable-_JM",
      },
      {
        name: "Hyundai Sonata",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447258962-cubierta-funda-hyundai-sonata-2010-2021-sm2-transpirable-_JM",
      },
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
    ],
  },
  {
    id: "tsuv",
    type: "transpirable",
    image: suv,
    title: "Funda Transpirable SUV",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      {
        name: "Toyota Rav4",
        url: "https://articulo.mercadolibre.com.mx/MLM-1711879017-cubierta-funda-toyota-rav4-2000-2023-um1-transpirable-_JM",
      },
      {
        name: "Mazda CX-5",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447452014-cubierta-funda-mazda-cx-5-2013-2022-um1-transpirable-_JM",
      },
      {
        name: "Chevrolet Tahoe",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445813415-cubierta-funda-chevrolet-tahoe-1990-2021-ug2-transpirable-_JM",
      },
      {
        name: "Jeep Grand Cherokee",
        url: "https://articulo.mercadolibre.com.mx/MLM-1450291209-cubierta-funda-jeep-grand-cherokee-2000-2006-um2-transpirabl-_JM",
      },
      {
        name: "Nissan Rogue",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442327355-cubierta-funda-nissan-rogue-2011-2022-um2-transpirable-_JM",
      },
      {
        name: "VW Tiguan",
        url: "https://articulo.mercadolibre.com.mx/MLM-2441939326-funda-cubierta-vw-tiguan-camioneta-suv-m1-transpirable-_JM",
      },
    ],
  },
  {
    id: "thb",
    type: "transpirable",
    image: hb,
    title: "Funda Transpirable Hatchback",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Toyota Yaris",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445836289-cubierta-funda-toyota-yaris-sedan-sm1-transpirable-_JM",
      },
      {
        name: "Kia Rio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Peugeot 308",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Renault Clio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447453702-cubierta-funda-renault-clio-2005-2019-hc0-transpirable-_JM",
      },
      {
        name: "Mazda 2",
        url: "https://articulo.mercadolibre.com.mx/MLM-3316870108-cubierta-funda-mazda-2-hc1-transpirable-_JM",
      },
    ],
  },
  {
    id: "trzr",
    type: "transpirable",
    image: rzr,
    title: "Funda Transpirable RZR",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      {
        name: "Polaris RZR XP 1000",
        url: "googl.com",
      },
      {
        name: "Can-Am Maverick X3",
        url: "googl.com",
      },
      {
        name: "Yamaha YXZ1000R",
        url: "googl.com",
      },
      {
        name: "Honda Talon 1000R",
        url: "googl.com",
      },
      {
        name: "Textron Wildcat 1000",
        url: "googl.com",
      },
      {
        name: "Kawasaki Teryx KRX 1000",
        url: "googl.com",
      },
    ],
  },
  {
    id: "iseadan",
    type: "impermeable",
    image: sedan,
    title: "Funda Impermeable Sedán",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445332507-cubierta-funda-audi-a1-2007-al-2022-hc0-transpirable-_JM",
      },
      {
        name: "Nissan Altima",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442296163-cubierta-funda-nissan-altima-2005-2022-sg1-transpirable-_JM",
      },
      {
        name: "Chevrolet Malibu",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445513196-cubierta-funda-chevrolet-malibu-2005-2018-sg1-transpirable-_JM",
      },
      {
        name: "Mazda 3",
        url: "https://articulo.mercadolibre.com.mx/MLM-1582645055-cubierta-funda-mazda-3-2003-2023-sm2-transpirable-_JM",
      },
      {
        name: "Hyundai Sonata",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447258962-cubierta-funda-hyundai-sonata-2010-2021-sm2-transpirable-_JM",
      },
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
    ],
  },
  {
    id: "isuv",
    type: "impermeable",
    image: suv,
    title: "Funda Impermeable SUV",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      {
        name: "Toyota Rav4",
        url: "https://articulo.mercadolibre.com.mx/MLM-1711879017-cubierta-funda-toyota-rav4-2000-2023-um1-transpirable-_JM",
      },
      {
        name: "Mazda CX-5",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447452014-cubierta-funda-mazda-cx-5-2013-2022-um1-transpirable-_JM",
      },
      {
        name: "Chevrolet Tahoe",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445813415-cubierta-funda-chevrolet-tahoe-1990-2021-ug2-transpirable-_JM",
      },
      {
        name: "Jeep Grand Cherokee",
        url: "https://articulo.mercadolibre.com.mx/MLM-1450291209-cubierta-funda-jeep-grand-cherokee-2000-2006-um2-transpirabl-_JM",
      },
      {
        name: "Nissan Rogue",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442327355-cubierta-funda-nissan-rogue-2011-2022-um2-transpirable-_JM",
      },
      {
        name: "VW Tiguan",
        url: "https://articulo.mercadolibre.com.mx/MLM-2441939326-funda-cubierta-vw-tiguan-camioneta-suv-m1-transpirable-_JM",
      },
    ],
  },
  {
    id: "ihb",
    type: "impermeable",
    image: hb,
    title: "Funda Impermeable Hatchback",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Toyota Yaris",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445836289-cubierta-funda-toyota-yaris-sedan-sm1-transpirable-_JM",
      },
      {
        name: "Kia Rio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Peugeot 308",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Renault Clio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447453702-cubierta-funda-renault-clio-2005-2019-hc0-transpirable-_JM",
      },
      {
        name: "Mazda 2",
        url: "https://articulo.mercadolibre.com.mx/MLM-3316870108-cubierta-funda-mazda-2-hc1-transpirable-_JM",
      },
    ],
  },
  {
    id: "irzr",
    type: "impermeable",
    image: rzr,
    title: "Funda Impermeable RZR",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      {
        name: "Polaris RZR XP 1000",
        url: "googl.com",
      },
      {
        name: "Can-Am Maverick X3",
        url: "googl.com",
      },
      {
        name: "Yamaha YXZ1000R",
        url: "googl.com",
      },
      {
        name: "Honda Talon 1000R",
        url: "googl.com",
      },
      {
        name: "Textron Wildcat 1000",
        url: "googl.com",
      },
      {
        name: "Kawasaki Teryx KRX 1000",
        url: "googl.com",
      },
    ],
  },
  {
    id: "asedan",
    type: "afelpada",
    image: sedan,
    title: "Funda Afelpada Sedán",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445332507-cubierta-funda-audi-a1-2007-al-2022-hc0-transpirable-_JM",
      },
      {
        name: "Nissan Altima",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442296163-cubierta-funda-nissan-altima-2005-2022-sg1-transpirable-_JM",
      },
      {
        name: "Chevrolet Malibu",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445513196-cubierta-funda-chevrolet-malibu-2005-2018-sg1-transpirable-_JM",
      },
      {
        name: "Mazda 3",
        url: "https://articulo.mercadolibre.com.mx/MLM-1582645055-cubierta-funda-mazda-3-2003-2023-sm2-transpirable-_JM",
      },
      {
        name: "Hyundai Sonata",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447258962-cubierta-funda-hyundai-sonata-2010-2021-sm2-transpirable-_JM",
      },
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
    ],
  },
  {
    id: "asuv",
    type: "afelpada",
    image: suv,
    title: "Funda Afelpada SUV",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      {
        name: "Toyota Rav4",
        url: "https://articulo.mercadolibre.com.mx/MLM-1711879017-cubierta-funda-toyota-rav4-2000-2023-um1-transpirable-_JM",
      },
      {
        name: "Mazda CX-5",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447452014-cubierta-funda-mazda-cx-5-2013-2022-um1-transpirable-_JM",
      },
      {
        name: "Chevrolet Tahoe",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445813415-cubierta-funda-chevrolet-tahoe-1990-2021-ug2-transpirable-_JM",
      },
      {
        name: "Jeep Grand Cherokee",
        url: "https://articulo.mercadolibre.com.mx/MLM-1450291209-cubierta-funda-jeep-grand-cherokee-2000-2006-um2-transpirabl-_JM",
      },
      {
        name: "Nissan Rogue",
        url: "https://articulo.mercadolibre.com.mx/MLM-1442327355-cubierta-funda-nissan-rogue-2011-2022-um2-transpirable-_JM",
      },
      {
        name: "VW Tiguan",
        url: "https://articulo.mercadolibre.com.mx/MLM-2441939326-funda-cubierta-vw-tiguan-camioneta-suv-m1-transpirable-_JM",
      },
    ],
  },
  {
    id: "ahb",
    type: "afelpada",
    image: hb,
    title: "Funda Afelpada Hatchback",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Toyota Yaris",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445836289-cubierta-funda-toyota-yaris-sedan-sm1-transpirable-_JM",
      },
      {
        name: "Kia Rio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Peugeot 308",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
      {
        name: "Renault Clio",
        url: "https://articulo.mercadolibre.com.mx/MLM-1447453702-cubierta-funda-renault-clio-2005-2019-hc0-transpirable-_JM",
      },
      {
        name: "Mazda 2",
        url: "https://articulo.mercadolibre.com.mx/MLM-3316870108-cubierta-funda-mazda-2-hc1-transpirable-_JM",
      },
    ],
  },
  {
    id: "arzr",
    type: "afelpada",
    image: rzr,
    title: "Funda Afelpada RZR",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      {
        name: "Polaris RZR XP 1000",
        url: "googl.com",
      },
      {
        name: "Can-Am Maverick X3",
        url: "googl.com",
      },
      {
        name: "Yamaha YXZ1000R",
        url: "googl.com",
      },
      {
        name: "Honda Talon 1000R",
        url: "googl.com",
      },
      {
        name: "Textron Wildcat 1000",
        url: "googl.com",
      },
      {
        name: "Kawasaki Teryx KRX 1000",
        url: "googl.com",
      },
    ],
  },
];

function Catalog() {
  const [selectedType, setSelectedType] = useState(null);
  const [visibleSlides, setVisibleSlides] = useState(3);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const filteredFundas = selectedType
    ? fundas.filter((funda) => funda.type === selectedType)
    : [];

  const slides = filteredFundas.map((funda) => ({
    content: (
      <Card
        key={funda.id}
        image={funda.image}
        title={funda.title}
        description={funda.description}
        models={funda.models || []}
      />
    ),
  }));

  const updateVisibleSlides = () => {
    const width = window.innerWidth;

    if (width < 768) {
      setVisibleSlides(1);
    } else {
      setVisibleSlides(3);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  return (
    <section className={styles.catalog}>
      <Element name="products">
        <h2 className={styles.catalog__title}>Nuestro Catálogo de Productos</h2>
      </Element>
      <div className={styles.catalog__types}>
        {materials.map((material) => (
          <Button
            key={material.id}
            className={`${styles.catalog__typeBtn} ${
              selectedType === material.id ? styles.selected : ""
            }`}
            onClick={() => handleTypeClick(material.id)}
          >
            <h3>{material.name}</h3>
            <p>{material.description}</p>
          </Button>
        ))}
      </div>
      {selectedType && (
        <Carousel
          classCarousel={styles.carousel}
          classSlide={styles.slide}
          classActive={styles.active}
          classContainer={styles.container}
          slides={slides}
          autoplay={false}
          visibleSlides={visibleSlides}
        />
      )}
    </section>
  );
}

export default Catalog;
