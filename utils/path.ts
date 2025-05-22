/**
 * Safely normalizes Windows paths, handling non-string inputs gracefully
 */
export function safeNormalizePath(input: any): string {
  if (input === null || input === undefined) {
    return '';
  }
  
  // Convert input to string if it's not already
  const path = String(input);
  
  // Handle Windows path normalization
  return path.replace(/\\/g, '/').replace(/^([a-zA-Z]):\//, (match: string) => match.toUpperCase());
}
