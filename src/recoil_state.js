import { atom } from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: [
    {
      id: 0,
      name: "AMD Ryzen 5 5600X",
      type: "Processors",
      price: 360,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 1,
      name: "AMD Ryzen 7 5800X",
      type: "Processors",
      price: 460,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 2,
      name: "AMD Ryzen 9 5900X",
      type: "Processors",
      price: 500,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 3,
      name: "AMD Ryzen 9 5950X",
      type: "Processors",
      price: 600,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 4,
      name: "Kingston HyperX Fury DDR3",
      type: "Memory",
      price: 60,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 5,
      name: "Kingston HyperX Fury DDR4",
      type: "Memory",
      price: 100,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 6,
      name: "Kingston HyperX Fury DDR4 RGB",
      type: "Memory",
      price: 150,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 7,
      name: "Kingston HyperX Predator DDR4",
      type: "Memory",
      price: 200,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 8,
      name: "Kingston HyperX Predator DDR4 RGB",
      type: "Memory",
      price: 230,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 9,
      name: "Nvidia GeForce RTX 3070",
      type: "Video Cards",
      price: 1000,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 10,
      name: "Nvidia GeForce RTX 3080",
      type: "Video Cards",
      price: 1500,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 11,
      name: "Nvidia GeForce RTX 3090",
      type: "Video Cards",
      price: 2000,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 12,
      name: "MSGI B450 Tomahawk MAX",
      type: "Motherboard",
      price: 200,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 13,
      name: "Asus TUF Gaming X570-Plus (Wi-Fi)",
      type: "Motherboard",
      price: 240,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 14,
      name: "Asus ROG STRIX B450-F GAMING",
      type: "Motherboard",
      price: 300,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 15,
      name: "Fractal Design Meshify C",
      type: "Chassis",
      price: 100,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 16,
      name: "NZXT H510 Elite",
      type: "Chassis",
      price: 1500,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    },
    {
      id: 17,
      name: "Lian Li PC-O11 Dynamic",
      type: "Chassis",
      price: 200,
      description:
        "Nunc sollicitudin aliquet orci, eget mollis ex auctor sit amet. Proin eu metus orci. Ut id lectus lacus. Integer fermentum massa vel vehicula ultrices. Aenean gravida pellentesque tortor, vel egestas ex tincidunt et. Duis blandit est at mi luctus posuere. Vestibulum non sagittis dui."
    }
  ] // default value (aka initial value)
});

const shoppingCart = atom({
  key: "shoppingCart", // unique ID (with respect to other atoms/selectors)
  default: []
});

export { textState, shoppingCart };