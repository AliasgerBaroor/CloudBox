import { useState, useCallback } from 'react';
import namer from "color-namer";
const useColorPaletteGenerator = () => {
  const [colors, setColors] = useState([]);

  const genHexColor = () => {
    const tempHexColor = `#${Math.random()
      .toString(16)
      .slice(2, 8)
      .padEnd(6, "0")}`;
    const colorName = namer(tempHexColor).ntc[0].name;
    return { color: tempHexColor, name: colorName };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const hslAnalogusToHex = (h, s, l) => {
    // Convert HSL to HEX for analogous colors
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r, g, b;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    const rHex = Math.round((r + m) * 255).toString(16).padStart(2, "0");
    const gHex = Math.round((g + m) * 255).toString(16).padStart(2, "0");
    const bHex = Math.round((b + m) * 255).toString(16).padStart(2, "0");

    return `#${rHex}${gHex}${bHex}`;
  };

  const luminance = (hex) => {
    const rgb = hexToRgb(hex);
    const [r, g, b] = rgb.map((x) => {
      x = x / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const contrastRatio = (hex1, hex2) => {
    const lum1 = luminance(hex1);
    const lum2 = luminance(hex2);
    const [L1, L2] = lum1 > lum2 ? [lum1, lum2] : [lum2, lum1];
    return (L1 + 0.05) / (L2 + 0.05);
  };

  const getRandomWarmColor = () => {
    const hue = Math.random() * 30; // Warm colors range from 0 to 30 degrees
    const saturation = 80 + Math.random() * 20; // High saturation
    const lightness = 50 + Math.random() * 10; // Slightly lighter
    return hslToHex(hue, saturation, lightness);
  };

  const getRandomCoolColor = () => {
    const hue = 180 + Math.random() * 30; // Cool colors range from 180 to 210
    const saturation = 80 + Math.random() * 20; // High saturation
    const lightness = 50 + Math.random() * 10; // Slightly lighter
    return hslToHex(hue, saturation, lightness);
  };

  const generateColorPalette = useCallback((type) => {
    const baseNeutralPairs = [
        {
          base: "#F5F5F5",
          light: "#FFFFFF",
          dark: "#D0D0D0",
          names: { light: "Off-White", base: "Light Gray", dark: "Gray" },
        }, // Light Gray to White
        {
          base: "#D0D0D0",
          light: "#F5F5F5",
          dark: "#A0A0A0",
          names: {
            light: "White Smoke",
            base: "Silver Gray",
            dark: "Charcoal Gray",
          },
        }, // Gray to Light Gray
        {
          base: "#A0A0A0",
          light: "#D0D0D0",
          dark: "#808080",
          names: { light: "Gainsboro", base: "Dark Gray", dark: "Slate Gray" },
        }, // Dark Gray to Gray
        {
          base: "#808080",
          light: "#A0A0A0",
          dark: "#404040",
          names: { light: "Dark Gray", base: "Dim Gray", dark: "Jet Black" },
        }, // Gray to Dark Gray
        {
          base: "#404040",
          light: "#808080",
          dark: "#000000",
          names: { light: "Charcoal", base: "Black Gray", dark: "Black" },
        }, // Dark Gray to Black
        {
          base: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#D0D0D0",
          names: { light: "Snow", base: "Off-White", dark: "Light Gray" },
        }, // White to Light Gray
      ];

    const newColors = [];
    const colorPairs = [];
    const analogousColors = [];
    const neutralColorPairs = [];
    const warmCoolColors = [];
    let triadicColors = [];
    let baseHue;

    switch (type) {
      case "complementary":
        for (let i = 0; i < 2; i++) {
          const baseHue = Math.random() * 360;
          const baseSaturation = Math.random() * (100 - 60) + 60;
          const baseLightness = Math.random() * (70 - 40) + 40;
          const compSaturation = Math.random() * (100 - 30) + 30;
          const compLightness = Math.random() * (90 - 50) + 50;
          const complementaryHue = (baseHue + 180) % 360;
          const color1HEX = hslToHex(baseHue, baseSaturation, baseLightness);
          const color2HEX = hslToHex(complementaryHue, compSaturation, compLightness);
          const ratio = contrastRatio(color1HEX, color2HEX);
          const name1 = namer(color1HEX).ntc[0].name;
          const name2 = namer(color2HEX).ntc[0].name;

          colorPairs.push({
            color1: color1HEX,
            color2: color2HEX,
            name1,
            name2,
            contrastRatio: ratio.toFixed(2),
          });
        }
        break;

      case "analogous":
        baseHue = Math.random() * 360;
        const numberOfColors = 3;
        const hueStep = 20;

        for (let i = 0; i < numberOfColors; i++) {
          const hue = (baseHue + i * hueStep) % 360;
          const saturation = 70;
          const lightness = 50;
          const colorHEX = hslAnalogusToHex(hue, saturation, lightness);
          const name = namer(colorHEX).ntc[0].name;
          analogousColors.push({
            color: colorHEX,
            name,
          });
        }
        break;

      case "triadic":
        baseHue = Math.random() * 360;
        const saturation = 70;
        const lightness = 50;
        const triadicTempColors = [
          hslToHex(baseHue, saturation, lightness),
          hslToHex((baseHue + 120) % 360, saturation, lightness),
          hslToHex((baseHue + 240) % 360, saturation, lightness),
        ];

        const colorObjects = triadicTempColors.map((colorHEX) => {
          const name = namer(colorHEX).ntc[0].name;
          return { color: colorHEX, name };
        });

        triadicColors.push(colorObjects);
        break;

      case "neutral":
        baseNeutralPairs.forEach((pair, index) => {
          neutralColorPairs.push({
            pairNumber: index + 1,
            lightColor: pair.light,
            baseColor: pair.base,
            darkColor: pair.dark,
            names: pair.names,
          });
        });
        break;

      case "warm-cool":
        for (let i = 0; i < 5; i++) {
          const warmColor = getRandomWarmColor();
          const coolColor = getRandomCoolColor();
          warmCoolColors.push({
            warmColor,
            coolColor,
            warmName: namer(warmColor).ntc[0].name,
            coolName: namer(coolColor).ntc[0].name,
          });
        }
        break;

      default:
        for (let i = 0; i < 6; i++) {
          newColors.push(genHexColor());
        }
    }

    triadicColors = triadicColors[0];

    if (type === "complementary") {
      setColors(colorPairs);
    } else if (type === "analogous") {
      setColors(analogousColors);
    } else if (type === "triadic") {
      setColors(triadicColors);
    } else if (type === "neutral") {
      setColors(neutralColorPairs);
    } else if (type === "warm-cool") {
      setColors(warmCoolColors);
    } else {
      setColors(newColors);
    }
  }, []);

  return { colors, generateColorPalette };
};

export default useColorPaletteGenerator;
