export interface OfferDescriptionDTO {
    profileImageUrl: string;
    username: string;
    offerExpiry: string;
    offerImageUrl: string;
    offerTitle: string;
    offerSubtitle: string;
    likes: number;
    dislikes: number;
    descriptionTitle: string;
    descriptionContent: string;
    howToAvailSteps: string[];
    termsConditions: string[];
  }
  
  export interface CouponCodeDTO extends Pick<OfferDescriptionDTO, 
    'profileImageUrl' | 'username' | 'offerExpiry' | 'offerTitle' > {
    // Additional properties for PostEventDTO, if any, can go here
    likes: number;
    dislikes: number;
    couponCode:string;
    imageUrl:string;
    description: string;
    offerImageUrl: string;
  }
  