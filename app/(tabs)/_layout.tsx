import { Tabs } from "expo-router";
import React from "react";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { StyleSheet, createUnistylesComponent } from "react-native-unistyles";
import GenericBottomSheet from "@/components/unistyles-demo-components/generic-bottom-sheet";
import { View } from "react-native";
import BottomSheetNavigationItem from "@/components/unistyles-demo-components/bottom-sheet-navigation-item";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  const ThemedTabs = createUnistylesComponent(Tabs, (theme) => ({
    screenOptions: {
      tabBarActiveTintColor: theme.colors.surface["900"],
      headerShown: false,
      tabBarButton: HapticTab,
      tabBarBackground: TabBarBackground,
      tabBarInactiveTintColor: theme.colors.surface[100],
      tabBarStyle: {
        backgroundColor: theme.colors.surface["000"],
        borderTopWidth: 0,
        height: 90,
      },
    },
  }));

  const ThemedFontAwesome = createUnistylesComponent(FontAwesome, (theme) => ({
    color: theme.colors.surface["900"],
  }));

  return (
    <ThemedTabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="example-bottom-sheet-tab"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <FontAwesome size={28} name={"plus"} color={color} />,
          tabBarButton: () => {
            return (
              <GenericBottomSheet
                snapPoints={["45%"]}
                triggerComponent={
                  <View
                    style={{
                      display: "flex",
                      paddingHorizontal: 25,
                      height: "100%",
                      borderRadius: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.plusButton}>
                      <ThemedFontAwesome size={24} name={"plus"} />
                    </View>
                  </View>
                }
              >
                <View style={styles.bottomSheetContent}>
                  <BottomSheetNavigationItem
                    path="/"
                    emoji={"greenApple"}
                    color={"red"}
                    title="Log a meal"
                    description="Add a meal to your diary"
                  />
                  <BottomSheetNavigationItem
                    path="/"
                    emoji={"weightLifting"}
                    color={"blue"}
                    title="Log a workout"
                    description="Add a workout to your diary"
                  />
                  <BottomSheetNavigationItem
                    path="/"
                    color={"green"}
                    emoji={"ruler"}
                    title="Track progress"
                    description="Update weight or measurements"
                  />
                </View>
              </GenericBottomSheet>
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </ThemedTabs>
  );
}

const styles = StyleSheet.create((theme, runtime) => ({
  bottomSheetContent: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  plusButton: {
    backgroundColor:
      runtime.themeName === "light"
        ? theme.colors.primitives.blue[85]
        : theme.colors.primitives.blue[35],
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
}));
