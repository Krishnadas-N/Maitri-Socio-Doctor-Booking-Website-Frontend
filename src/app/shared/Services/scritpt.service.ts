import { Injectable } from '@angular/core';

@Injectable()
export class ScriptService {
  constructor() {}

  execute(
    src: string,
    options?: {
      id?: string;
      async?: boolean;
      defer?: boolean;
      crossOrigin?: string;
      nonce?: string;
      onload?: () => void;
    }
  ): boolean {
    // Ensure options is an object if undefined
    options = options || {};

    // Use object destructuring with default values
    const {
      id = null,
      async = false,
      defer = false,
      crossOrigin = null,
      nonce = null,
      onload,
    } = options;

    // Check if script with the same ID already exists
    if (id && document.getElementById(id)) {
      return false;
    }

    // Create a new script element
    const script: HTMLScriptElement = document.createElement('script');
    script.src = src;

    // Assign properties to the script element
    if (id) {
      script.id = id;
    }

    script.async = async;
    script.defer = defer;

    if (crossOrigin) {
      script.crossOrigin = crossOrigin;
    }

    if (nonce) {
      script.nonce = nonce;
    }

    if (onload) {
      script.onload = onload;
    }

    // Append the script to the document head
    document.head.appendChild(script);

    return true;
  }
}
