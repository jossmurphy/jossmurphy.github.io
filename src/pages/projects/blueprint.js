import React from 'react';
import Header from '../../components/Header';
import styled from '@emotion/styled';
import {
  PageTitle,
  Subtitle1,
  Subtitle2,
  SubtitleSection,
  BlockQuote,
  Caption,
  P,
  HeroDiv,
  CaseStudy,
  HeroImage,
  Footer,
} from '../../styles/global.js';
import about_image from '../../assets/projects/BlueprintHero.png';
import bpfullscreen from '../../assets/projects/BlueprintFS.png';
import bphighfive from '../../assets/projects/bphighfive.png';
import colors from '../../styles/colors';

const content = {
  role: `Product Designer`,
  timeline: `January 2021 - April 2021`,
  context:
    'UW Blueprint is a student organization at the University of Waterloo that builds pro-bono software solutions - websites, mobile applications, analysis tools - to amplify the impact of nonprofit organizations. Blueprint members have a deep-seated passion for social good and are committed to their projects. They are high achieving and community-oriented students with diverse experiences, skills, and a strong  drive to learn. Since inception, 248 unique members have volunteered over 70,000 hours to build tech for social good in partnership with 22 Non Profit Organizations.',
  contextSummary:
    'UW Blueprint is a student organization that partners with Non-Profits to build tech for social good.',
  problem:
    'The previous UW Blueprint website had the potential to be a central source of information for various audiences (Non Profits, Students, Sponsors, Community Members), and was falling short. When proposing a student-run project to an organization with limited resources, a significant amount of objection handling is necessary. Non-Profits questioning the quality of our projects were met with single paragraph descriptions of our work, when behind the scenes experienced PMs, designers, and developers were delivering high value projects to Non Profits who were more than willing to provide glowing testimonials. Furthermore, the website was static, plain, and underwhelming, and overall did not reflect the talent or the vibrant community of the team. By investing in a website redesign, UW Blueprint aimed to drive interest in the organization from potential sponsors, community members, Non Profit partners, and future students.',
  problemSummary:
    'How might UW Blueprint utilize their website to generate more interest in the organization from Non-Profits, Students, Sponsors, and Community members?',
  solution:
    "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
  solutionSummary: `Our team designed a website featuring
    a highly visual Project Portfolio to emphasize the quality of UW Blueprint's work,
    a dramatic increase in images and graphics to reflect the vibrant student community,
    a consistent design system to enforces our brand,
    select successful elements of the legacy website (as determined through user interviews), and
    strategic information architecture to drive more applications from students and Non Profits.`,
};

const BackgroundImage = styled('div')`
  width: 100vw;
  height: 400px;
  background: url(${bpfullscreen}) repeat #bddeff;
  background-size: cover;
  margin: 0;
  padding: 0;
`;

const styledth = styled('th')`
textAlign: 'left',
width: '50vw',
backgroundColor: colors.c110,
borderRadius: '4px',
paddingLeft: '10px',
font-weight: bold,
`;

