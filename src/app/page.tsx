import Link from "next/link";
import { MapPin, Heart, MessageCircle, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Find love <span className="text-rose-600">nearby</span> in Kenya
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Location-based matchmaking for Kenyans. Match by county, distance, interests, tribe, religion, and lifestyle.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/discover"
            className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition shadow-lg"
          >
            Start Discovering
          </Link>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 font-semibold rounded-full hover:bg-gray-50 transition"
          >
            Set Up Profile
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <MapPin className="w-10 h-10 text-rose-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Location Matching</h3>
          <p className="text-gray-600">See people near you in Nairobi, Mombasa, Kisumu, Kiambu, and across Kenya.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <Heart className="w-10 h-10 text-rose-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Swipe & Match</h3>
          <p className="text-gray-600">Swipe right to like. When it’s mutual, you match and can start chatting.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <MessageCircle className="w-10 h-10 text-rose-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real Conversations</h3>
          <p className="text-gray-600">Chat with your matches. Filters for age, distance, interests, and more.</p>
        </div>
      </section>

      <section className="bg-rose-50 rounded-3xl p-8 md:p-12 text-center">
        <Shield className="w-12 h-12 text-rose-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Safe & Local</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Built with Kenyan users in mind. Support for Sheng vibes, M-Pesa ready architecture, and safety features like reporting.
        </p>
      </section>
    </div>
  );
}
