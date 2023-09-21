import uuid from "react-uuid";
function musicData() {
  return [
    {
      name: "Desire",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/09/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      artist: "Psalm Trees, Guillaume Muschalle",
      audio: "https://stream.chillhop.com/mp3/62122",
      color: ["#FBF7EC", "#C32A25", "#BE2A28"],
      id: uuid(),
      active: true,
    },
    {
      name: "South of the Circle",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/08/3f5eb74c8d8e36a38baa2f71be53ea5761ed3c6d-1024x1024.jpg",
      artist: "OST Remixes",
      audio: "https://stream.chillhop.com/mp3/43791",
      color: ["#FAC98F", "#6DA798", "#FC4E50"],
      id: uuid(),
      active: false,
    },
    {
      name: "Astrovibes",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/06/9180a7fabdc07fe2e221bb26bdd477cb66f6b69e-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://stream.chillhop.com/mp3/62136",
      color: ["#B27F2F", "#202C28", "#19BDF5"],
      id: uuid(),
      active: false,
    },
    {
      name: "Moving On",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/09/1a58532ef45339e1bd1a3324635e3cf133f9940b-1024x1024.jpg",
      artist: "Nymano, Suuna",
      audio: "https://stream.chillhop.com/mp3/62123",
      color: ["#242F7B", "#462B6D", "#5F8EC8"],
      id: uuid(),
      active: false,
    },
    {
      name: "Cabriolet",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/03/c0c6175640eb9aa14b955ae91e255b3175de1c32-1024x1024.jpg",
      artist: "Ben Bada Boom, Plusma",
      audio: "https://stream.chillhop.com/mp3/62124",
      color: ["#FEBE36", "#B10101", "#044245"],
      id: uuid(),
      active: false,
    },
    {
      name: "Lookaway",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/10/0b99c64a1316ecfb990c546ba4a73f6de27cfde5-1024x1024.jpg",
      artist: "DYSSEE, Blumen",
      audio: "https://stream.chillhop.com/mp3/62125",
      color: ["#D7C4E3", "#3A8AC6", "#2D4671"],
      id: uuid(),
      active: false,
    },
    {
      name: "It’s Okay",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/05/5683fa8ae05221c0d06eeedd90fe00e653d27c48-1024x1024.jpg",
      artist: "Yasper",
      audio: "https://stream.chillhop.com/mp3/62126",
      color: ["#FDF2A2", "#F8D391", "#BE956F"],
      id: uuid(),
      active: false,
    },
    {
      name: "Tomorrow",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/08/bcee02e9e81482f5b3579be3796170f7e2a9be2e-1024x1024.jpg",
      artist: "Hanz",
      audio: "https://stream.chillhop.com/mp3/62132",
      color: ["#000D26", "#A8E9E2", "#8AD2D3"],
      id: uuid(),
      active: false,
    },
    {
      name: "Roadtrips",
      cover:
        "https://chillhop.com/wp-content/uploads/2023/08/65f57918cd8ef03d204365b8e735f418b3196469-1024x1024.jpg",
      artist: "Arbour",
      audio: "https://stream.chillhop.com/mp3/62278",
      color: ["#AEBEB8", "#96ABA2", "#4E6D66"],
      id: uuid(),
      active: false,
    },
  ];
}

export default musicData;
