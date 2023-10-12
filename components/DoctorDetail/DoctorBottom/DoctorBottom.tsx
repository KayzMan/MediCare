import { useGlobalContext } from "../../../context/MyGlobalContext";
import { View, useWindowDimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { doctorBottomStyles } from "./doctorBottom.styles";

// 👇 utilities
import {
  calculateImageDimension,
  isExtraExtraSmallDevice,
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isLargerThanMobileSize,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

const { width: imageWidth, height: imageHeight } = calculateImageDimension(
  279,
  180,
  undefined,
  undefined,
  100
);

const { width: bigImageWidth, height: bigImageHeight } =
  calculateImageDimension(279, 180, theme.sizes.maxMobileSize, undefined, 100);

export default function DoctorBottom() {
  const { selectedDoctor } = useGlobalContext();
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        doctorBottomStyles.container,
        {
          marginTop: isLargeDeviceOrBigger(width)
            ? theme.sizes.appMargin * 2
            : 0,
          maxWidth: theme.sizes.smallDevice,
          minWidth: isSmallDeviceOrBigger(width)
            ? isGreaterThanExtraLarge(width)
              ? theme.sizes.mediumDevice
              : isLargeDeviceOrBigger(width)
              ? theme.sizes.smallDevice
              : theme.sizes.smallDevice - 50
            : 0,
          marginHorizontal: isSmallDeviceOrBigger(width) ? "auto" : 0,
        },
      ]}
    >
      {/* 👇 biography title */}
      <MyText fontWeight="ubuntuMedium" style={doctorBottomStyles.title}>
        Biography
      </MyText>

      {/* 👇 biography text */}
      <MyText style={doctorBottomStyles.text}>
        {selectedDoctor?.name} is a Zimbabwean {selectedDoctor?.profession}.
        Practices general at Harare Hospital in Harare...
        <MyText style={doctorBottomStyles.readMore}>Read more</MyText>
      </MyText>

      {/* 👇 location title */}
      <MyText fontWeight="ubuntuMedium" style={doctorBottomStyles.title}>
        Location
      </MyText>

      <Avatar
        source={require("../../../assets/images/map.jpeg")}
        size={"xlarge"}
        avatarStyle={{ borderRadius: theme.sizes.radius }}
        containerStyle={{
          marginTop: theme.sizes.appMargin,
          width: isLargerThanMobileSize(width) ? bigImageWidth : imageWidth,
          height: isLargerThanMobileSize(width) ? bigImageHeight : imageHeight,
          alignSelf: "center",
        }}
      />
    </View>
  );
}
