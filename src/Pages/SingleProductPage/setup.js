import img2 from "../../Components/images/Noise cancellation.png";
import img3 from "../../Components/images/driverSize.png";
import img4 from "../../Components/images/battery.png";
import img5 from "../../Components/images/chargingCase.png";
import img6 from "../../Components/images/Bluetooth.png";

const noiseCancelation = {
  img: img2,
  feature: "Active Noise cancellation",
  includedCategory: [
    "Acefast T1",
    // "Acefast T2",
    "Acefast T3",
    "Acefast T4",
    "Acefast T8",
  ],
};

const driverSize = {
  img: img3,
  feature: "12mm Driver size",
  includedCategory: [
    "Acefast T1",
    "Acefast T2",
    "Acefast T3",
    "Acefast T4",
    "Acefast T8",
  ],
};

const listeningtTime = {
  img: img4,
  feature: "Up to 6 hours of listening time on one charge",
  includedCategory: [
    "Acefast T1",
    "Acefast T2",
    "Acefast T3",
    "Acefast T4",
    "Acefast T8",
  ],
};

const portableCharging = {
  img: img5,
  feature: "portable charging case",
  includedCategory: [
    "Acefast T1",
    "Acefast T2",
    "Acefast T3",
    "Acefast T4",
    "Acefast T8",
  ],
};

const bluetoothRange = {
  img: img6,
  feature: "above 5.0 version upto 2km",
  includedCategory: [
    "Acefast T1",
    "Acefast T2",
    "Acefast T3",
    "Acefast T4",
    "Acefast T8",
  ],
};

const details = [
  { title: "noiseCancelation", options: noiseCancelation },
  { title: "bluetoothRange", options: bluetoothRange },
  { title: "driverSize", options: driverSize },
  { title: "portableCharging", options: portableCharging },
  { title: "listeningtTime", options: listeningtTime },
];

export {
  noiseCancelation,
  bluetoothRange,
  driverSize,
  portableCharging,
  listeningtTime,
  details,
};
