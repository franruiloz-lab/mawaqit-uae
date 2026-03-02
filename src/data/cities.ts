export interface City {
  id: string;
  nameAr: string;
  nameEn: string;
  lat: number;
  lng: number;
  volume: number; // monthly search volume (approximate)
  region: string;
  descAr: string;
}

export const cities: City[] = [
  {
    id: 'dubai',
    nameAr: 'دبي',
    nameEn: 'Dubai',
    lat: 25.2048,
    lng: 55.2708,
    volume: 35000,
    region: 'dubai',
    descAr: 'مدينة دبي، إمارة دبي',
  },
  {
    id: 'sharjah',
    nameAr: 'الشارقة',
    nameEn: 'Sharjah',
    lat: 25.3573,
    lng: 55.4033,
    volume: 8500,
    region: 'sharjah',
    descAr: 'مدينة الشارقة، إمارة الشارقة',
  },
  {
    id: 'ajman',
    nameAr: 'عجمان',
    nameEn: 'Ajman',
    lat: 25.4052,
    lng: 55.5136,
    volume: 37000,
    region: 'ajman',
    descAr: 'مدينة عجمان، إمارة عجمان',
  },
  {
    id: 'abu-dhabi',
    nameAr: 'أبوظبي',
    nameEn: 'Abu Dhabi',
    lat: 24.4539,
    lng: 54.3773,
    volume: 64000,
    region: 'abu-dhabi',
    descAr: 'مدينة أبوظبي، إمارة أبوظبي',
  },
  {
    id: 'al-ain',
    nameAr: 'العين',
    nameEn: 'Al Ain',
    lat: 24.2075,
    lng: 55.7447,
    volume: 3400,
    region: 'abu-dhabi',
    descAr: 'مدينة العين، إمارة أبوظبي',
  },
  {
    id: 'ras-al-khaimah',
    nameAr: 'رأس الخيمة',
    nameEn: 'Ras Al Khaimah',
    lat: 25.7895,
    lng: 55.9432,
    volume: 21000,
    region: 'ras-al-khaimah',
    descAr: 'مدينة رأس الخيمة، إمارة رأس الخيمة',
  },
  {
    id: 'fujairah',
    nameAr: 'الفجيرة',
    nameEn: 'Fujairah',
    lat: 25.1288,
    lng: 56.3265,
    volume: 700,
    region: 'fujairah',
    descAr: 'مدينة الفجيرة، إمارة الفجيرة',
  },
  {
    id: 'umm-al-quwain',
    nameAr: 'أم القيوين',
    nameEn: 'Umm Al Quwain',
    lat: 25.5647,
    lng: 55.5550,
    volume: 300,
    region: 'umm-al-quwain',
    descAr: 'مدينة أم القيوين، إمارة أم القيوين',
  },
  {
    id: 'khor-fakkan',
    nameAr: 'خورفكان',
    nameEn: 'Khor Fakkan',
    lat: 25.3366,
    lng: 56.3422,
    volume: 200,
    region: 'sharjah',
    descAr: 'مدينة خورفكان، إمارة الشارقة',
  },
  {
    id: 'kalba',
    nameAr: 'كلباء',
    nameEn: 'Kalba',
    lat: 25.0672,
    lng: 56.3538,
    volume: 100,
    region: 'sharjah',
    descAr: 'مدينة كلباء، إمارة الشارقة',
  },
  {
    id: 'al-dhaid',
    nameAr: 'الذيد',
    nameEn: 'Al Dhaid',
    lat: 25.2954,
    lng: 55.8906,
    volume: 100,
    region: 'sharjah',
    descAr: 'مدينة الذيد، إمارة الشارقة',
  },
  {
    id: 'jebel-ali',
    nameAr: 'جبل علي',
    nameEn: 'Jebel Ali',
    lat: 24.9938,
    lng: 55.0575,
    volume: 100,
    region: 'dubai',
    descAr: 'منطقة جبل علي، إمارة دبي',
  },
  {
    id: 'ghayathi',
    nameAr: 'غياثي',
    nameEn: 'Ghayathi',
    lat: 23.8685,
    lng: 52.8165,
    volume: 60,
    region: 'abu-dhabi',
    descAr: 'مدينة غياثي، إمارة أبوظبي',
  },
  {
    id: 'al-ruwais',
    nameAr: 'الرويس',
    nameEn: 'Al Ruwais',
    lat: 24.1147,
    lng: 52.7300,
    volume: 50,
    region: 'abu-dhabi',
    descAr: 'مدينة الرويس، إمارة أبوظبي',
  },
  {
    id: 'bani-yas',
    nameAr: 'بني ياس',
    nameEn: 'Bani Yas',
    lat: 24.2939,
    lng: 54.6286,
    volume: 50,
    region: 'abu-dhabi',
    descAr: 'مدينة بني ياس، إمارة أبوظبي',
  },
  {
    id: 'bidaa-zayed',
    nameAr: 'بدع زايد',
    nameEn: 'Bidaa Zayed',
    lat: 23.6519,
    lng: 53.6926,
    volume: 40,
    region: 'abu-dhabi',
    descAr: 'مدينة بدع زايد، إمارة أبوظبي',
  },
];

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}

export const mainCities = cities.filter((c) =>
  ['dubai', 'sharjah', 'ajman', 'abu-dhabi', 'al-ain', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain'].includes(c.id)
);
