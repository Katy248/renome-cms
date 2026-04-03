import type { Schema, Struct } from '@strapi/strapi';

export interface AboutSectionCharacteristic extends Struct.ComponentSchema {
  collectionName: 'components_about_section_characteristics';
  info: {
    displayName: 'characteristic';
    icon: 'folder';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'social-link';
    icon: 'earth';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'none'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ServiceInfoServiceInfo extends Struct.ComponentSchema {
  collectionName: 'components_service_info_service_infos';
  info: {
    displayName: 'service-info';
    icon: 'stack';
  };
  attributes: {
    innerText: Schema.Attribute.Blocks;
    innerTitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-section.characteristic': AboutSectionCharacteristic;
      'links.social-link': LinksSocialLink;
      'service-info.service-info': ServiceInfoServiceInfo;
    }
  }
}
