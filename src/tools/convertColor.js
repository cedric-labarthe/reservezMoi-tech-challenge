// Change hex color to lighter or darker rgba (varitation can be positive or negative)
// Color input is without hashtag change the color index to wirk with real Hex

const convertColor = (color, variation, opacity) => {
  const red = parseInt(color[0] + color[1], 16) + variation;
  const green = parseInt(color[2] + color[3], 16) + variation;
  const blue = parseInt(color[4] + color[5], 16) + variation;
  return `rgba(${red}, ${green}, ${blue}, ${opacity || '1'})`;
};

export default convertColor;
