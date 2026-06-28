import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Hammad Alvi" },
      { name: "description", content: "Independent designer building memorable brand identities, advertising creatives and social media systems. Based in Karachi, available worldwide." },
      { name: "author", content: "Hammad Alvi" },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Hammad Alvi" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Hammad Alvi" },
      { name: "twitter:title", content: "Hammad Alvi" },
      { property: "og:description", content: "Independent designer building memorable brand identities, advertising creatives and social media systems. Based in Karachi, available worldwide." },
      { name: "twitter:description", content: "Independent designer building memorable brand identities, advertising creatives and social media systems. Based in Karachi, available worldwide." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f6bbaf-a301-479c-b9c3-38e3ff357bf3/id-preview-2b0642dd--39c74e31-ca1c-423d-838d-23e370c6dc2c.lovable.app-1782646914645.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/60f6bbaf-a301-479c-b9c3-38e3ff357bf3/id-preview-2b0642dd--39c74e31-ca1c-423d-838d-23e370c6dc2c.lovable.app-1782646914645.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-5">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#C8FF00]">404</p>
        <h1 className="mt-4 font-display text-[20vw] sm:text-[10vw] leading-[0.88]">Page Lost.</h1>
        <Link to="/" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C8FF00] text-black px-7 py-4 text-xs font-bold uppercase tracking-[0.2em]">
          Back Home →
        </Link>
      </div>
    </div>
  );
}
