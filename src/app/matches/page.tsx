export default function MatchesPage() {
  return (
    <div className="max-w-lg mx-auto text-center py-16">
      <h1 className="text-3xl font-bold mb-4">Your Matches</h1>
      <p className="text-gray-600 mb-8">
        When two people like each other, you’ll see them here and can start chatting.
      </p>
      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <p className="text-lg">No matches yet.</p>
        <p className="text-sm text-gray-500 mt-2">Go to Discover and start swiping!</p>
      </div>
    </div>
  );
}
