"use client";

import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    bio: "",
    county: "Nairobi",
    interests: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("kenyamatch-profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  const save = () => {
    localStorage.setItem("kenyamatch-profile", JSON.stringify(profile));
    alert("Profile saved! (This is a demo using localStorage)");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-sm border">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Age</label>
          <input
            type="number"
            className="w-full border rounded-lg px-3 py-2"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">County</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={profile.county}
            onChange={(e) => setProfile({ ...profile, county: e.target.value })}
          >
            {["Nairobi", "Mombasa", "Kisumu", "Kiambu", "Nakuru", "Eldoret", "Other"].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bio</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2"
            rows={4}
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Interests (comma separated)</label>
          <input
            className="w-full border rounded-lg px-3 py-2"
            value={profile.interests}
            onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
            placeholder="Hiking, Music, Food..."
          />
        </div>
        <button
          onClick={save}
          className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700"
        >
          Save Profile
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-500">
        In a full version this would include photo upload, GPS, authentication, and more. Currently demo mode.
      </p>
    </div>
  );
}
