import Profile from "./profile";

function Footer() {
  return (
    <footer>
      <Profile className="profile-footer" />

      <p>
        &copy; 2019
      </p>
      <style jsx>{`
        footer {
          padding: 1em 0;
        }

        p {
          margin-top: 2em;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
