import { OfferDescriptionDTO } from "./offerdescriptionGet";

export interface AdvertisementDetails {
    advertisementType:string;
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
    websiteLink:string;
    couponCode:string;
    imageUrl:string;
    description: string;
    eventDateAndTime:string;
    
  }