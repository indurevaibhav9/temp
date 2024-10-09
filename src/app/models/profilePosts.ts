export interface ProfilePostsDTO {
    advertisementType: string;
    profileImageUrl: string;
    username: string;
    offerExpiry: string;
    offerImageUrl: string;
    imageUrl: string; // for events
    offerTitle: string;
    offerSubtitle?: string;
    likes: number;
    dislikes: number;
    descriptionTitle: string;
    descriptionContent?: string;
    howToAvailSteps: string[];
    termsConditions: string[];
    websiteLink: string; // only if advertisementType is 'post'
  }
