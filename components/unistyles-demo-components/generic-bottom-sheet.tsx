import React, {
  useCallback,
  useRef,
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { View, TouchableOpacity } from "react-native";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { StyleSheet } from "react-native-unistyles";

type Props = {
  children: ReactNode;
  triggerComponent: ReactNode;
  snapPoints?: (string | number)[];
  onChange?: (index: number) => void;
  scrollable?: boolean;
};

const DEFAULT_SNAP_POINTS = ["50%", "90%"];

export default function GenericBottomSheet({
  children,
  triggerComponent,
  snapPoints = DEFAULT_SNAP_POINTS,
  onChange,
  scrollable = false,
}: Props) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    ),
    []
  );

  const handlePress = () => {
    bottomSheetModalRef.current?.present();
  };

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (onChange) {
        onChange(index);
      }
    },
    [onChange]
  );

  const dismiss = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  const renderChildrenWithDismiss = (children: ReactNode): ReactNode => {
    return Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement, {
          dismiss,
          children: renderChildrenWithDismiss((child as ReactElement).props.children),
        });
      }
      return child;
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        {triggerComponent}
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        backgroundStyle={styles.backgroundStyle}
        handleIndicatorStyle={styles.handleIndicator}
      >
        {scrollable ? (
          <BottomSheetScrollView style={styles.container}>
            {renderChildrenWithDismiss(children)}
          </BottomSheetScrollView>
        ) : (
          <BottomSheetView style={styles.container}>
            {renderChildrenWithDismiss(children)}
          </BottomSheetView>
        )}
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.surface["000"],
  },
  backgroundStyle: {
    backgroundColor: theme.colors.surface["000"],
  },
  handleIndicator: {
    backgroundColor: theme.colors.surface["300"],
  },
}));
