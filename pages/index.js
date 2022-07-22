import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    SimpleGrid
} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import Technology from "../components/technology"
import { WorkGridItem } from "../components/grid-item"
import Link from 'next/link'
import thumbHESE from "../public/images/HESE.png"
import thumbZoneIt from "../public/images/zoneit.png"
import thumbNodeJS from "../public/images/nodejs.png"
import thumbBootstrap from "../public/images/bootstrap.png"
import thumbHTML from "../public/images/html5.png"
import thumbCSS from "../public/images/css.png"
import thumbJS from "../public/images/js.png"
import thumbLeaflet from "../public/images/leaflet.png"
import thumbPostgresSQL from "../public/images/postgresql.png"
import thumbQGIS from "../public/images/qgis.png"
import thumbNull from "../public/images/null.png"
import Footer from '../components/footer'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="#bb0a1e" color="white" p={3} mt={6} mb={6} align="center">
            Hey! &#128516; I&apos;m a developer based in Portugal!
            </Box> 

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rafael Baptista
                    </Heading>
                    <p>Developer / Videographer / Photographer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} 
                        borderStyle="solid" 
                        maxWidth="100px" 
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/rafa.jpg" 
                    />
                </Box>
            </Box>

            <Section delay = {0.1}>
                <Heading as="h4" variant="section-title" mb={6}>
                    About
                </Heading>
                <Paragraph>
                Currently pursuing a degree in Computer Engineering at the University of Coimbra, where I 
                collaborate with the group of computer students from the {' '} 
                    <Link href="https://www.uc.pt/fctuc/dei/">
                        Department of Computer Engineering
                    </Link>
                    .
                </Paragraph>   
                <br/>
                <Paragraph>
                    I try to develop my work creatively and proactively, building a solid base of knowledge and developing the 
                    skills necessary for its performance.
                </Paragraph> 
                <br/>
                <Paragraph>
                    I prefer and positively mark the following areas of work:     
                </Paragraph>
                <Paragraph>
                    &emsp;- Web Development
                </Paragraph>
                <Paragraph>
                    &emsp;- Mobile Development
                </Paragraph>
                <br/>
                <Paragraph>
                    In my free time, I enjoy photography, image and video editing, playing sports 
                    and gaining new knowledge in other areas of programming.
                </Paragraph>
                <br/>
                <Paragraph>
                Never forgetting to take a coffee with friends! ☕
                </Paragraph>
            </Section>
        
            <Section id="works" delay = {0.1}>
                <Heading as="h4" variant="section-title" mb={10}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,1]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem 
                            src="http://hese.dei.uc.pt" 
                            title="HESE" 
                            thumbnail={thumbHESE}
                        >
                            An investigation project for Survey Design. Create surveys, projects, teams and share your surveys with them.
                            Create, edit, schedule and delete tasks for your project. All of the survey answers are saved in the respective project and can be downloaded any time.
                        </WorkGridItem>
                        <SimpleGrid columns={[8,8,8]} gap={6} align="center">
                            <Technology thumbnail={thumbNull}/>
                            <Technology thumbnail={thumbHTML}/>
                            <Technology thumbnail={thumbCSS} />
                            <Technology thumbnail={thumbJS}/>
                            <Technology thumbnail={thumbNodeJS}/>
                            <Technology thumbnail={thumbPostgresSQL}/>
                            <Technology thumbnail={thumbBootstrap}/>
                            <Technology thumbnail={thumbNull}/>
                        </SimpleGrid>

                        <WorkGridItem 
                            src="http://zoneit.netlify.app"
                            title="ZoneIt" 
                            thumbnail={thumbZoneIt}
                        >
                            A Web-App that represents the best places to locate a company based on it's field of work. 
                            This areas are computed based on other companies positions with the same field of work.
                        </WorkGridItem>
                        <SimpleGrid columns={[8,8,8]} gap={6} align="center">
                            <Technology thumbnail={thumbNull}/>
                            <Technology thumbnail={thumbNull}/>
                            <Technology thumbnail={thumbCSS} />
                            <Technology thumbnail={thumbLeaflet}/>
                            <Technology thumbnail={thumbQGIS}/>
                            <Technology thumbnail={thumbPostgresSQL}/>
                            <Technology thumbnail={thumbNull}/>
                            <Technology thumbnail={thumbNull}/>
                        </SimpleGrid>
                    </Section>
                </SimpleGrid>
            </Section>
            <Footer/>
        </Container>
    )
}

export default Page