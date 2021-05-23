declare namespace StyleModuleCssNamespace {
  export interface IStyleModuleCss {
    avatar: string;
    date: string;
    image: string;
    needs: string;
    person: string;
    props: string;
    summary: string;
    trip: string;
  }
}

declare const StyleModuleCssModule: StyleModuleCssNamespace.IStyleModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleModuleCssNamespace.IStyleModuleCss;
};

export = StyleModuleCssModule;
