import React, { useState } from "react";
import { Element } from "react-scroll";
import Button from "./Button";
import Card from "./Card";
import Carousel from "./Carousel";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
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
    id: "tSedanC1",
    type: "transpirable",
    image: image1,
    title: "Funda Transpirable Estándar",
    description:
      "Perfecta para climas cálidos, permite la circulación del aire.",
    models: [
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1445332507-cubierta-funda-audi-a1-2007-al-2022-hc0-transpirable-_JM",
      },
      {
        name: "BMW Serie 3",
        url: "googl.com",
      },
      {
        name: "Ford Focus",
        url: "googl.com",
      },
      {
        name: "Honda Civic",
        url: "googl.com",
      },
      {
        name: "Mazda 3",
        url: "https://articulo.mercadolibre.com.mx/MLM-1582645055-cubierta-funda-mazda-3-2003-2023-sm2-transpirable-_JM",
      },
      {
        name: "Toyota Corolla",
        url: "googl.com",
      },
      {
        name: "VW Golf",
        url: "https://articulo.mercadolibre.com.mx/MLM-1303132993-funda-cubr-para-auto-sedan-c2-transpirable-anti-sol-polvo-_JM",
      },
    ],
  },
  {
    id: "tSedanC2",
    type: "transpirable",
    image: image2,
    title: "Funda Transpirable Premium",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      { name: "Audi A3", url: "" },
      { name: "BMW Series 3", url: "" },
      { name: "Mercedes Clase C", url: "" },
      { name: "Volvo 560", url: "" },
      { name: "Lxus IS", url: "" },
    ],
  },
  {
    id: "tSedanM1",
    type: "transpirable",
    image: image2,
    title: "Funda Transpirable Premium",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      { name: "Audi A3", url: "" },
      { name: "BMW Series 3", url: "" },
      { name: "Mercedes Clase C", url: "" },
      { name: "Volvo 560", url: "" },
      { name: "Lxus IS", url: "" },
    ],
  },
  {
    id: "tSedanM2",
    type: "transpirable",
    image: image1,
    title: "Funda Transpirable Premium",
    description:
      "Mayor protección y durabilidad para climas cálidos y húmedos.",
    models: [
      {
        name: "BMW Serie 3",
        url: "googl.com",
      },
      {
        name: "Ford Focus",
        url: "googl.com",
      },
      {
        name: "Honda Civic",
        url: "googl.com",
      },
      {
        name: "Mazda 3",
        url: "googl.com",
      },
      {
        name: "Toyota Corolla",
        url: "googl.com",
      },
      {
        name: "VW Golf",
        url: "googl.com",
      },
    ],
  },
  {
    id: "iSUVC1",
    type: "impermeable",
    image: image2,
    title: "Funda Impermeable Básica",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      { name: "Fiat 500", url: "" },
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1778573642-funda-cubierta-audi-a1-auto-hatchback-c0-impermeable-_JM",
      },
      { name: "Mini Cooper", url: "" },
      { name: "Renault Clio", url: "" },
      { name: "Peugeot 208", url: "" },
      { name: "Opel Corsa", url: "" },
    ],
  },
  {
    id: "iSUVM1",
    type: "impermeable",
    image: image1,
    title: "Funda Impermeable Básica",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      { name: "Fiat 500", url: "" },
      { name: "Mini Cooper", url: "" },
      { name: "Renault Clio", url: "" },
      { name: "Peugeot 208", url: "" },
      { name: "Opel Corsa", url: "" },
    ],
  },
  {
    id: "iSUVG1",
    type: "impermeable",
    image: image2,
    title: "Funda Impermeable Básica",
    description: "Protege tu vehículo de la lluvia, nieve y humedad.",
    models: [
      { name: "Fiat 500", url: "" },
      { name: "Mini Cooper", url: "" },
      { name: "Renault Clio", url: "" },
      { name: "Peugeot 208", url: "" },
      { name: "Opel Corsa", url: "" },
    ],
  },
  {
    id: "aHatchC0",
    type: "afelpada",
    image: image2,
    title: "Funda Afelpada de Lujo",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      { name: "Mercedes Clase S", url: "" },
      {
        name: "Audi A1",
        url: "https://articulo.mercadolibre.com.mx/MLM-1964862137-funda-cubierta-audi-a1-auto-hatchback-c1-afelpada-_JM",
      },
      { name: "BMW Serie 7", url: "" },
      { name: "Audi A8", url: "" },
      { name: "Jaguar XJ", url: "" },
      { name: "Porsche Panamera", url: "" },
    ],
  },
  {
    id: "aHatchC1",
    type: "afelpada",
    image: image1,
    title: "Funda Afelpada de Lujo",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      { name: "Mercedes Clase S", url: "" },
      { name: "BMW Serie 7", url: "" },
      { name: "Audi A8", url: "" },
      { name: "Jaguar XJ", url: "" },
      { name: "Porsche Panamera", url: "" },
    ],
  },
  {
    id: "aHatchM1",
    type: "afelpada",
    image: image2,
    title: "Funda Afelpada de Lujo",
    description: "Suave protección para coches de alta gama en garajes.",
    models: [
      { name: "Mercedes Clase S", url: "" },
      { name: "BMW Serie 7", url: "" },
      { name: "Audi A8", url: "" },
      { name: "Jaguar XJ", url: "" },
      { name: "Porsche Panamera", url: "" },
    ],
  },
];

function Catalog() {
  const [selectedType, setSelectedType] = useState(null);

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
          visibleSlides={3}
        />
      )}
    </section>
  );
}

export default Catalog;
