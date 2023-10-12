import React, { useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  FadeIn,
  Layout,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { appointmentDatesStyles } from "./appointmentDates.styles";

// 👇 models
import { iAppointmentDateItemProps } from "./appointmentDates.model";

// 👇 components
import MyText from "../../Global/MyText/MyText";

export default function AppointmentDateItem({
  item,
  handleAppointmentDateClicked,
}: iAppointmentDateItemProps) {
  const initialMode = useRef<boolean>(true);
  const scale = useDerivedValue(() => {
    return item.selected ? withSpring(1) : withSpring(0.9);
  });

  // 👇 component did mount.
  useEffect(() => {
    initialMode.current = false;
  }, []);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <AnimatedTouchableOpacity
      style={[
        appointmentDatesStyles.dateItem,
        item.selected && { backgroundColor: theme.colors.primary },
        reanimatedStyles,
      ]}
      activeOpacity={theme.sizes.touchableOpacity_high}
      onPress={() => handleAppointmentDateClicked?.(item)}
      entering={initialMode.current ? FadeIn.delay(120 * item.id) : FadeIn}
      layout={Layout.delay(200)}
    >
      <MyText
        fontWeight="ubuntuMedium"
        style={[
          appointmentDatesStyles.dateItemDay,
          item.selected && { color: theme.colors.white },
        ]}
      >
        {item.day || "Sun"}
      </MyText>
      <MyText
        style={[
          appointmentDatesStyles.dateItemDate,
          item.selected && { color: theme.colors.white },
        ]}
      >
        {item.date || "00"}
      </MyText>
    </AnimatedTouchableOpacity>
  );
}
