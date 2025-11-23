export function PalmTreeLeft() {
  return (
    <svg
      className="absolute left-0 top-0 h-64 w-32 opacity-30 pointer-events-none"
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <rect x="45" y="120" width="10" height="80" fill="#8B4513" />
      
      {/* Palm leaves */}
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(-30 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(-60 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(0 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(30 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(60 50 100)" />
    </svg>
  );
}

export function PalmTreeRight() {
  return (
    <svg
      className="absolute right-0 top-0 h-64 w-32 opacity-30 pointer-events-none"
      viewBox="0 0 100 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <rect x="45" y="120" width="10" height="80" fill="#8B4513" />
      
      {/* Palm leaves */}
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(-30 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(-60 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(0 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(30 50 100)" />
      <ellipse cx="50" cy="100" rx="40" ry="15" fill="#2F4F2F" transform="rotate(60 50 100)" />
    </svg>
  );
}

export function GoldGeometricPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="gold-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#FFD700" strokeWidth="1" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="#FFD700" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gold-pattern)" />
    </svg>
  );
}

export function GoldCornerFrame({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180"
  };

  return (
    <svg
      className={`absolute ${positionClasses[position]} w-16 h-16 opacity-40 pointer-events-none`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="#FFD700" />
      <path d="M0 20 L80 20 L80 30 L10 30 L10 100" stroke="#FFD700" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent w-full max-w-md" />
      <div className="mx-4 w-3 h-3 rotate-45 border-2 border-yellow-600" />
      <div className="h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent w-full max-w-md" />
    </div>
  );
}
