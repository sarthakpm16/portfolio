import { LinkPreview } from "../components/link-preview";
import { MelodicLink } from "../components/melodic-link";

export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 py-12">
      <h1>Hi, I&apos;m Sarthak</h1>
      <p>a 16 year old from DC. currently: helping kids find internships and schools understand student progress outside the classroom.</p>

      <h2>exp</h2>
      <ul>
        <li>founder @ klinn - 20k+ users. partnered w/ ora ai (yc s23), crackd, harvard tech, etc.</li>
        <li>founding partner @ egglabs - YC for youth orgs</li>
        <li>exec director @ crabhacks - annual hackathon for high schoolers. raised $7.5k+</li>
        <li>state officer @ md deca - 1800+ members. also placed top 10 internationally out of 200k+ members</li>
      </ul>

      <h2>random accomplishments:</h2>
      <ul>
        <li>4m+ impressions across socials. i post content on insta, tiktok, linkedin, x, and yt.</li>
        <li>was working on an app. failed.</li>
        <li>sold soccer jerseys in middle school</li>
      </ul>

      <h2><em>philosophies</em></h2>
      <ul>
        <li>a cold lemonade&apos;s tanginess and sweetness combined is what makes it so refreshing</li>
        <li>the p in pmf is for pivot</li>
        <li>bootstrap and beat funded incumbents</li>
        <li>increase your surface area to luck</li>
        <li>the blue is <MelodicLink /></li>
      </ul>

      <h2>reach me:</h2>
      <div>
        <LinkPreview url="https://klinn.works">klinn</LinkPreview> /{' '}
        <LinkPreview url="https://linkedin.com/in/sarthak-pal-mahajan">linkedin</LinkPreview> /{' '}
        <LinkPreview url="https://x.com/sarthathak">X</LinkPreview> /{' '}
        <LinkPreview url="https://instagram.com/sarthathak">instagram</LinkPreview> /{' '}
        <LinkPreview url="https://github.com/sarthakpm16">github</LinkPreview>
        
      </div>
    </main>
  );
}
