import type { Schema, Struct } from '@strapi/strapi';

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'social-link';
    icon: 'earth';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
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
      'links.social-link': LinksSocialLink;
      'service-info.service-info': ServiceInfoServiceInfo;
    }
  }
}
