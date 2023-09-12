import './globals.css';

export const metadata = {
  title: 'Next',
  description: 'Monorepo',
};

const Root = ({ children }) => (
  <html lang="en">
    <body className="block h-screen w-screen bg-neutral-950"> {children} </body>
  </html>
);

export default Root;
