import { View, useWindowDimensions } from "react-native";
import React, { useCallback } from "react";
import { FlashList } from "@shopify/flash-list";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { allEvents } from "./allEvents.styles";

// 👇 controllers
import {
  loadUpcomingEvents,
  loadCompletedEvents,
} from "./allEvents.controller";

// 👇 models
import { iEventItem, iEventItemProps } from "./allEvents.model";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import MyText from "../../Global/MyText/MyText";
import EventItem from "./EventItem";

export default function AllEvents() {
  const { width } = useWindowDimensions();

  // 👇 upcoming events renderItem
  const upcomingEventsRenderItem = useCallback(
    (item: iEventItemProps) => <EventItem {...item.item} />,
    []
  );

  // 👇 completed Events render item
  const completedEventsRenderItem = useCallback(
    (item: iEventItemProps) => <EventItem {...item.item} />,
    []
  );
  // 👇 upcoming event keyExtractor
  const keyExtractor = useCallback(
    (item: iEventItem, index: number) => `eventItem-#${item.id}-#${index}`,
    []
  );

  return (
    <View
      style={[
        allEvents.container,
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
        estimatedItemSize={100}
        data={loadUpcomingEvents()}
        renderItem={upcomingEventsRenderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MyText fontWeight="ubuntuMedium">Upcoming Events</MyText>
        }
        ListHeaderComponentStyle={{ marginBottom: theme.sizes.appMargin }}
      />

      {/* 👇 spacer */}
      <View style={{ marginVertical: theme.sizes.appMargin * 0.25 }} />

      <FlashList
        estimatedItemSize={100}
        data={loadCompletedEvents()}
        renderItem={completedEventsRenderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <MyText fontWeight="ubuntuMedium">Completed Events</MyText>
        }
        ListHeaderComponentStyle={{ marginBottom: theme.sizes.appMargin }}
      />
    </View>
  );
}
