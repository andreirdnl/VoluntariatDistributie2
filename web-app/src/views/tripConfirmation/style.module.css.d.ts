declare namespace StyleModuleCssNamespace {
  export interface IStyleModuleCss {
    confirmation: string;
    facts: string;
    map: string;
    people: string;
    summary: string;
  }
}

declare const StyleModuleCssModule: StyleModuleCssNamespace.IStyleModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleModuleCssNamespace.IStyleModuleCss;
};

export = StyleModuleCssModule;
