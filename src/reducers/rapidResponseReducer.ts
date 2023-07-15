export type RapidInitialState = {
  service: string;
  age: number;
  emergency: string;
  location: string;
  gender: string;
};

export type RapidAction = {
  type: 'emergency' | 'gender' | 'age' | 'location' | 'service';
};
