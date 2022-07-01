export interface busRouteResponseTypes {
  id: string;
  line: string;
  status?: string;
  timeInMinutes: number;
  destination: string;
  timeInSeconds: number;
  cardIndex?: number;
  followed: boolean;
}
