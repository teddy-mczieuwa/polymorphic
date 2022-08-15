import React from "react";
type TextProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

const Text = <C extends React.ElementType>({ as, children }: TextProps<C>) => {
  const Component = as || "span";
  return <Component>{children}</Component>;
};

export default Text;
