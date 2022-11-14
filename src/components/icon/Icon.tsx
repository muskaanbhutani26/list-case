import React from "react";
import { ReactComponent as DownArrowIcon } from '../../assets/icons/downArrow.svg';
import { ReactComponent as EllipseIcon } from '../../assets/icons/ellipse.svg';

type MyIconProps = {
  name: "downArrow" | "ellipse";
  className?: string;
};

const Icon = (props : MyIconProps) => {
  const { name, ...svgProps } = props;

  const Icons: Record<MyIconProps["name"], any> = {
    downArrow: <DownArrowIcon {...svgProps} />,
    ellipse: <EllipseIcon className="className"{...svgProps} />,
  };

  return Icons[name];
}

export default Icon;