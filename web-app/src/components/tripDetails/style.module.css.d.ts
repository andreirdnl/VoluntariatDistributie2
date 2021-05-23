declare namespace StyleModuleCssNamespace {
  export interface IStyleModuleCss {
    avatar: string;
    beneficiary: string;
    button: string;
    "button-wrapper": string;
    col1: string;
    col2: string;
    col3: string;
    contact: string;
    description: string;
    details: string;
    donation: string;
    "donation-details": string;
    icon: string;
    images: string;
    person: string;
  }
}

declare const StyleModuleCssModule: StyleModuleCssNamespace.IStyleModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StyleModuleCssNamespace.IStyleModuleCss;
};

export = StyleModuleCssModule;
