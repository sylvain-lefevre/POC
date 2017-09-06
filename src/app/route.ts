export class Route {
  distance: number;
  duration: number;
  weight: number;
  weight_name: string;
  geometry: string;
  legs: [{
    distance: number;
    duration: number;
    weight: number;
    summary: string;
    steps: [{}];
  }];
}
