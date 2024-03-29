
export function validateImageFileType(control: any): { [key: string]: any } | null {
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    const fileExtension = control.value.split('.').pop()?.toLowerCase();
    if (fileExtension && !allowedExtensions.includes(fileExtension)) {
      return { invalidFileType: true };
    }
    return null;
  }