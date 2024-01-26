/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Center, Container, Flex, Grid, GridItem, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { CheckIcon, EmailIcon, LinkIcon, PhoneIcon, TriangleDownIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack justifyContent={`space-between`} sx={{"position": "sticky", "bg": "#171502", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0", "borderBottom": "0.25em solid white", "width": "100%"}}>
  <ChakraImage src={`logo.png`} sx={{"width": "2em", "height": "2em"}}/>
  <Text sx={{"fontFamily": "Comfortaa", "color": "white"}}>
  {`Fundación`}
</Text>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Inicio`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Adopta`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Jornadas`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`¿Como Ayudar?`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Hogar Temporal`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Blog`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Sobre Nosotros`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`/`} sx={{"marginLeft": "20px", "color": "white", "textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Contáctanos`}
</Link>
</HStack>
  <Center sx={{"backgroundImage": "background_image.webp", "backgroundSize": "cover", "backgroundRepeat": "no-repeat", "height": "100vh"}}>
  <VStack>
  <VStack>
  <Flex>
  <VStack>
  <Text as={`span`} sx={{"fontFamily": "Comfortaa", "fontSize": "2em"}}>
  <Text as={`span`} sx={{"color": "#FFEB3B"}}>
  {`Bienvenidos`}
</Text>
  {` a Fundación Manchitas.`}
</Text>
  <Text sx={{"fontFamily": "Comfortaa", "fontSize": "1.5em"}}>
  {`
                        Tenemos como objetivo poner un alto al maltrato y sobrepoblación animal, 
                        a través de un programa intensivo de esterilizaciones, 
                        de alta calidad, a bajo costo para perros y gatos de rescatistas, 
                        alimentadores y personas de escasos recursos.
                        `}
</Text>
</VStack>
  <ChakraImage src={`header_image.png`} sx={{"width": "55%", "height": "500px"}}/>
</Flex>
</VStack>
</VStack>
</Center>
  <Center sx={{"backgroundImage": "/body_background_image.webp", "backgroundPosition": "center"}}>
  <VStack sx={{"maxWidth": "1000px"}}>
  <VStack sx={{"paddingY": "4em", "background": "white", "height": "100%"}}>
  <Heading sx={{"fontSize": "4em", "fontFamily": "Comfortaa"}}>
  {`Perros y Gatos listos para ser adoptados`}
</Heading>
  <Text sx={{"fontSize": "1.5em"}}>
  {`¡Nuestras mascotas esperan por ti! Encuentra perros y gatos disponibles para adopción por raza, edad, tamaño y color.`}
</Text>
  <VStack>
  <HStack>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Ben`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Cosete`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Carles`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
</HStack>
  <HStack>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Tom`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Carmen`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Fizz`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
</HStack>
  <HStack>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Camy`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Thor`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
  <Container sx={{"marginY": "1em", "backgroundColor": "#FFEB3B", "borderRadius": "0.8em", "padding": "1em", "width": "16em"}}>
  <HStack>
  <Heading size={`md`} sx={{"fontFamily": "Comfortaa"}}>
  {`Mancha`}
</Heading>
  <Spacer/>
  <CheckIcon/>
</HStack>
  <Box sx={{"borderRadius": "md", "width": "100%"}}>
  <ChakraImage src={`dog_image.webp`} sx={{"marginY": "1.5em"}}/>
</Box>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`¡Adoptame!`}
</Button>
</Link>
</Container>
</HStack>
</VStack>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"padding": "1.5em", "borderRadius": "0.5em", "width": "100%", "height": "100%", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`Ver todas las mascotas`}
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"background": "#FFD700", "paddingY": "7em", "paddingX": "12em"}}>
  <Heading size={`2xl`} sx={{"marginBottom": "1.5em", "fontFamily": "Comfortaa"}}>
  {`Preguntas Frecuentes`}
</Heading>
  <Accordion allowMultiple={true} sx={{"width": "100%", "fontFamily": "Comfortaa"}}>
  <AccordionItem sx={{"paddingY": "1em", "paddingX": "1.5em"}}>
  <AccordionButton>
  <Heading size={`sm`} sx={{"fontFamily": "Comfortaa"}}>
  {`Quiero adoptar un perro o un gato`}
</Heading>
  <Spacer/>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <Text>
  {`
                        ¡Estas en el lugar correcto! Adopta Hoy es una plataforma para adopciones de perros y gatos en Panamá. 
                        En nuestro sitio web contamos con cientos de perritos y gatitos listos para ser adoptados, 
                        que se encuentran en búsqueda de un hogar para toda la vida.
                        `}
</Text>
  <Text>
  {`
                        En nuestro buscador de mascotas podrás encontrar perros y gatos por raza, edad, tamaño y color. 
                        Tenemos perritos y gatitos para adoptar provenientes de refugios, 
                        recién rescatados y de dueños particulares.
                        `}
</Text>
</AccordionPanel>
</AccordionItem>
  <AccordionItem sx={{"paddingY": "1em", "paddingX": "1.5em"}}>
  <AccordionButton>
  <Heading size={`sm`} sx={{"fontFamily": "Comfortaa"}}>
  {`¿Dónde puedo adoptar perros y gatos en Panamá?`}
