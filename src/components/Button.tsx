import * as m from "mithril";
import { Button as Btn } from "construct-ui";

interface Attrs {
  attrs: {
    onclick: () => void;
  };
}

function Button({ attrs: { onclick } }: Attrs): m.Component<Attrs> {
  const state = {
    count: 0,
  };

  const handleClick = () => {
    state.count++;
    onclick();
  };

  return {
    view: () => (
      <Btn onclick={handleClick} fluid label={`Click me (${state.count})`} />
    ),
  };
}

export default Button;
