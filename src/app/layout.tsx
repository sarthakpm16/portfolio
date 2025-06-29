import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarthak Says",
  description: "Sarthak likes lemonade.nm",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                const cursorDot = document.createElement('div');
                cursorDot.className = 'cursor-dot';
                cursorDot.textContent = '🍋';
                document.body.appendChild(cursorDot);
                
                let mouseX = 0;
                let mouseY = 0;
                
                document.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                });
                
                // Hover effects
                document.addEventListener('mouseover', (e) => {
                  if (e.target.tagName === 'A' || e.target.closest('a')) {
                    cursorDot.classList.add('hover');
                  }
                  // Check if hovering over the lemonade philosophy bullet
                  if (e.target.textContent && e.target.textContent.includes('lemonade') && e.target.tagName === 'LI') {
                    cursorDot.style.opacity = '1';
                    cursorDot.classList.add('hover');
                    document.body.style.cursor = 'none';
                    e.target.style.cursor = 'none';
                  }
                });
                
                document.addEventListener('mouseout', (e) => {
                  if (e.target.tagName === 'A' || e.target.closest('a')) {
                    cursorDot.classList.remove('hover');
                  }
                  // Hide cursor when leaving the lemonade philosophy bullet
                  if (e.target.textContent && e.target.textContent.includes('lemonade') && e.target.tagName === 'LI') {
                    cursorDot.style.opacity = '0';
                    cursorDot.classList.remove('hover');
                    document.body.style.cursor = 'auto';
                    e.target.style.cursor = 'auto';
                  }
                });
                
                function animateCursor() {
                  // Smooth cursor dot movement
                  const dotX = mouseX - 10;
                  const dotY = mouseY - 10;
                  cursorDot.style.left = dotX + 'px';
                  cursorDot.style.top = dotY + 'px';
                  
                  requestAnimationFrame(animateCursor);
                }
                
                animateCursor();
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
