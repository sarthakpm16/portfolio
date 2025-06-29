import { LinkPreview } from "../components/link-preview";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-12">
      <h1>Hi, I&apos;m Sarthak</h1>
      <p>a 16 year old from DC. currently: making it easier for teachers to understand their students :)</p>

      <h2>exp</h2>
      <ul>
        <li>founder @ klinn - quick & easy internship cold emailing for premeds. 14k+ users. partnered w/ ora ai (yc s23), crackd, harvard tech, etc. currently pivoting</li>
        <li>founding partner @ egglabs - YC for youth orgs</li>
        <li>exec director @ crabhacks - annual hackathon for high schoolers. raised $4.5k+</li>
        <li>state officer @ md deca - 1700+ members. also placed top 10 internationally out of 200k+ members</li>
      </ul>

      <h2>random accomplishments:</h2>
      <ul>
        <li>2.5m+ impressions across linkedin & x. growth is my moat</li>
        <li>was working on an app. failed.</li>
        <li>sold soccer jerseys in middle school</li>
      </ul>

      <h2><em>philosophies</em></h2>
      <ul>
        <li>a cold lemonade's tanginess and sweetness combined is what makes it so refreshing</li>
        <li>the p in pmf is for pivot</li>
        <li>bootstrap and beat funded incumbents</li>
        <li>the blue is <a href="https://open.spotify.com/user/31kmlc2ptfj6f6xqshiqla5lyzle" className="text-blue-600 hover:text-blue-800">melodic</a></li>
      </ul>

      <h2>reach me:</h2>
      <div>
        <LinkPreview url="https://klinn.works">klinn</LinkPreview> /{' '}
        <LinkPreview url="https://linkedin.com/in/sarthak-pal-mahajan">linkedin</LinkPreview> /{' '}
        <LinkPreview url="https://x.com/sarthathak">X</LinkPreview> /{' '}
        <LinkPreview url="https://instagram.com/sarthathak">instagram</LinkPreview>
      </div>
    </main>
  );
}
