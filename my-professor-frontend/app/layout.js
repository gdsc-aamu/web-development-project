// TODO: This file is responsible for setting up the overall layout of the app.
// 1. Import necessary components (Navbar, Footer).
// 2. Ensure that all pages wrap around a consistent layout.
// 3. Use `children` to allow pages to be rendered inside this layout.
// 4. Import the global CSS styles to apply them throughout the app.

export default function Layout({ children }) {
  return (
    <div>
      {/* TODO: Add a Navbar component at the top */}
      
      {/* TODO: This is where different pages will be displayed */}
      <main>{children}</main>

      {/* TODO: Add a Footer component at the bottom */}
    </div>
  );
}