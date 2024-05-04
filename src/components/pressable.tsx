import styled from "styled-components/native";

type PressableProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof SPressable>;

const Pressable = ({ children, ...props }: PressableProps) => {
  return (
    <SPressable
      hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      {...props}
      style={({ pressed }) => ({ transform: [{ scale: pressed ? 1.1 : 1 }] })}
      $disabled={!!props.disabled}
    >
      {children}
    </SPressable>
  );
};

const SPressable = styled.Pressable<{
  $disabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: ${({ $disabled }) => ($disabled ? "#87CEFA" : "#00BFFF")};
`;

export default Pressable;
