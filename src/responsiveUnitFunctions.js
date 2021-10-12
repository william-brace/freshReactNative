/** @format */

import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from "react-native-responsive-screen";

const artboardHeight = 896;
const artboardWidth = 414;
/**
 * Width-Percentage
 * Converts width dimension to percentage
 * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const wp = (dimension) => {
  return wp2dp((dimension / artboardWidth) * 100 + "%");
};

/**
 * Height-Percentage
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension directly taken from design wireframes
 * @returns {string} percentage string e.g. '25%'
 */
export const hp = (dimension) => {
  return hp2dp((dimension / artboardHeight) * 100 + "%");
};
