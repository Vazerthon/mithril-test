import * as m from "mithril";
import Button from "./Button";
import theme from "../theme";
import Activities from "./Activities";
import { Test } from "./Test";

function App() {
  const style = {
    margin: 0,
    padding: theme.spacing.units(4),
    color: theme.colour.neutral[100],
    "background-color": theme.colour.neutral[300],
    "font-family": theme.typography.fontFamilyBody,
    "font-size": theme.typography.baseFontSizePx,
    height: "100vh",
  };

  return {
    view: () => (
      <main style={style}>
        <h1>Hello</h1>
        <Button onclick={() => console.log("hi")} />
        <Activities />
        <Test />
      </main>
    ),
  };
}

export default App;
