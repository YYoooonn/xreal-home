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

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
      NOTION_DATABASE_PRESS: string;
      NOTION_DATABASE_PROJECT: string;
      NOTION_DATABASE_MEMBER: string;
      NOTION_WORKSPACE: string;
    }
  }
}

export {};
