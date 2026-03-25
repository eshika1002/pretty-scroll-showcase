import { Link } from "react-router-dom";

const ThankYou = () => (
  <div className="min-h-screen bg-rose-light flex items-center justify-center px-6">
    <div className="text-center max-w-md">
      <h1 className="font-display text-5xl text-foreground mb-4">Thank You!</h1>
      <p className="text-muted-foreground mb-8">
        Your message has been received. We'll get back to you soon. 💕
      </p>
      <Link
        to="/"
        className="inline-block bg-primary text-primary-foreground text-sm uppercase tracking-widest px-10 py-4 rounded-sm hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  </div>
);

export default ThankYou;
