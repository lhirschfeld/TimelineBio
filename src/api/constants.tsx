export const colors = {
  offBlack: "#2f2f2f",
  red: {
    lightest: "#F37A96",
    lighter: "#ED5175",
    default: "#E62D58",
    darker: "#CB0835",
    darkest: "#9E0025"
  },
  green: {
    lightest: "#E1F97E",
    lighter: "#D8F754",
    default: "#CBF02F",
    darker: "#ADD409",
    darkest: "#86A600"
  },
  blue: {
    lightest: "#748BCE",
    lighter: "#4C67B8",
    default: "#304EA9",
    darker: "#163695",
    darkest: "#0D2774"
  }
};

export const page = {
  width: Math.min(980, window.innerWidth - 50)
};

export const timeline = {
  height: 10,
  smallRadius: 3,
  bigRadius: 10,
  stroke: 0,
  startDate: new Date(2013, 9, 1)
};
