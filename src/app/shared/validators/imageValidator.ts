import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function validateImageFileType(file: File): { [key: string]: any } | null {
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];  // Adjust as needed
  console.log(file)
  const fileExtension = file.name.split('.').pop()?.toLowerCase();

  if (fileExtension && !allowedExtensions.includes(fileExtension)) {
    return { invalidFileType: true };
  }
  return null;
}


export function mediaValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.value === null || control.value === '') {
      // Allow empty media field (optional media)
      return null;
    }

    const file = control.value as File;
    console.log(file)
    // Check for valid file type (video or image)
    const allowedMimeTypes = [
      'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/webm', 'video/ogg'
    ];
    if (!allowedMimeTypes.includes(file.type)) {
      return { mediaType: 'Invalid file type. Only images (JPEG, PNG, GIF) or videos (MP4, WebM) are allowed.' };
    }

    // Optional: Check for maximum file size (example: 5MB)
    const maxSize = 50 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      return { mediaSize: 'File size exceeds the maximum limit of 50MB.' };
    }

    return null; // Valid media file
  };
}