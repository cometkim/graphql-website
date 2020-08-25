declare module 'gatsby-plugin-manifest' {
  import type { Optional, Required } from 'utility-types';
  import type { OverrideProps } from '@cometjs/core';

  // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/#automatic-mode-configuration
  type IconOptions = RequireAtLeastOne<{
    icon?: string,
    icons?: Icon[],
    icon_options?: Icon,
  }, 'icon' | 'icons'>;

  type LocalizationOptions = {
    localize?: Array<Required<Partial<PluginOptions>, 'lang' | 'start_url'>>,
  };

  export type PluginOptions = OverrideProps<WebappManifest, IconOptions & LocalizationOptions>;

  // See https://web.dev/app-shortcuts/
  type WebappShortcut = {
    name: string,
    short_name?: string,
    description?: string,
    url: string,
    // Unlike web app manifest icons, the type of image is optional.
    icons: Array<Optional<Icon, 'type'>>,
  };

  // See https://web.dev/add-manifest/
  // See https://developer.mozilla.org/en-US/docs/Web/Manifest
  type WebappManifest = {
    name: string,
    icons: Icon[],
    short_name?: string,
    start_url?: string,
    description?: string,
    categories?: StandarizedCategory[],
    iarc_rating_id?: string,
    dir?: Direction,
    display?: DisplayMode,
    background_color?: string,
    theme_color?: string,
    lang?: string,
    orientation?: Orientation,
    prefer_related_applications?: boolean,
    related_applications?: RelatedApplicationRef[],
    scope?: string,
    screenshots?: Screenshot[],
  };

  // See https://developer.mozilla.org/en-US/docs/Web/Manifest/description
  type DisplayMode = (
    | 'fullscreen'
    | 'standalone'
    | 'minimal-ui'
    | 'browser'
  );

  // See https://developer.mozilla.org/en-US/docs/Web/Manifest/dir
  type Direction = (
    | 'auto'
    | 'ltr'
    | 'rtl'
  );

  // See https://github.com/w3c/manifest/wiki/Categories
  type StandarizedCategory = (
    | 'books'
    | 'business'
    | 'education'
    | 'entertainment'
    | 'finance'
    | 'fitness'
    | 'food'
    | 'games'
    | 'government'
    | 'health'
    | 'kids'
    | 'lifestyle'
    | 'magazines'
    | 'medical'
    | 'music'
    | 'navigation'
    | 'news'
    | 'personalization'
    | 'photo'
    | 'politics'
    | 'productivity'
    | 'security'
    | 'shopping'
    | 'social'
    | 'sports'
    | 'travel'
    | 'utilities'
    | 'weather'
  );

  // See https://developer.mozilla.org/en-US/docs/Web/Manifest/orientation
  type Orientation = (
    | 'any'
    | 'natural'
    | 'landscape'
    | 'landscape-primary'
    | 'landscape-secondary'
    | 'portrait'
    | 'portrait-primary'
    | 'portrait-secondary'
  );

  type IconPurpose = (
    | 'monochrome'
    | 'maskable'
    | 'any'
  );

  type Icon = {
    src: string,
    type: string,
    sizes: string,
    purpose?: IconPurpose,
  };

  type Screenshot = {
    src: string,
    type: string,
    sizes: string,
  };

  // See https://github.com/w3c/manifest/wiki/Platforms
  type StandarizedApplicationPlatform = (
    | 'chrome_web_store'
    | 'play'
    | 'itunes'
    | 'windows'
  );

  type RelatedApplicationRef = {
    platform: StandarizedApplicationPlatform,
    url: string,
    id?: string,
  };

  type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = (
    Pick<T, Exclude<keyof T, Keys>> & {
      [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]
  );
}
