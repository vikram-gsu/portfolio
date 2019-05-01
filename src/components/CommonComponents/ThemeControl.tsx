import * as React from "react";

interface ThemeControlProps {
  current_theme_name: string;
  handleThemeChange(e: React.SyntheticEvent): void;
}

const ThemeControl = ({
  current_theme_name,
  handleThemeChange
}: ThemeControlProps) => (
  <form>
    <input
      type="radio"
      id="light"
      checked={current_theme_name === "light"}
      onChange={handleThemeChange}
    />
    <label htmlFor="light">light</label>
    <input
      type="radio"
      id="dark"
      checked={current_theme_name === "dark"}
      onChange={handleThemeChange}
    />
    <label htmlFor="dark">dark</label>
  </form>
);

export default ThemeControl;
