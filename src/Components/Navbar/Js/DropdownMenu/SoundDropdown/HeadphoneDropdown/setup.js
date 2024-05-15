const options = [
  {
    title: "Bluetooth Version",
    state: "bluetoothVersion",
    options: [
      {
        featureItem: "More Than 5.0 v",
        value: "More Than 5.0 v",
      },
      { featureItem: "Less Than 5.0 v", value: "Less Than 5.0 v" },
    ],
  },
  {
    title: "Battery Life",
    state: "batteryLife",
    options: [
      {
        featureItem: "More Than 4 Hrs",
        value: "More Than 4 Hrs",
      },
      { featureItem: "More Than 7 Hrs", value: "More Than 7 Hrs" },
    ],
  },
  {
    title: "Noise Cancellation",
    state: "noiseCancellation",
    options: [
      {
        featureItem: "anc",
        value: "anc",
      },
      { featureItem: "enc", value: "enc" },
      { featureItem: "none", value: "none" },
    ],
  },

  {
    title: "Price",
    state: "driverPrice",
    options: [
      { featureItem: "Less than 3000", value: "Less than 3000" },
      { featureItem: "Less than 4000", value: "Less than 4000" },
      { featureItem: "Less than 5000", value: "Less than 5000" },
    ],
  },
];
export { options };
