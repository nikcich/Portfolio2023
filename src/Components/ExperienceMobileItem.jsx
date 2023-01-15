import { Flex, Spacer, Text, Card, Collapse, Button, useColorMode, Divider } from "@chakra-ui/react";
import { useState } from "react";

function ExperienceMobileItem(options) {

    const { title, company, dates, desc, img, section, moreOption } = options;
    const [more, setMore] = useState(false);
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    return (
        <>
            <Flex
                w="90vw"
                display={"grid"}
                marginTop="2px"
                borderRadius={"0.5rem"}
                overflow="hidden"
                maxW="90vw"
                flexDirection={"column"}
            >
                <Card
                    bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"}
                    m={"3"}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', alignItems: 'center' }}
                    gap="1rem"
                    p="3"
                >
                    <img src={img} style={{ height: '200px', width: '200px' }}></img>
                    <Divider />
                    <Text fontSize='3xl' as='b' textAlign={'center'}>{title}</Text>
                    <Text fontSize='2xl' textAlign={'center'}>{company}</Text>

                    <Text fontSize='2xl' textAlign={'center'}>{dates[0]} &#x2022; {dates[1]}</Text>
                </Card>

                <Card
                    bg={isDark ? "rgb(20, 20, 35, 0.8)" : "rgb(250, 250, 250, 0.8)"} m={"3"}
                    p="3"
                >
                    <Collapse startingHeight={75} in={more}>
                        <Text fontSize={"2xl"}
                        >{desc}</Text>
                    </Collapse>

                    {moreOption &&
                        <Button onClick={() => setMore((old) => !old)}>{more ? 'Show Less' : 'Show More'}</Button>
                    }

                </Card>



            </Flex>
        </>
    );
}

export default ExperienceMobileItem;