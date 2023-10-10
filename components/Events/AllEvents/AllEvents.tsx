import { View } from "react-native";
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

// 👇 components
import MyText from "../../Global/MyText/MyText";
import EventItem from "./EventItem";

export default function AllEvents() {
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
    <View style={allEvents.container}>
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
