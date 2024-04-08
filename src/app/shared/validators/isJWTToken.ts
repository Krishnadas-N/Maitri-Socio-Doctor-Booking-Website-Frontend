

export function isJWTToken(token: string): boolean {
    const parts = token.split('.');
    return parts.length === 3; 
  }
