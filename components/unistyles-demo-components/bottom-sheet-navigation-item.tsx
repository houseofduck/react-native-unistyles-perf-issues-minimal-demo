import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-unistyles";
import { Href, router } from "expo-router";
import typography from "@/constants/typography";
import { EmojiKey } from "@/constants/emojis/types";
import { ColorName } from "@/constants/colors/types";
import { getColor } from "@/constants/colors/utils";
import { getEmojiByKey } from "@/constants/emojis/utils";

type Props = {
  path: Href;
  title: string;
  description: string;
  emoji: EmojiKey;
  color: ColorName;
  dismiss?: () => void;
};

export default function BottomSheetNavigationItem({
  path,
  title,
  color,
  emoji,
  description,
  dismiss,
}: Props) {
  const colorHex = getColor(color);
  const emojiCode = getEmojiByKey(emoji);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (dismiss) {
          dismiss();
        }
        router.push(path);
      }}
      activeOpacity={0.8}
    >
      <View style={styles.iconContainer(colorHex)}>
        <Text style={styles.emoji}>{emojiCode}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.padding.md,
    borderBottomWidth: 1,
    gap: 20,
    borderBottomColor: theme.colors.surface["020"],
  },
  emoji: {
    fontSize: 28,
  },

  iconContainer: (color: string) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: color,
  }),

  textContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    ...typography.headings.h4,
    color: theme.colors.text["900"],
  },
  description: {
    ...typography.body.bodySmall,
    color: theme.colors.text["500"],
  },
}));
