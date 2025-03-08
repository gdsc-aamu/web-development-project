import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Your Website Title</title>
      </head>
      <body>
        {/* TODO: Add a Navbar component at the top */}
        
        {/* TODO: This is where different pages will be displayed */}
        <main>{children}</main>

        {/* TODO: Add a Footer component at the bottom */}
      </body>
    </html>
  );
}
