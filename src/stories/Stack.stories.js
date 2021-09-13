import Stack from "../components/Stack"

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map((n) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
)

export const HorizontalStack = Template.bind({})
HorizontalStack.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
}

export const VerticalStack = Template.bind({})
VerticalStack.args = {
  direction: "column",
  spacing: 2,
  wrap: false,
}

export const NoSpacingStack = Template.bind({})
NoSpacingStack.args = {
  direction: "row",
  spacing: 0,
  wrap: false,
}

export const WrapOverflowStack = Template.bind({})
WrapOverflowStack.args = {
  numberOfChildren: 30,
  direction: "row",
  spacing: 2,
  wrap: true,
}
