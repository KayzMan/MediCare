import { View } from "react-native";
import React from "react";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { openSlotsStyles } from "./openSlots.styles";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function OpenSlots() {
  return (
    <View style={openSlotsStyles.container}>
      {/* 👇 title */}
      <MyText fontWeight="ubuntuBold" style={openSlotsStyles.title}>
        Morning Slots
      </MyText>
      {/* 👇 slots items */}
      <View style={openSlotsStyles.slotItems}>
        <View
          style={[
            openSlotsStyles.slotItem,
            { backgroundColor: theme.colors.primary },
          ]}
        >
          <MyText
            style={[
              openSlotsStyles.slotItemText,
              { color: theme.colors.white },
            ]}
          >
            10:10 am
          </MyText>
        </View>
        <View style={openSlotsStyles.slotItem}>
          <MyText style={openSlotsStyles.slotItemText}>10:30 am</MyText>
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