</Heading>
  <Spacer/>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <Text>
  {`
                        Con Fundación Manchitas no es necesario salir de casa para encontrar a tu próxima mascota. 
                        En nuestro sitio web podrás encontrar cientos de perros y gatos en adopción. 
                        Todas las mascotas mostradas en nuestro sitio web han sido publicadas por refugios, 
                        rescatistas independientes o dueños particulares.
                        `}
</Text>
</AccordionPanel>
</AccordionItem>
  <AccordionItem sx={{"paddingY": "1em", "paddingX": "1.5em"}}>
  <AccordionButton>
  <Heading size={`sm`} sx={{"fontFamily": "Comfortaa"}}>
  {`¿Cuánto cuesta adoptar perros y gatos en Panamá?`}
</Heading>
  <Spacer/>
  <AccordionIcon/>
</AccordionButton>
  <AccordionPanel>
  <Text>
  {`
                        Depende. En algunos casos las organizaciones pueden dar a las mascotas en adopción sin solicitarle donación alguna, 
                        de la misma manera en otros casos los refugios o rescatistas pueden solicitarle que se realice una donación al 
                        momento de adoptar una mascota. Esto es una práctica totalmente normal, 
                        los fondos que las organizaciones recolectan a través de donaciones son destinados para ayudar a 
                        cubrir con los gastos de la organización y así seguir rescatando a más perritos y gatitos.
                        `}
</Text>
  <Text>
  {`
                        Adopta Hoy recomienda que siempre tome medidas de seguridad razonables antes de realizar cualquier tipo de pago. 
                        Adopta Hoy no recibe ningún beneficio por parte de las donaciones realizadas.
                        `}
</Text>
</AccordionPanel>
</AccordionItem>
</Accordion>
</VStack>
  <VStack sx={{"paddingTop": "2em", "fontFamily": "Comfortaa"}}>
  <ChakraImage src={`logo.png`} sx={{"height": "4em"}}/>
  <HStack>
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=n7dFHXfsPHo`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={`https://www.youtube.com/watch?v=n7dFHXfsPHo`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <LinkIcon/>
</Link>
</HStack>
  <Grid sx={{"h": "200px", "width": "100%", "gap": 4, "maxWidth": "1000px", "paddingY": "1.5em", "margin": "0px"}} templateColumns={`repeat(4, 1fr)`} templateRows={`repeat(2, 1fr)`}>
  <GridItem colSpan={1} rowSpan={2}>
  <VStack>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`Contáctanos`}
</Button>
</Link>
  <HStack>
  <TriangleDownIcon/>
  <Text>
  {`Ubicación`}
</Text>
</HStack>
  <HStack>
  <EmailIcon/>
  <Text>
  {`Correo@correo.com`}
</Text>
</HStack>
  <HStack>
  <PhoneIcon/>
  <Text>
  {`+507 123-4567`}
</Text>
</HStack>
</VStack>
</GridItem>
  <GridItem colSpan={1} rowSpan={2}>
  <VStack>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  <Button sx={{"width": "100%", "height": "100%", "padding": "0.5em", "borderRadius": "1em", "bg": "#fbbf24", "_hover": {"bg": "#f59e0b"}}}>
  {`Adopción`}
</Button>
</Link>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Nuestros Perros`}
</Link>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Nuestros Gatos`}
</Link>
</VStack>
</GridItem>
  <GridItem colSpan={2} rowSpan={1}>
  <Heading size={`sm`} sx={{"fontFamily": "Comfortaa"}}>
  {`Misión`}
</Heading>
  <Text sx={{"paddingY": "0.5em", "fontSize": "0.8em"}}>
  {`
                        Nuestra misión es acabar con el sufrimiento de perros y 
                        gatos inocentes reduciendo el número de camadas no deseadas.
                        `}
</Text>
</GridItem>
  <GridItem colSpan={2} rowSpan={1}>
  <Heading size={`sm`} sx={{"fontFamily": "Comfortaa"}}>
  {`Visión`}
</Heading>
  <Text sx={{"paddingY": "0.5em", "fontSize": "0.8em"}}>
  {`
                        La visión de Spay Panamá es un mundo donde el bienestar animal sea lo importante y 
                        se ponga fin al maltrato y crueldad hacia los animales.
                        `}
</Text>
</GridItem>
</Grid>
  <HStack sx={{"color": "white", "background": "#171502", "width": "100%", "paddingY": "0.8em"}}>
  <Spacer/>
  <Spacer/>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Términos y Condiciones`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Políticas de Privacidad`}
</Link>
  <Spacer/>
  <Link as={NextLink} href={`#`} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`Protección de Datos`}
</Link>
  <Spacer/>
  <Text>
  {`© Fundación Manchitas 200X-2024.`}
</Text>
  <Spacer/>
  <Text as={`span`}>
  {`By `}
  <Link as={NextLink} href={`https://www.instagram.com/eduardoparisd/`} isExternal={true} sx={{"textDecoration": "none", "_hover": {"color": "#FFEB3B", "textDecoration": "none"}}}>
  {`@eduardoparisd`}
</Link>
</Text>
  <Spacer/>
  <Spacer/>
</HStack>
</VStack>
</Box>
  <NextHead>
  <title>
  {`ParisDev`}
</title>
  <meta content={`Hola, Mi nombre es Eduardo Paris.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
