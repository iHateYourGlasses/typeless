import jss from "jss";
import preset from "jss-preset-default";

// One time setup with default plugins and settings.
jss.setup(preset())

const styles = {
  button: {
    fontSize: 12,
    "&:hover": {
      background: "blue"
    }
  },
  ctaButton: {
    extend: "button",
    "&:hover": {
      background: "blue",
    }
  },
  "@media (min-width: 1024px)": {
    button: {
      width: 200
    }
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

document.body.innerHTML = `
  <button class="${classes.button}">Button</button>
  <button class="${classes.ctaButton}">CTA Button</button>`
