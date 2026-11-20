"use client";

import { useState, useEffect } from "react";
import { mockUsers, UserProfile } from "@/lib/mockUsers";
import { Heart, X, MapPin, Info } from "lucide-react";

function haversine(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function DiscoverPage() {
  const [users, setUsers] = useState<UserProfile[]>(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => setLocation({ lat: -1.2921, lng: 36.8219 }) // fallback Nairobi
      );
    }
  }, []);

  const current = users[currentIndex];

  const handleSwipe = (direction: "like" | "pass") => {
    if (direction === "like" && current) {
      setLiked((prev) => [...prev, current.id]);
    }
    setCurrentIndex((i) => i + 1);
  };

  if (!current) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">No more profiles nearby</h2>
        <p className="text-gray-600">Check back later or expand your distance filters.</p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="mt-6 px-6 py-3 bg-rose-600 text-white rounded-full"
        >
          Restart
        </button>
      </div>
    );
  }

  const distance = location
    ? Math.round(haversine(location.lat, location.lng, current.lat, current.lng))
    : null;

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Discover Nearby</h1>
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border">
        <img
          src={current.photo}
          alt={current.name}
          className="w-full h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-2xl font-bold">{current.name}, {current.age}</h2>
          </div>
          <div className="flex items-center gap-1 text-sm opacity-90">
            <MapPin className="w-4 h-4" />
            {current.county} {distance !== null && `• ${distance} km away`}
          </div>
          <p className="mt-2 text-sm line-clamp-2">{current.bio}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {current.interests.map((i) => (
              <span key={i} className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-8 mt-8">
        <button
          onClick={() => handleSwipe("pass")}
          className="w-16 h-16 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <X className="w-8 h-8 text-gray-500" />
        </button>
        <button
          onClick={() => handleSwipe("like")}
          className="w-16 h-16 rounded-full bg-rose-600 flex items-center justify-center shadow-lg hover:scale-105 transition"
        >
          <Heart className="w-8 h-8 text-white fill-white" />
        </button>
      </div>

      {liked.length > 0 && (
        <p className="text-center mt-6 text-sm text-gray-500">
          You liked {liked.length} profile{liked.length > 1 ? "s" : ""}. Mutual matches coming soon!
        </p>
      )}
    </div>
  );
}
