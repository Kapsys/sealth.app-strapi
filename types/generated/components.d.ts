import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallComponentSpecifications extends Schema.Component {
  collectionName: 'components_small_component_specifications';
  info: {
    displayName: 'Specifications';
    icon: 'check';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SmallComponentSocialIcons extends Schema.Component {
  collectionName: 'components_small_component_social_icons';
  info: {
    displayName: 'Social Icons';
    icon: 'twitter';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconLink: Attribute.String;
  };
}

export interface SmallComponentNewsletterSubscription extends Schema.Component {
  collectionName: 'components_small_component_newsletter_subscription_s';
  info: {
    displayName: 'Newsletter Subscription ';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subscriptionPlaceholder: Attribute.String;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SmallComponentMenuItems extends Schema.Component {
  collectionName: 'components_small_component_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'earth';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menuItemName: Attribute.String;
    menuItemLink: Attribute.String;
  };
}

export interface SmallComponentLogosSection extends Schema.Component {
  collectionName: 'components_small_component_logos_sections';
  info: {
    displayName: 'Logos Section';
    icon: 'file';
  };
  attributes: {
    partnerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface SmallComponentFooterContact extends Schema.Component {
  collectionName: 'components_small_component_footer_contacts';
  info: {
    displayName: 'Footer Contact';
    icon: 'moon';
  };
  attributes: {
    title: Attribute.String;
    addressItems: Attribute.Component<'small-component.address-items', true>;
  };
}

export interface SmallComponentButton extends Schema.Component {
  collectionName: 'components_small_component_buttons';
  info: {
    displayName: 'Button';
    icon: 'bold';
  };
  attributes: {
    buttonName: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface SmallComponentAddressItems extends Schema.Component {
  collectionName: 'components_small_component_address_items';
  info: {
    displayName: 'Address Items';
    icon: 'stack';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SectionSealthAppSection extends Schema.Component {
  collectionName: 'components_section_sealth_app_sections';
  info: {
    displayName: 'Sealth App Section';
    icon: 'grid';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    underlinedText: Attribute.String;
    appImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionPartnerLogosSection extends Schema.Component {
  collectionName: 'components_section_partner_logos_sections';
  info: {
    displayName: 'Partner Logos Section';
    icon: 'medium';
    description: '';
  };
  attributes: {
    logosSection: Attribute.Component<'small-component.logos-section', true>;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    specifications: Attribute.Component<'small-component.specifications', true>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'filter';
    description: '';
  };
  attributes: {
    headerlogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menuItems: Attribute.Component<'small-component.menu-items', true>;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    footerDescription: Attribute.Text;
    footerContact: Attribute.Component<'small-component.footer-contact'>;
    newsletterSubscription: Attribute.Component<'small-component.newsletter-subscription'>;
    socialIcons: Attribute.Component<'small-component.social-icons'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'small-component.specifications': SmallComponentSpecifications;
      'small-component.social-icons': SmallComponentSocialIcons;
      'small-component.newsletter-subscription': SmallComponentNewsletterSubscription;
      'small-component.menu-items': SmallComponentMenuItems;
      'small-component.logos-section': SmallComponentLogosSection;
      'small-component.footer-contact': SmallComponentFooterContact;
      'small-component.button': SmallComponentButton;
      'small-component.address-items': SmallComponentAddressItems;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.sealth-app-section': SectionSealthAppSection;
      'section.partner-logos-section': SectionPartnerLogosSection;
      'section.hero-section': SectionHeroSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
    }
  }
}
