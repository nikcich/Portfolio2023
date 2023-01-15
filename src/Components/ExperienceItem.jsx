import { Flex, Spacer, Text, Card, Collapse, Button, useColorMode, Divider } from "@chakra-ui/react";
import { useState } from "react";
import MediaQuery from 'react-responsive';
import ExperienceMobileItem from './ExperienceMobileItem';

function ExperienceItem(options) {

    const { title, company, dates, desc, img, section, moreOption } = options;
    const [more, setMore] = useState(false);
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <>

            <MediaQuery minWidth={1000}>
                <Flex className="parent"
                    minH={"300px"}
                    w="1000px"
                    display={"grid"}
                    marginTop="2px"
                    borderRadius={"0.5rem"}
                    overflow="hidden"
                    maxW="90vw"
                >
                    <Card className="div1" bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"} m={"3"}
                    >
                        <img src={img} style={{ width: '100%' }}></img>
                    </Card>

                    <Card className="div2" bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"} m={"3"}>
                        <Text fontSize='3xl' as='b'>{title}</Text>
                        <Text fontSize='2xl'>{company}</Text>
                        <Divider />
                        <Spacer />
                        <Text fontSize='2xl'>{dates[0]} &#x2022; {dates[1]}</Text>
                    </Card>

                    <Card className="div3" style={{ marginBottom: '100px' }}
                        bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"} m={"3"}
                    >
                        <Collapse startingHeight={75} in={more}>
                            <Text fontSize={"2xl"}
                            >{desc}</Text>
                        </Collapse>

                        {moreOption &&
                            <Button onClick={() => setMore((old) => !old)}>{more ? 'Show Less' : 'Show More'}</Button>
                        }

                    </Card>

                    <div className="div4" style={{
                        position: 'relative', display: 'flex', justifyContent: 'center'
                    }}>
                        {(section == 1 || section == 2) &&
                            <div
                                style={{
                                    height: '100%', width: '1px', borderStyle: 'none dotted none none',
                                    borderWidth: '2px', borderColor: isDark ? 'white' : '#1A202C'

                                }}
                            />
                        }


                        <div
                            style={{
                                height: '40px', width: '40px', background: isDark ? 'white' : '#1A202C',
                                position: 'absolute', borderRadius: '100%',
                                bottom: '-20px', left: '5px',
                            }}
                        />
                    </div>
                    <div className="div5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {(section == 0 || section == 1) &&
                            <div
                                style={{
                                    height: '100%', width: '1px', borderStyle: 'none dotted none none',
                                    borderWidth: '2px', borderColor: isDark ? 'white' : '#1A202C'

                                }}
                            />
                        }
                    </div>
                </Flex>
            </MediaQuery>

            <MediaQuery maxWidth={1000}>
                <ExperienceMobileItem
                    title={title}
                    company={company}
                    dates={dates}
                    desc={desc}
                    img={img}
                    section={section}
                    moreOption={moreOption}
                />
            </MediaQuery>

        </>
    );
}

export default ExperienceItem;