import { Stack, useColorMode, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { Heading } from '@chakra-ui/react'
import ProjectItemLeft from "./ProjectItemLeft";
import ProjectItemRight from "./ProjectItemRight";
import Capstone from '../Capstone.png';
import posh from '../assets/posh.png';
import monte from '../assets/monte.png';
import binder from '../assets/Binder.png';
import roblox from '../assets/roblox.png';
import { FaReact, FaPython, FaNodeJs, FaDiscord } from 'react-icons/fa';
import { SiFlask, SiMariadb, SiExpress, SiCplusplus, SiLinode, SiLua } from 'react-icons/si';
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";

function Projects(props) {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const { setWindows } = props;

    return (
        <Stack>
            <Flex direction={isNotSmallerScreen ? "column" : "column"}
                spacing="200px" p={['16', '16', '16', '16']}
                alignSelf="flex-start" alignItems="center" gap={"10px"}
            >

                <Heading
                    size="xl"
                    fontSize="6xl"
                    alignSelf={"center"}
                >
                    My Projects
                </Heading>

                <Heading
                    mt="8"
                    size="md"
                    fontSize="1xl"
                    alignSelf={"center"}
                    as="i"
                >
                    Some of my projects.
                </Heading>

                <ProjectItemLeft
                    img={Capstone}
                    title="Senior Capstone Project"
                    tags={[
                        { icon: FaReact, name: 'ReactJS', color: 'blue' },
                        { icon: FaNodeJs, name: 'NodeJS', color: 'green' },
                        { icon: FaPython, name: 'Python', color: 'purple' },
                        { icon: SiFlask, name: 'Flask', color: 'red' },
                        { icon: SiMariadb, name: 'MariaDB', color: 'pink' }

                    ]}
                    content={
                        `Worked with six fellow senior CS/SE majors as well as an industry sponsor 
                        from MediaKind to develop a web based workforce planning application. 
                        Assumed role of Front-End Lead (As I was the only one with experience in 
                        full-stack development) and guided the development of the User Interface 
                        and API's needed for the application.`
                    }
                    setWindows={setWindows}
                />
                <ProjectItemRight
                    img={posh}
                    title="Item Management System"
                    tags={[
                        { icon: FaReact, name: 'ReactJS', color: 'blue' },
                        { icon: FaNodeJs, name: 'NodeJS', color: 'green' },
                        { icon: SiExpress, name: 'ExpressJS', color: 'purple' },
                        { icon: SiMariadb, name: 'MariaDB', color: 'pink' }
                    ]}
                    content={
                        `A dashboard created for my sister to allow for the management of items in 
                        her poshmark store. Allows user to create items, locations, 
                        bundle items together, and log prices. The input data then gets displayed in 
                        charts showing different breakdowns, as well as a table of all items that can 
                        be searched, sorted, etc.`
                    }
                    git="https://github.com/nikcich/PoshmarkWeb"
                    setWindows={setWindows}
                />

                <ProjectItemLeft
                    img={monte}
                    title="Page Replacement Monte Carlo Simulation"
                    tags={[
                        { icon: SiCplusplus, name: 'C++', color: 'blue' },

                    ]}
                    content={
                        `A Monte Carlo simulation of page replacement algorithms. This was developed using C++, implementing the FIFO, LRU, and Clock page replacement algorithms. Ran memory traces of 1,000 page numbers placed in 10 regions. Each region having a base page number of 10 times its region number. Adjusted using normal distribution, and each algorithm tested on working set sizes of 4 to 20.
                        `
                    }
                    git="https://github.com/nikcich/MonteCarloSim"
                    setWindows={setWindows}
                />
                <ProjectItemRight
                    img={binder}
                    title={`"Binder"`}
                    tags={[
                        { icon: FaReact, name: 'ReactJS', color: 'blue' },
                        { icon: FaNodeJs, name: 'NodeJS', color: 'green' },
                        { icon: SiExpress, name: 'ExpressJS', color: 'purple' },
                        { icon: SiMariadb, name: 'MariaDB', color: 'pink' },
                        { icon: SiLinode, name: 'Linode', color: 'green' }
                    ]}
                    content={
                        `A website that allows users to upload images of motorcycles, for other users to view and vote "Yes" or "No" on. Users can also view the top voted motorcycles. This project made use of ReactJS, NodeJS, ExpressJS, HTML/CSS, MariaDB, and was deployed on a Linux server. A basic account system is implemented, storing users username and an encrypted password in the database. Additionally, there are protected routes to keep users who are not logged in from accessing pages other than the login page. Basic file upload system is present, to allow users to upload images of motorcycles.`
                    }
                    git="https://github.com/nikcich/BinderCodes"
                    demo="https://binder.cichosz.dev/"
                    setWindows={setWindows}
                />

                <ProjectItemLeft
                    img={roblox}
                    title="Discord Bot"
                    tags={[
                        { icon: FaReact, name: 'ReactJS', color: 'blue' },
                        { icon: FaDiscord, name: 'DiscordJS', color: 'purple' },
                        { icon: SiLua, name: 'Lua', color: 'blue' },
                        { icon: FaNodeJs, name: 'NodeJS', color: 'green' },
                        { icon: SiMariadb, name: 'MariaDB', color: 'pink' },
                        { icon: SiLinode, name: 'Linode', color: 'green' }

                    ]}
                    content={
                        `A discord bot that allows for users to associate a discord account with a roblox account. This then enabled the ability for a roblox based "radio" GUI to be created for users to interact with, moving a users associated discord account from voice chat channels creating a seudo-Radio frequncy system. This was developed using ReactJS, NodeJS, DiscordJS, MariaDB, Lua, Roblox API's, and deployed on a Linux server.`
                    }
                    setWindows={setWindows}
                />

                {/* 
                <ProjectItemRight
                    img={posh}
                    title=""
                    tags={[
                        { icon: SiMariadb, name: 'MariaDB', color: 'pink' }
                    ]}
                    content={
                        ``
                    }
                /> 
                */}

                {/* <CodeBlock
                    text={
                        `class HelloMessage extends React.Component {
    handlePress = () => {
        alert('Hello')
    }
    render() {
        return (
            <div>
                <p>Hello {this.props.name}</p>
                <button onClick={this.handlePress}>Say Hello</button>
            </div>
        );
    }
}
                      
ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
);`}
                    language={"jsx"}
                    showLineNumbers={true}
                    startingLineNumber={1}
                    wrapLines
                    theme={tomorrowNightEighties}
                /> */}

            </Flex>
        </Stack>
    );
}

export default Projects;