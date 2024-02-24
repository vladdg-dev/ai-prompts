import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import SuspenseProvider from "@/components/SuspenseProvider";

import "@/styles/globals.css";


export const metadata = {
  title: "Ai Prompts",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            <SuspenseProvider>{children}</SuspenseProvider>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
