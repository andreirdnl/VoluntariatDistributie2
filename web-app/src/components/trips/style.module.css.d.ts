declare namespace StyleModuleCssNamespace {
  export interface IStyleModuleCss {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    header: string;
    trips: string;
  }
}

declare const StyleModuleCssModule: StyleModuleCssNamespace.IStyleModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleModuleCssNamespace.IStyleModuleCss;
};

export = StyleModuleCssModule;
