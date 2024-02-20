import React from "react";
import clsx from "clsx";

const Container = (props) => {
  const { className, ...res } = props;
  const classes = clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className);
  return (
    <>
      <div className={classes} {...res} />
    </>
  );
};
// 这是一个封装，就是在你原始的这个东西基础上，我如果要增加一些内容应该怎么办？就用的这套方法。

export default Container;
