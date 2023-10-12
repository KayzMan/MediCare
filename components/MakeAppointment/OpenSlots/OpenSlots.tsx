import { View, useWindowDimensions } from "react-native";
import React, { useState } from "react";

// TODO: i am actually lazy to do the correct implementation of using a FlatList or FlashList 😃😃

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { openSlotsStyles } from "./openSlots.styles";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function OpenSlots() {
  const { width } = useWindowDimensions();
  const [currentSlot, setCurrentSlot] = useState("10:10 am");

  return (
    <View
      style={[
        openSlotsStyles.container,
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
      {/* 👇 title */}
      <MyText fontWeight="ubuntuBold" style={openSlotsStyles.title}>
        Morning Slots
      </MyText>
      {/* 👇 slots items */}
      <View style={openSlotsStyles.slotItems}>
        <View
          style={[
            openSlotsStyles.slotItem,
            currentSlot === "10:10 am" && {
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <MyText
            style={[
              openSlotsStyles.slotItemText,
              currentSlot === "10:10 am" && { color: theme.colors.white },
            ]}
            onPress={() => {
              setCurrentSlot("10:10 am");
            }}
          >
            10:10 am
          </MyText>
        </View>
        <View
          style={[
            openSlotsStyles.slotItem,
            currentSlot === "10:30 am" && {
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <MyText
            style={[
              openSlotsStyles.slotItemText,
              currentSlot === "10:30 am" && {
                color: theme.colors.white,
              },
            ]}
            onPress={() => {
              setCurrentSlot("10:30 am");
            }}
          >
            10:30 am
          </MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>10:50 am</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>11:20 am</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>11:40 am</MyText>
        </View>
      </View>

      {/* 👇 title */}
      <MyText fontWeight="ubuntuBold" style={openSlotsStyles.title}>
        Afternoon Slots
      </MyText>
      {/* 👇 slots items */}
      <View style={openSlotsStyles.slotItems}>
        <View style={[openSlotsStyles.slotItem]}>
          <MyText style={[openSlotsStyles.slotItemText]}>02:00 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>02:20 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>02:40 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>03:30 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>04:00 pm</MyText>
        </View>
      </View>

      {/* 👇 title */}
      <MyText fontWeight="ubuntuBold" style={openSlotsStyles.title}>
        Evening Slots
      </MyText>
      {/* 👇 slots items */}
      <View style={openSlotsStyles.slotItems}>
        <View style={[openSlotsStyles.slotItem]}>
          <MyText style={[openSlotsStyles.slotItemText]}>07:00 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>07:20 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>07:40 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>08:00 pm</MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>08:20 pm</MyText>
        </View>
      </View>
    </View>
  );
}
