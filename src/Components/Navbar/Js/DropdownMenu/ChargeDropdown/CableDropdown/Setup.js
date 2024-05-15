const options = [
  {
    id: 1,
    title: "Types",
    state: "cableTypes",
    options: [
      {
        id: 1,
        featureItem: "usb -micro usb",
        value: "usb -micro usb",
      },
      {
        id: 2,
        featureItem: "usb-type c",
        value: "usb-type c",
      },
      {
        id: 3,
        featureItem: "usb-lightning",
        value: "usb-lightning",
      },
      {
        id: 4,
        featureItem: "type c-type c",
        value: "type c-type c",
      },
      {
        id: 5,
        featureItem: "type c-lightning",
        value: "type c-lightning",
      },
      {
        id: 6,
        featureItem: "type c-3.5mm ",
        value: "type c-3.5mm ",
      },
      {
        id: 7,
        featureItem: "lightning-3.5mm ",
        value: "lightning-3.5mm ",
      },
    ],
  },
  {
    id: 2,
    title: "Length",
    state: "cableLength",
    options: [
      {
        featureItem: "1 meter",
        value: "1 meter",
      },
      { featureItem: "1.2 meter", value: "1.2 meter" },
      { featureItem: "1.8 meter", value: "1.8 meter" },
      { featureItem: "2 meter", value: "2 meter" },
    ],
  },
  {
    id: 3,
    title: "Price",
    state: "cablePrice",
    options: [
      {
        id: 1,
        featureItem: "less than 4 hrs",
        value: "less than 4 hrs",
      },
      {
        id: 2,
        featureItem: "more than 7 hrs",
        value: "more than 7 hrs",
      },
    ],
  },
];

export { options };
