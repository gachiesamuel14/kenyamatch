export interface UserProfile {
  id: string;
  name: string;
  age: number;
  bio: string;
  county: string;
  interests: string[];
  photo: string;
  lat: number;
  lng: number;
  tribe?: string;
  religion?: string;
}

export const mockUsers: UserProfile[] = [
  {
    id: "1",
    name: "Amina Wanjiku",
    age: 26,
    bio: "Love hiking Ngong Hills and trying new restaurants in Westlands. Looking for genuine connection.",
    county: "Nairobi",
    interests: ["Hiking", "Food", "Travel"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    lat: -1.2921,
    lng: 36.8219,
    tribe: "Kikuyu",
    religion: "Christian",
  },
  {
    id: "2",
    name: "Brian Otieno",
    age: 29,
    bio: "Software developer by day, football fan by night. Based in Kisumu. Open to long-term.",
    county: "Kisumu",
    interests: ["Football", "Tech", "Music"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    lat: -0.0917,
    lng: 34.7680,
    tribe: "Luo",
  },
  {
    id: "3",
    name: "Fatuma Hassan",
    age: 24,
    bio: "Teacher and beach lover. Mombasa born and raised. Let’s grab nyama choma sometime.",
    county: "Mombasa",
    interests: ["Beach", "Reading", "Cooking"],
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    lat: -4.0435,
    lng: 39.6682,
    tribe: "Swahili",
    religion: "Muslim",
  },
  {
    id: "4",
    name: "Kevin Mwangi",
    age: 31,
    bio: "Entrepreneur in Kiambu. Into fitness, business, and good conversations.",
    county: "Kiambu",
    interests: ["Fitness", "Business", "Travel"],
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    lat: -1.1714,
    lng: 36.8356,
    tribe: "Kikuyu",
  },
  {
    id: "5",
    name: "Grace Chebet",
    age: 27,
    bio: "Nurse who loves nature and quiet evenings. From Eldoret.",
    county: "Uasin Gishu",
    interests: ["Nature", "Health", "Music"],
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    lat: 0.5143,
    lng: 35.2698,
    tribe: "Kalenjin",
  },
];
