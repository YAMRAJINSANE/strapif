import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductListingProductListing extends Schema.Component {
  collectionName: 'components_product_listing_product_listings';
  info: {
    displayName: 'Product Listing';
    icon: 'picture';
  };
  attributes: {
    name: Attribute.String;
    image: Attribute.Media;
    stock: Attribute.String;
    color: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-listing.product-listing': ProductListingProductListing;
    }
  }
}
