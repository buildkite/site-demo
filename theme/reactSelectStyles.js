import * as theme from '.'

export default {
  control: (provided) => ({
    ...provided,
    borderRadius: 0,
    marginBottom: theme.innerSpacing.s2
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: 0,
    right: 0,
    top: "60%",
    width: "150%"
  }),
  option: (provided, { isFocused, isSelected }) => {
    return {
      ...provided,
      backgroundColor: isSelected
        ? theme.colors.backgrounds.greenHover
        : isFocused
          ? theme.colors.backgrounds.green
          : null,
      color: isSelected
        ? theme.colors.text.white
        : isFocused
          ? theme.colors.text.white
          : theme.colors.text.black,
      ':active': {
        ...provided[':active'],
        backgroundColor: isSelected
          ? theme.colors.backgrounds.greenHover
          : theme.colors.backgrounds.green
      }
    }
  },
  theme: (componentTheme) => ({
    ...componentTheme,
    colors: {
      ...componentTheme.colors,
      primary: theme.colors.backgrounds.green
    }
  })
}