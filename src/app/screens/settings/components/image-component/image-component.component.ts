import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-component',
  templateUrl: './image-component.component.html',
  styleUrls: ['./image-component.component.css']
})
export class ImageComponentComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  imagePreview: string | null = null; 
  selectedFile: File | null = null;   
  username: string = '';  
  presignedUrl: string | null = null;
  maxImageCount: number = 1; 
  isUploadCompleted: boolean = false; 
  showPopUp: boolean = false;
  popUpTitle: string = '';
  popUpBody: string = '';
  uploadImageCount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  openFileDialog(): void {
    this.fileInput.nativeElement.click();
  }

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (this.selectedFile) {
        this.popUpTitle = "Error!";
        this.popUpBody = "You can upload only one image.";
        this.showPopUp = true;
        return;
      }

      this.selectedFile = file;
      this.createImagePreview(file);
    }
  }

  uploadImages(): void {
    if (this.isUploadCompleted) {
      this.popUpTitle = "Error!";
      this.popUpBody = "Image upload limit reached. Only one image can be uploaded.";
      this.showPopUp = true;
      return;
    }

    console.log("Image uploaded");
    this.isUploadCompleted = true;
  }

  private createImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string; 
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    this.imagePreview = null;
    this.selectedFile = null;
    this.isUploadCompleted = false; 
  }

  onPopUpClose(): void {
    this.showPopUp = false;
  }
}
