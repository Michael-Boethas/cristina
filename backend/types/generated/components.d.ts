import type { Schema, Struct } from '@strapi/strapi';

export interface ContentArticle extends Struct.ComponentSchema {
  collectionName: 'components_content_articles';
  info: {
    description: '';
    displayName: 'Article';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    preview_text: Schema.Attribute.RichText &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 600;
      }>;
    thumbnail_url: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ContentEmbed extends Struct.ComponentSchema {
  collectionName: 'components_content_embeds';
  info: {
    description: '';
    displayName: 'embed';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentGallery extends Struct.ComponentSchema {
  collectionName: 'components_content_galleries';
  info: {
    description: '';
    displayName: 'Gallery';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_links';
  info: {
    description: '';
    displayName: 'links';
  };
  attributes: {
    label: Schema.Attribute.String;
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

export interface ContentPictureUrl extends Struct.ComponentSchema {
  collectionName: 'components_content_picture_urls';
  info: {
    description: '';
    displayName: 'picture_url';
  };
  attributes: {
    image: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentProjectContent extends Struct.ComponentSchema {
  collectionName: 'components_content_project_contents';
  info: {
    description: '';
    displayName: 'Project content';
  };
  attributes: {
    articles: Schema.Attribute.Component<'content.article', true>;
    cover_image: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    gallery: Schema.Attribute.Component<'content.gallery', true>;
    layout: Schema.Attribute.Integer & Schema.Attribute.Required;
    results: Schema.Attribute.Component<'content.results', true>;
    social_media_section: Schema.Attribute.Component<
      'content.social-media-links',
      false
    >;
    thumbnail_url: Schema.Attribute.String;
    video_url: Schema.Attribute.String;
    website_url: Schema.Attribute.String;
  };
}

export interface ContentResults extends Struct.ComponentSchema {
  collectionName: 'components_content_results';
  info: {
    displayName: 'Results';
  };
  attributes: {
    figure: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text;
  };
}

export interface ContentSocialMediaItem extends Struct.ComponentSchema {
  collectionName: 'components_content_social_media_items';
  info: {
    description: '';
    displayName: 'Social Media item';
  };
  attributes: {
    thumbnail_url: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContentSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_social_media_links';
  info: {
    description: '';
    displayName: 'Social Media links';
  };
  attributes: {
    embed: Schema.Attribute.Component<'content.embed', true>;
    label: Schema.Attribute.String;
    links: Schema.Attribute.Component<'content.social-media-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.article': ContentArticle;
      'content.embed': ContentEmbed;
      'content.gallery': ContentGallery;
      'content.links': ContentLinks;
      'content.picture-url': ContentPictureUrl;
      'content.project-content': ContentProjectContent;
      'content.results': ContentResults;
      'content.social-media-item': ContentSocialMediaItem;
      'content.social-media-links': ContentSocialMediaLinks;
    }
  }
}
