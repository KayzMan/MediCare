import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { topImageStyles } from "./topImage.styles";

// 👇 utilities
import {
  calculateImageDimension,
  isLargerThanMobileSize,
} from "../../../utilities/styles.utility";

export default function TopImage() {
  const { width } = useWindowDimensions();

  const { width: imageWidth, height: imageHeight } = calculateImageDimension(
    368,
    320,
    undefined,
    undefined,
    500
  );

  const { width: bigImageWidth, height: bigImageHeight } =
    calculateImageDimension(
      368,
      320,
      theme.sizes.maxMobileSize,
      undefined,
      500
    );

  return (
    <View style={topImageStyles.container}>
      <Avatar
        source={require("../../../assets/images/a_calendar_of_events.png")}
        size={"xlarge"}
        containerStyle={{
          alignSelf: "center",
          width: isLargerThanMobileSize(theme.sizes.screenWidth)
            ? bigImageWidth
            : imageWidth,
          height: isLargerThanMobileSize(theme.sizes.screenWidth)
            ? bigImageHeight
            : imageHeight,
          left: 20,
        }}
      />
    </View>
  );
}
