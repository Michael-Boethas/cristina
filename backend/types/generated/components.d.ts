import type { Schema, Struct } from '@strapi/strapi';

export interface ContentLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_links';
  info: {
    description: '';
    displayName: 'links';
  };
  attributes: {
    link_1: Schema.Attribute.String;
    link_2: Schema.Attribute.String;
    link_3: Schema.Attribute.String;
    link_4: Schema.Attribute.String;
    link_5: Schema.Attribute.String;
    link_6: Schema.Attribute.String;
    link_7: Schema.Attribute.String;
    link_8: Schema.Attribute.String;
  };
}

export interface ContentProjectContent extends Struct.ComponentSchema {
  collectionName: 'components_content_project_contents';
  info: {
    description: '';
    displayName: 'Project content';
  };
  attributes: {
    cover_image: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    layout: Schema.Attribute.Integer & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'content.links', true>;
    result_1: Schema.Attribute.Component<'content.result', false>;
    result_2: Schema.Attribute.Component<'content.result', false>;
    result_3: Schema.Attribute.Component<'content.result', false>;
    result_4: Schema.Attribute.Component<'content.result', false>;
    thumbnail_url: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
  };
}

export interface ContentResult extends Struct.ComponentSchema {
  collectionName: 'components_content_results';
  info: {
    displayName: 'Result';
  };
  attributes: {
    figure: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.links': ContentLinks;
      'content.project-content': ContentProjectContent;
      'content.result': ContentResult;
    }
  }
}
