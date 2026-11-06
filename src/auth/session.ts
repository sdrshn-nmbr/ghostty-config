export const SESSION_TTL_SECONDS = 60 * 60 * 8;

export function sessionExpired(issuedAt: number, now = Date.now()): boolean {
  return now - issuedAt > SESSION_TTL_SECONDS * 1000;
}
