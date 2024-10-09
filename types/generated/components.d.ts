import type { Schema, Attribute } from '@strapi/strapi';

export interface SmallComponentSteps extends Schema.Component {
  collectionName: 'components_small_component_steps';
  info: {
    displayName: 'Steps';
    icon: 'stack';
    description: '';
  };
  attributes: {
    stepNumber: Attribute.String;
    stepTitle: Attribute.String;
    stepDescription: Attribute.Text;
  };
}

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

export interface SmallComponentSlider extends Schema.Component {
  collectionName: 'components_small_component_sliders';
  info: {
    displayName: 'Slider';
    icon: 'dashboard';
    description: '';
  };
  attributes: {};
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
    description: '';
  };
  attributes: {};
}

export interface SmallComponentList extends Schema.Component {
  collectionName: 'components_small_component_lists';
  info: {
    displayName: 'List';
    icon: 'oneToMany';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Attribute.String;
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

export interface SmallComponentBenefits extends Schema.Component {
  collectionName: 'components_small_component_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'code';
    description: '';
  };
  attributes: {
    benefitImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    benefitTitle: Attribute.String;
    benefitDescription: Attribute.Text;
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

export interface SectionVideoSection extends Schema.Component {
  collectionName: 'components_section_video_sections';
  info: {
    displayName: 'Video Section';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    videoUrl: Attribute.Text;
  };
}

export interface SectionStepsSection extends Schema.Component {
  collectionName: 'components_section_steps_sections';
  info: {
    displayName: 'Steps Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    steps: Attribute.Component<'small-component.steps', true>;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionSliderSection extends Schema.Component {
  collectionName: 'components_section_slider_sections';
  info: {
    displayName: 'Slider Section';
    icon: 'cog';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Attribute.String;
    position: Attribute.String;
    testimonial: Attribute.Text;
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionSealthMadeSection extends Schema.Component {
  collectionName: 'components_section_sealth_made_sections';
  info: {
    displayName: 'Sealth Made Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    list: Attribute.Component<'small-component.list', true>;
    button: Attribute.Component<'small-component.button'>;
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

export interface SectionReminderSection extends Schema.Component {
  collectionName: 'components_section_reminder_sections';
  info: {
    displayName: 'Reminder Section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    reminderImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    list: Attribute.Component<'small-component.list', true>;
    underlinedText: Attribute.String;
  };
}

export interface SectionPrivacyPolicySection extends Schema.Component {
  collectionName: 'components_section_privacy_policy_sections';
  info: {
    displayName: 'Privacy Policy Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
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
    partnerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Attribute.Text;
  };
}

export interface SectionPaperworkSection extends Schema.Component {
  collectionName: 'components_section_paperwork_sections';
  info: {
    displayName: 'Paperwork Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    underlinedText: Attribute.String;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SectionNewsletterSection extends Schema.Component {
  collectionName: 'components_section_newsletter_sections';
  info: {
    displayName: 'Newsletter Section';
    icon: 'envelop';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    newsletterSubscription: Attribute.Component<'small-component.newsletter-subscription'>;
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
    notification: Attribute.Text;
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
    socialIcons: Attribute.Component<'small-component.social-icons', true>;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionFaqSection extends Schema.Component {
  collectionName: 'components_section_faq_sections';
  info: {
    displayName: 'Faq Section';
    icon: 'plus';
  };
  attributes: {
    faqAnswer: Attribute.Text;
    faqQuestion: Attribute.Text;
  };
}

export interface SectionCtaSection extends Schema.Component {
  collectionName: 'components_section_cta_sections';
  info: {
    displayName: 'CTA Section';
    icon: 'phone';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionBlogSection extends Schema.Component {
  collectionName: 'components_section_blog_sections';
  info: {
    displayName: 'Blog Section';
    icon: 'filter';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionBenefitsSection extends Schema.Component {
  collectionName: 'components_section_benefits_sections';
  info: {
    displayName: 'Benefits Section';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    benefits: Attribute.Component<'small-component.benefits', true>;
    button: Attribute.Component<'small-component.button'>;
  };
}

export interface SectionBannerSection extends Schema.Component {
  collectionName: 'components_section_banner_sections';
  info: {
    displayName: 'Banner Section';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'small-component.steps': SmallComponentSteps;
      'small-component.specifications': SmallComponentSpecifications;
      'small-component.social-icons': SmallComponentSocialIcons;
      'small-component.slider': SmallComponentSlider;
      'small-component.newsletter-subscription': SmallComponentNewsletterSubscription;
      'small-component.menu-items': SmallComponentMenuItems;
      'small-component.logos-section': SmallComponentLogosSection;
      'small-component.list': SmallComponentList;
      'small-component.footer-contact': SmallComponentFooterContact;
      'small-component.button': SmallComponentButton;
      'small-component.benefits': SmallComponentBenefits;
      'small-component.address-items': SmallComponentAddressItems;
      'shared.seo': SharedSeo;
      'shared.meta-social': SharedMetaSocial;
      'section.video-section': SectionVideoSection;
      'section.steps-section': SectionStepsSection;
      'section.slider-section': SectionSliderSection;
      'section.sealth-made-section': SectionSealthMadeSection;
      'section.sealth-app-section': SectionSealthAppSection;
      'section.reminder-section': SectionReminderSection;
      'section.privacy-policy-section': SectionPrivacyPolicySection;
      'section.partner-logos-section': SectionPartnerLogosSection;
      'section.paperwork-section': SectionPaperworkSection;
      'section.newsletter-section': SectionNewsletterSection;
      'section.hero-section': SectionHeroSection;
      'section.header': SectionHeader;
      'section.footer': SectionFooter;
      'section.faq-section': SectionFaqSection;
      'section.cta-section': SectionCtaSection;
      'section.blog-section': SectionBlogSection;
      'section.benefits-section': SectionBenefitsSection;
      'section.banner-section': SectionBannerSection;
    }
  }
}
