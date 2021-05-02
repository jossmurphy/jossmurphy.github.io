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
          <Subtitle1>Conclusion</Subtitle1>
          <Subtitle1>Next Steps</Subtitle1>
        </CaseStudy>
      </div>
    </div>
  );
}

export default Blueprint;
