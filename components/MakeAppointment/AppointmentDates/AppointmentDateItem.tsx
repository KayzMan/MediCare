import React, { useEffect, useRef } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  Extrapolate,
  FadeIn,
  Layout,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
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
  const selected = useDerivedValue(() => {
    return item.selected ? 1 : 0;
  }, []);

  // 👇 component did mount.
  useEffect(() => {
    initialMode.current = false;
  }, []);

  const reanimatedStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      selected.value,
      [0, 1, 0],
      [0.9, 1, 0.9],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ scale }],
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
