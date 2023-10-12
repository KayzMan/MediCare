import { View, useWindowDimensions } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";
import { useIsFocused } from "@react-navigation/native";

// 👇 theme
import { theme } from "../../../theme";

// 👇 styles
import { allChatsStyles } from "./allChats.styles";

// 👇 models
import { iChatItem, iChatItemProps } from "./allChats.model";

// 👇 controllers
import { loadAllChats } from "./allChats.controller";

// 👇 utilities
import {
  isGreaterThanExtraLarge,
  isLargeDeviceOrBigger,
  isSmallDeviceOrBigger,
} from "../../../utilities/styles.utility";

// 👇 components
import ChatItem from "./ChatItem";
import ContainerView from "../../Global/Container/ContainerView";

export default function AllChats() {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) setIsLoading(false);
    else {
      setIsLoading(true);
    }
  }, [isFocused]);

  // 👇 chat items renderItem
  const renderItem = useCallback(
    (item: iChatItemProps) => <ChatItem {...item.item} />,
    []
  );

  // 👇 chat items keyExtractor
  const keyExtractor = useCallback(
    (item: iChatItem, index: number) => `chatItem-#${item.id}-#${index}`,
    []
  );

  if (isLoading === false) {
    return (
      <View
        style={[
          allChatsStyles.container,
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
          data={loadAllChats()}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  } else return <ContainerView />;
}
