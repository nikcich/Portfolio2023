import { SlideFade } from "@chakra-ui/react";
import Projects from './Projects';
import { PageContext } from '../App';
import Experience from "./Experience";
import Home from "./Home";

function PageRouter(options) {
    const { setPage } = options;

    return (
        <PageContext.Consumer>

            {page => {
                return (
                    <>
                        <SlideFade in={page === '/exp'}
                            offsetY='1000px'
                            unmountOnExit
                        >
                            <Experience />
                        </SlideFade>

                        <SlideFade in={page === '/projects'}
                            offsetY='1000px'
                            unmountOnExit
                        >
                            <Projects />
                        </SlideFade>

                        <SlideFade in={page === '/'}
                            offsetY='1000px'
                            unmountOnExit
                        >
                            <Home setPage={setPage} />
                        </SlideFade>
                    </>
                );
            }}


        </PageContext.Consumer>
    );
}

export default PageRouter;