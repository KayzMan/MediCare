import { View, useWindowDimensions } from "react-native";
import React, { useCallback, useState } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { appointmentDatesStyles } from "./appointmentDates.styles";

// 👇 models
import {
  iAppointmentDateItem,
  iAppointmentDateItemProps,
} from "./appointmentDates.model";

// 👇 controllers
import { loadAppointmentDates } from "./appointmentDates.controller";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import AppointmentDateItem from "./AppointmentDateItem";

export default function AppointmentDates() {
  const { width } = useWindowDimensions();

  const [doctorAppointmentDates, setDoctorAppointmentDates] = useState<
    iAppointmentDateItem[]
  >(loadAppointmentDates());

  const handleAppointmentDateClicked = useCallback(
    (clickedDate: iAppointmentDateItem) => {
      let newDates: iAppointmentDateItem[] = doctorAppointmentDates.map(
        (date) => {
          return clickedDate?.id === date?.id
            ? { ...date, selected: true }
            : { ...date, selected: false };
        }
      );
      setDoctorAppointmentDates(newDates);
    },
    []
  );

  // appointment dates renderItem
  const renderItem = useCallback(
    (item: iAppointmentDateItemProps) => (
      <AppointmentDateItem
        item={item.item}
        handleAppointmentDateClicked={handleAppointmentDateClicked}
      />
    ),
    []
  );

  // appointment dates keyExtractor
  const keyExtractor = useCallback(
    (date: iAppointmentDateItem, index: number) =>
      `appointmentDate-#${date.id}-#${index.toString()}`,
    []
  );

  return (
    <View
      style={[
        appointmentDatesStyles.container,
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
      <FlashList
        estimatedItemSize={70}
        data={doctorAppointmentDates}
        // @ts-ignore
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
