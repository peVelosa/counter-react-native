import { useState, useEffect } from "react";

const DEFAULT_INTERVAL_UPDATE = 50;
const MAX_VALUE = 100;
const MIN_VALUE = 0;

type TAction = "add" | "subtract" | null;

type TLongPress = {
  active: boolean;
  type: TAction;
};

type useCounterProps = {
  intervalUpdate?: number;
  maxValue?: number;
  minValue?: number;
};

export default function useCounter({
  intervalUpdate = DEFAULT_INTERVAL_UPDATE,
  maxValue = MAX_VALUE,
  minValue = MIN_VALUE,
}: useCounterProps) {
  const [contador, setContador] = useState(0);
  const [longPress, setLongPress] = useState<TLongPress>({
    active: false,
    type: null,
  });

  const isAddButtonDisbled = contador === maxValue;
  const isSubtractButtonDisbled = contador === minValue;

  const handleLongPress = (type: TAction) =>
    setLongPress({ active: true, type });
  const handlePressOut = () => setLongPress({ active: false, type: null });

  const handleAdd = () =>
    setContador((old) => (isAddButtonDisbled ? old : old + 1));
  const handleSubtract = () =>
    setContador((old) => (isSubtractButtonDisbled ? old : old - 1));

  const handlePress = (type: TAction) => {
    if (type === "add") return handleAdd();
    if (type === "subtract") return handleSubtract();
  };

  const goToOne = () => {
    setContador(1);
  };
  const goToNineNine = () => {
    setContador(99);
  };

  useEffect(() => {
    if (!longPress.active || longPress.type === null) return;

    const timeout = setTimeout(() => {
      if (!longPress.active) return;
      if (longPress.type === "add") return handleAdd();
      if (longPress.type === "subtract") return handleSubtract();
    }, intervalUpdate);

    return () => clearTimeout(timeout);
  }, [longPress.active, longPress.type, contador]);

  return {
    contador,
    handlePress,
    goToOne,
    goToNineNine,
    isAddButtonDisbled,
    isSubtractButtonDisbled,
    handlePressOut,
    handleLongPress,
  };
}
