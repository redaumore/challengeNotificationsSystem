type RateLimit = {
  notificationType: string;
  qt: number;
  lapse: number;
};
export const rateLimits: RateLimit[] = [
  { notificationType: 'STATUS', qt: 2, lapse: 60 * 1000 },
  { notificationType: 'NEWS', qt: 1, lapse: 24 * 60 * 60 * 1000 },
  { notificationType: 'MARKETING', qt: 1, lapse: 60 * 60 * 1000 },
];
