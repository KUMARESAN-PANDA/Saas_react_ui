import s1 from "../assets/xora_public/public/images/socials/discord.svg";
import s2 from "../assets/xora_public/public/images/socials/instagram.svg";
import s3 from "../assets/xora_public/public/images/socials/x.svg";

const Footer = () => {
  // Socials array with correct imports
  const socials = [
    {
      id: 1,
      url: "https://facebook.com",
      icon: s1,  // Icon for Discord
      title: "Discord",
    },
    {
      id: 2,
      url: "https://instagram.com",
      icon: s2,  // Icon for Instagram
      title: "Instagram",
    },
    {
      id: 3,
      url: "https://example.com",  // Change this to an actual URL
      icon: s3,  // Icon for X (formerly Twitter)
      title: "X (formerly Twitter)",
    },
  ];

  return (
    <footer className="bg-s1 py-10  md:mt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          {/* Copyright Section */}
          <div className="flex flex-1 justify-center items-center gap-5">
            <p className="text-gray-500 opacity-70">© 2024  By Kumaresan</p>
          </div>

          {/* Legal Links Section */}
          <div className="flex items-center justify-center sm:ml-auto space-x-9">
            <p className="text-gray-500 hover:text-p1 transition-all duration-500">
              Privacy Policy
            </p>
            <p className="text-gray-500 hover:text-p1 transition-all duration-500">
              Terms of Use
            </p>
          </div>

          {/* Social Icons Section */}
          <ul className="flex flex-1 justify-center gap-6 sm:gap-3 mt-10 sm:mt-0">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={title}
                >
                  <img
                    src={icon}
                    alt={title}
                    className="w-8 h-8 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
