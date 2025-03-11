// TODO: This is the main homepage of the app. 
// 1. Display a welcome message introducing the professor rating system.
// 2. Add a button that links to the search page.
// 3. Use a visually appealing heading and a short description.
// 4. Follow the Figma design in terms of spacing and structure.
// Do not modify the existing code.

import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      
      {/* TODO: Add a large heading for the app title */}
      
      {/* TODO: Add a subtitle describing the purpose of the app */}

      {/* TODO: Add a button that navigates to the search page */}
      <Link href="/search">
        <button>Search Professors</button>
      </Link>
    </div>
  );
}
