
export enum AppSection {
  HERO = 'hero',
  FEATURES = 'features',
  PNR = 'pnr',
  LIVE_STATUS = 'live-status',
  TESTIMONIALS = 'testimonials',
  COACH = 'coach'
}

export interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface TrainData {
  number: string;
  name: string;
  source: string;
  destination: string;
  status: string;
  delay: string;
  nextStation: string;
  lastUpdated: string;
  progress: number;
}

export interface PNRResponse {
  pnr: string;
  trainNo: string;
  trainName: string;
  date: string;
  passengers: {
    no: number;
    bookingStatus: string;
    currentStatus: string;
  }[];
  chartStatus: string;
}
