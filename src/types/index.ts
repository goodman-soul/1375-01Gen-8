export interface Bird {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  features: string[];
  habitat: string;
  bestTime: string;
  wingspan?: string;
  weight?: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  isBestViewing?: boolean;
  tideLevel?: 'high' | 'medium' | 'low';
  tideTime?: string;
  tideHeight?: string;
}

export interface DaySchedule {
  date: string;
  dayOfWeek: string;
  activities: Activity[];
}

export interface ReserveZone {
  id: string;
  name: string;
  type: 'open' | 'restricted' | 'prohibited';
  description: string;
  birdingPoints?: string[];
  restrictions?: string[];
}

export interface EtiquetteItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  recommended: boolean;
}

export interface RitualStep {
  id: string;
  time: string;
  title: string;
  description: string;
}

export interface ParentActivity {
  id: string;
  title: string;
  description: string;
  ageRange: string;
  duration: string;
  highlights: string[];
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
