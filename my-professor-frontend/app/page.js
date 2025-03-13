// TODO: This is the main homepage of the app. 
// 1. Display a welcome message introducing the professor rating system.
// 2. Add a button that links to the search page.
// 3. Use a visually appealing heading and a short description.
// 4. Follow the Figma design in terms of spacing and structure.
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className = "min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className = "fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl p-4  flex justify-center items-center">
        <div className = "flex space-x-1">
          <Link href="/search">
          <button className = "bg-primary text-white hover:bg-primary-dark">
            Professors
          </button>
          </Link>
          <button className = "bg-pink-1200 text-gray-800 hover:bg-pink-300">
            Community
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="text-center bg-[#C89BBE] pt-32 text-white">
        <h1 className="text-4xl font-bold">Rate Your Professors</h1>
        <p className="mt-4  pb-32 text-lg">
          A safe place where you get to know your professors from <br />
           fellow classmates and students.
        </p>
      </div>

      {/* Image section*/}
      <div className="bg-pink-100">
        <div className="flex items-center justify-center p-10 space-x-8">
    
          <Image
            src="/images/image1.jpeg"
            alt="Placeholder Image"
            width={500} 
            height={500}
            className="shadow-lg"
          />
          <p className="text-2xl font-medium text-[#7A3E5C] text-center max-w-md">
             Are you unsure what to <br /> expect in your <br /> classes?
           </p>
        </div>

  
        <div className="relative w-full mt-10">
          <Image
            src="/images/rateimage.png"
            alt="Placeholder2 Image"
            width={1920}
            height={300} 
            className="w-full h-[300px] object-cover mt-4"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h2 className="text-3xl font-bold drop-shadow-lg">
              This is your chance to share your <br /> opinions or experiences <br /> learn from others
            </h2>
      
          </div>
        </div>
      </div>

    <div className="w-full h-32 bg-pink-100"></div>

    {/* Footer Section */}
    <footer className="bg-gray-200 text-gray-700 py-4 text-center">
      <p className="text-sm font-medium">MyProfessorRatingApp &copy; {new Date().getFullYear()} All rights reserved.</p>
      <p className="text-sm mt-1">An online platform to help students share and find honest reviews about their professors.</p>
    </footer>



      
    </div>
  );
}
