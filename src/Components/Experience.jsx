import { Card, useColorMode } from "@chakra-ui/react";
import rtxspinner from '../assets/rtxspinner.png';
import ibm from '../assets/ibm.png';
import utd from '../assets/utd.png';
import ExperienceItem from "./ExperienceItem";

function monthDiff(d1, d2) {

    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months < 0 ? -months : months;
}

function Experience(options) {

    const now = new Date();
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <Card
            bg={isDark ? "" : "rgb(20, 20, 35, 0.1)"}
            borderColor={isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(26, 32, 44, 0.3)"}
            borderWidth={"1px"}
            mt="2rem"
            mb="10rem"
        >
            <ExperienceItem
                title="Software Engineer I"
                desc="Full Stack Software Engineer"
                dates={[`Aug 2022 - Present`, monthDiff(now, new Date('2022-08-01T00:00:00+05:30')) + " months"]}
                company="Raytheon Intelligence & Space"
                img={rtxspinner}
                section={0}
                moreOption={false}
            />

            <ExperienceItem
                title="Application Developer (Undergraduate Co-op)"
                desc="Worked at the IBM Global Industry Solutions (Industrial Engineering Lab), a technical pre-sales organization, creating high quality proof of concepts and generating technical sales assets relating to artificial intelligence. Actualized complex systems of engagement leveraging IBM Cloud PaaS and IBM data analytics capabilities. Front end development using the MERN stack, back end development consisting of NodeJS, Node-RED, IoT, and docker."
                dates={[`Aug 2021 - June 2022`, "11 months"]}
                company="IBM - Industrial Engineering Lab (Global Industry Soln.)"
                img={ibm}
                section={1}
                moreOption={true}
            />

            <ExperienceItem
                title="BS Software Engineering, Application Domain in Artificial Intelligence & Cognitive Modeling"
                desc=" Attended the Erik Jonsson School of Engineering and Computer Science with a major in Software Engineering. BS SE at UTD is based on a foundation of mathematics, including calculus, linear algebra, and discrete mathematics. In addition to fundamental computer science courses such as algorithms analysis and data structures, this program includes courses in requirements engineering, software validation and testing, software architecture, and databases. Additionally, BS SE requires students to choose an application domain."
                dates={[`Aug 2018 - May 2022`, "4 years"]}
                company="University of Texas at Dallas - School of Engineering and Computer Science"
                img={utd}
                section={2}
                moreOption={true}
            />

        </Card>
    );
}

export default Experience;