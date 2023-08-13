declare module "react" {
  export type PropsWithElementProps<
    E extends
      | HTMLElement
      | keyof React.JSX.IntrinsicElements
      | React.JSXElementConstructor<any>,
    P = unknown
  > = P &
    (E extends HTMLElement ? React.HTMLAttributes<E> : React.ComponentProps<E>);
}

export {};
