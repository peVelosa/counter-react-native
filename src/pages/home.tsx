import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";

import useCounter from "../hooks/useCounter";
import Pressable from "../components/pressable";

import { PageWrapper, SView, SText } from "../styled/home.styled";

export default function HomePage() {
  const {
    contador,
    handlePress,
    handleLongPress,
    handlePressOut,
    goToOne,
    goToNineNine,
    isAddButtonDisbled,
    isSubtractButtonDisbled,
  } = useCounter({});

  return (
    <PageWrapper>
      <SView>
        <Pressable
          onPress={() => handlePress("subtract")}
          onLongPress={() => handleLongPress("subtract")}
          onPressOut={handlePressOut}
          disabled={isSubtractButtonDisbled}
        >
          <SText>
            <FontAwesome name="minus" />
          </SText>
        </Pressable>
        <SText>{contador}</SText>
        <Pressable
          onPress={() => handlePress("add")}
          onLongPress={() => handleLongPress("add")}
          onPressOut={handlePressOut}
          disabled={isAddButtonDisbled}
        >
          <SText>
            <FontAwesome name="plus" />
          </SText>
        </Pressable>
      </SView>
      <SView>
        <Pressable onPress={goToOne}>
          <SText>1</SText>
        </Pressable>
        <Pressable onPress={goToNineNine}>
          <SText>99</SText>
        </Pressable>
      </SView>
      <StatusBar style="auto" />
    </PageWrapper>
  );
}
