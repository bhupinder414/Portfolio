import { useState, useRef } from "react";
import styled from "styled-components";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { useData } from "../context/DataProviderContext";
import html2pdf from "html2pdf.js";
import ContactItem from "./ContactItem";

const ResumeWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 0.1rem 2fr;
  gap: 1rem;
  word-break: auto-phrase;
  background-color: var(--color-main-background);
  border: none;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }

  @media (min-width: 577px) and (max-width: 991px) {
    justify-content: center;
  }
`;

const StyledHeading = styled.h3`
  margin: 1rem 0rem;
  font-size: x-large;
  color: var(--resume-heading-color);
  border-bottom: 2px solid var(--resume-heading-color);
  padding: 0rem 0rem 0.5rem;
  ${(props) => props.cssconfiguration}
`;

const FlexItem = styled.div`
  margin: 1rem 0rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BoldHeading = styled.h4`
  font-size: large;
  font-weight: bold;
  color: var(--resume-heading-color);
`;

const StyledButton = styled.button`
  padding: 1rem;
  border: 1px solid var(--resume-button-color);
  background-color: var(--resume-button-color);
  color: white;
  border-radius: 10px;
  float: right;
  &:disabled {
    background-color: var(--resume-button-color-disabled);
  }
`;

const ResumeButtonContainer = styled.div`
  width: 100%;
  height: 3rem;
  margin-bottom: 2rem;
  padding-right: 3rem;

  @media (max-width: 576px) {
    display: flex;
    height: 5rem;
    justify-content: center;
  }
`;

const Partition = styled.div`
  border: 1px solid var(--resume-heading-color);
  margin: 0.75rem 0rem 0rem;
`;

const StyledList = styled.ul``;

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 0.1fr 10fr;
  gap: 1rem;
  padding-bottom: 1rem;
  align-items: center;
`;

const StyledDiv = styled.div`
  ${(props) => props.cssconfiguration}
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? props.gap : "2rem")};
`;

const StyledH2 = styled.h2`
  font-style: italic;
  color: var(--resume-designation-color);
`;

const ResumePage = () => {
  const resumeContentRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const {
    name,
    designation,
    projects,
    work: WorkData,
    skills,
    education: educationItems,
    languagesKnown,
    contactDetail,
    phone,
    location,
  } = useData();
  const linkedIn = contactDetail.filter(
    (contact) => contact.type === "linkedIn"
  )?.[0];

  const downloadResume = async () => {
    setIsDownloading(true);
    const input = resumeContentRef.current;
    const clonedElement = input.cloneNode(true);
    inlineStyles(clonedElement);
    html2pdf().from(input).save(`${name} Resume.pdf`);
    setIsDownloading(false);
  };

  const inlineStyles = (element) => {
    const computedStyles = window.getComputedStyle(element);
    for (let i = 0; i < computedStyles.length; i++) {
      const property = computedStyles[i];
      const value = computedStyles.getPropertyValue(property);
      element.style.setProperty(property, value);
    }
    Array.from(element.children).forEach((child) => inlineStyles(child));
  };

  return (
    <>
      <ResumeButtonContainer>
        <StyledButton onClick={downloadResume} disabled={isDownloading}>
          {isDownloading ? "Downloading..." : "Download Resume"}
        </StyledButton>
      </ResumeButtonContainer>
      <ResumeWrapper ref={resumeContentRef}>
        <div>
          <h1>{name}</h1>
          <StyledH2>{designation}</StyledH2>
          <StyledHeading>Contact Details</StyledHeading>
          <ContactItem>
            <MdOutlineMailOutline style={{ width: "3rem", height: "3rem" }} />
            <span>
              {
                contactDetail.filter((contact) => contact.type === "mail")?.[0]
                  ?.value
              }
            </span>
          </ContactItem>
          <ContactItem>
            <IoMdCall style={{ width: "3rem", height: "3rem" }} />
            <span>{phone}</span>
          </ContactItem>
          <ContactItem>
            <MdLocationOn style={{ width: "3rem", height: "3rem" }} />
            <span>{location[0].value}</span>
          </ContactItem>
          <ContactItem>
            <FaLinkedin style={{ width: "3rem", height: "3rem" }} />
            <Link to={linkedIn?.link} target={linkedIn?.target}>
              {linkedIn?.value}
            </Link>
          </ContactItem>
          <StyledHeading>Education Details</StyledHeading>
          <div>
            {educationItems.map((item) => (
              <FlexItem key={item.id}>
                <BoldHeading>{item.name}</BoldHeading>
                <div>{item.institution}</div>
                <div>{item.years}</div>
                <div>{item.score}</div>
              </FlexItem>
            ))}
          </div>
          <StyledHeading>Skills</StyledHeading>
          <ProjectContainer gap="0.5rem">
            {skills
              .filter((item) => item.category !== "other")
              .map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
          </ProjectContainer>

          <StyledHeading>Languages</StyledHeading>
          <div>
            {languagesKnown.map((language) => (
              <div key={language}>{language}</div>
            ))}
          </div>
        </div>

        <Partition />

        <div>
          <StyledHeading cssconfiguration={{ "margin-top": " 0rem" }}>
            Summary
          </StyledHeading>
          <p>
            Tech enthusiast and software engineer with a diverse skill set.
            Experienced in both frontend and backend development, with a focus
            on creating seamless user experiences. Excited about contributing to
            projects that push technological boundaries.
          </p>
          <StyledHeading>Work Experience</StyledHeading>
          {WorkData.map((item) => (
            <FlexItem key={item.id}>
              <BoldHeading>{item.designation}</BoldHeading>
              <StyledDiv
                cssconfiguration={{
                  color: "var(--resume-company-name);",
                }}
              >
                {item.companyName}, {item.location}
              </StyledDiv>
              <StyledDiv
                cssconfiguration={{
                  color: "var(--resume-company-time);",
                }}
              >
                {item.startDate} - {item.endDate ? item.endDate : "Present"}
              </StyledDiv>
              <StyledList>
                {item.achievements.map((ele) => (
                  <StyledListItem key={ele}>
                    <GoDotFill style={{ width: "2rem", height: "2rem" }} />
                    <span>{ele}</span>
                  </StyledListItem>
                ))}
              </StyledList>
            </FlexItem>
          ))}
          <StyledHeading>Projects</StyledHeading>
          <ProjectContainer>
            {projects.map((ele) => (
              <div key={ele.id}>
                <BoldHeading>{ele.name}</BoldHeading>
                <StyledList>
                  {ele.description.map((el) => (
                    <StyledListItem key={el}>
                      <GoDotFill style={{ width: "2rem", height: "2rem" }} />
                      <span>{el}</span>
                    </StyledListItem>
                  ))}
                </StyledList>
                <StyledDiv>
                  Project Link:
                  <Link to={ele.websiteLink} target="_blank">
                    {ele.websiteLink}
                  </Link>
                </StyledDiv>
              </div>
            ))}
          </ProjectContainer>
        </div>
      </ResumeWrapper>
    </>
  );
};

export default ResumePage;
