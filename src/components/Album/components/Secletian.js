import classNames from "classnames";

export const Secletion = ({ times }) => {
  const box = [];
  for (let i = 0; i < times; i++) {
    box.push(<div ke={i} />);
  }
  return box;
};