function Blueprint() {
  return (
    <div>
      <div margin="0" padding="0">
        <BackgroundImage>
          <Header></Header>
        </BackgroundImage>
        {/* <HeroDiv>
          <HeroImage src={about_image}></HeroImage>
        </HeroDiv> */}
        <CaseStudy>
          {/* <img src={Hero} alt="Hero Image" /> */}
          <PageTitle>UW Blueprint Website Redesign</PageTitle>
          <P>{`Role: ${content.role}`}</P>
          <P>{`Timeline: ${content.timeline}`}</P>

          <SubtitleSection>Summary</SubtitleSection>

          <Subtitle1>Context</Subtitle1>
          <P>{`${content.context}`}</P>
          <BlockQuote>{`${content.contextSummary}`}</BlockQuote>

          <Subtitle1>The Problem</Subtitle1>
          <P>{`${content.problem}`}</P>
          <BlockQuote>{`${content.problemSummary}`}</BlockQuote>

          <Subtitle1>The Solution</Subtitle1>
          {/* <P>{`${content.solution}`}</P> */}
          <BlockQuote>{`${content.solutionSummary}`}</BlockQuote>

          <SubtitleSection>{'User Research'}</SubtitleSection>
          <Subtitle1>Users</Subtitle1>
          <Subtitle1>Competitor Analysis</Subtitle1>
          <Subtitle2>UW Blueprint&apos;s Legacy Website</Subtitle2>
          <P>
            <table style={{ paddingLeft: '0vw', width: '80vw' }}>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Description
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  A simple, static website built in Angular in 2017 to represent the organization and collect
                  applications from students and Non Profits
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Screenshots
                </th>
                <div style={{ marginLeft: '10px' }}>
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                </div>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Strengths
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Weaknesses
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
            </table>
          </P>

          <Subtitle2>Hack the North</Subtitle2>
          <P>
            <table style={{ paddingLeft: '0vw', width: '80vw' }}>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Description
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  A simple, static website built in Angular in 2017 to represent the organization and collect
                  applications from students and Non Profits
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Screenshots
                </th>
                <div style={{ marginLeft: '10px' }}>
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                </div>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Strengths
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Weaknesses
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
            </table>
          </P>

          <Subtitle2>UW Blueprint&apos;s Legacy Website</Subtitle2>
          <P>
            <table style={{ paddingLeft: '0vw', width: '80vw' }}>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Description
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  A simple, static website built in Angular in 2017 to represent the organization and collect
                  applications from students and Non Profits
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Screenshots
                </th>
                <div style={{ marginLeft: '10px' }}>
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                </div>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Strengths
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Weaknesses
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
            </table>
          </P>

          <Subtitle2>Develop for Good</Subtitle2>
          <P>
            <table style={{ paddingLeft: '0vw', width: '80vw' }}>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Description
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                  A simple, static website built in Angular in 2017 to represent the organization and collect
                  applications from students and Non Profits
                </td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Screenshots
                </th>
                <div style={{ marginLeft: '10px' }}>
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                  <img
                    src={about_image}
                    style={{ width: '300px', height: 'auto', padding: '0px', borderRadius: '4px', margin: '2px' }}
                  />
                </div>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Strengths
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
              <tr>
                <th
                  style={{
                    textAlign: 'left',
                    width: '15vw',
                    backgroundColor: colors.c110,
                    borderRadius: '4px',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                  }}
                >
                  Weaknesses
                </th>
                <td style={{ paddingLeft: '10px', paddingRight: '10px' }}>Legacy Website</td>
              </tr>
            </table>
          </P>

          <Subtitle1>Constraints</Subtitle1>
          <P>
            <ul>
              <li>
                <b>Timeline:</b> As a team we were given a short timeline of 4 months to design and develop the website.
                To ensure developers always had work to do, this meant designers had even less time to scope out the
                problem, do user research, and iterate upon designs while gathering feedback from key stakeholders. This
                made us make a distinction between the &quot;must haves&quot; and &quot;nice to haves&quot; pretty early
                on, and resulted in a lot of learning around optimizing design work when collaborating with developers.
              </li>
              <li>
                <b>Existing Branding:</b> UW Blueprint has existed since 2017 and has several sister branches at other
                schools across North America. As such, existing colours, fonts and styles needed to be implemented in
                our design system in order to maintain brand consistency.{' '}
              </li>
              <li>
                <b>Content:</b> A website design is very dependent on content. We did not have a content writer or
                centralized assets, which meant a significant portion of our work involved finding high quality images,
                locating existing writing, testimonials, and statistics, and generating content from scratch (while
                aligning with the existing brand, graphics and voice of the organization).
              </li>
              <li>
                <b>Junior Developers:</b> For many developers on our team, this website was their first experience using
                React. Because of this, we had to ensure that our designs were not overly ambitious and that we were
                designing atomically, with simple components that could be reused and combined to serve various
                purposes.
              </li>
            </ul>
          </P>

          <SubtitleSection>{'Key Findings'}</SubtitleSection>
          <Subtitle1>Painpoints</Subtitle1>
          <Subtitle1>Requirements</Subtitle1>

          <SubtitleSection>{'Solution'}</SubtitleSection>
          <Subtitle1>User Flow Diagram</Subtitle1>
          <Subtitle1>Feature Breakdown & Decision Making</Subtitle1>
          <Subtitle1>Past Iterations</Subtitle1>

          <SubtitleSection>{'Results'}</SubtitleSection>
          <Subtitle1>Lessons Learned</Subtitle1>
          <P>
            <ul>
              <li>
                <b>Developer Collaboration</b> This was my first major project working on a cross-functional team, and I
                learned a lot about communicating with developers! Some big takeaways were that an agile development
                process (vs waterfall) can be excellent with a short timeline as development can begin before design is
                finished, keeping developers in the loop about the reasoning behind design decisions can give them
                uesful context, and clarifying conversations are essential for both parties to ensure that there is a
                shared understanding of constraints and objectives.
              </li>
              <li>
                <b> Designing regardless of content.</b> While designing our client was unsure what content they wanted
                to put on each page. Initially this was preventing us from making process, but we adapted to this by
                creating designs that could be adapted to match different types and amounts of content. This was
                challenging, but was an important design lesson and ultimately motivated us to create a design system to
                keep our brand consistent!
              </li>
              <li>
                <b>
                  On a short timeline, PMs and designers must collaborate to make clear distinctions between &quot;must
                  haves&quot; and &quot;nice to haves&quot;.
                </b>{' '}
                I was surprised by how much PM and designer collaboration occured, but prioritizing which features to be
                built and in which order ended up being a large part of the designer role.
              </li>
              <li>
                <b>Providing distinct options to the client</b> In initial feedback reviews with the client, we would
                occasionally ask for ideas and lead brainstorming sessions before having concrete designs to show. Since
                we had many clients (all students at the organization seemed to have an opinion), we quickly realized
                that we needed to narrow the feedback we would be given in order to make progress. We began coming with
                clearly defined options to client meetings, and we were able to hone in on exactly what the client liked
                and didn&apos;t like far more easily.
              </li>
            </ul>
          </P>

          <Subtitle1>Next Steps</Subtitle1>
          <P>
            <ul>
              <li>
                <b>App development</b> will be continuing over the next 4 months. This will involve completing the
                remaining pages based on designs, ensuring pages are responsive to various screen sizes (many website
                users will be on mobile devices), and animating the new illustrations to add personality to the site.
              </li>
              <li>
                <b>Follow up interviews with NPOs </b>should be conducted to verify that their questions are being
                answered and they view Blueprint as a trustworthy organization to partner with. Student feedback was
                conducted throughout the process, but the website could benefit from more evaluation from our other
                primary audience.
              </li>
              <li>
                <b>Reaching Non Profits through their existing communication channels</b> is a key principle that must
                be considered in the context of this design challenge. Though the challenge was to redesign the website,
                it was concluded through user interviews that there are existing channels Non Profit leaders communicate
                through. Recognizing that these channels as a part of a user&apos;s journey is essential to our design
                of the website, as the website is likely to be a secondary contact point where users go to learn more
                about the organization. As mentioned above, many design decisions were made on this principle, and
                consequently a next step would to begin marketing ourselves in exsitng channeles (newsletters,
                newspapers, email lists, referrals, etc.).
              </li>
            </ul>
          </P>
          <Subtitle1>Conclusion</Subtitle1>
          <P>
            {' '}
            This project supported an organization I&aops;m really passionate about and I learned a ton about design
            along the way! I&aops;m very excited to see the redesign launch later in 2021!
          </P>

          <img src={bphighfive} style={{ width: '100%', padding: ' 8vh 0vh' }}></img>
        </CaseStudy>
      </div>
    </div>
  );
}

export default Blueprint;
