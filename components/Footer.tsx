import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { SocialButtons } from "./SocialButton";

export const Footer = () => {
  const bg = useColorModeValue("gray.200", "gray.600");
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w="full" bg={bg}>
      <Box maxW="800px" mx="auto" p={5}>
        <VStack>
          <Box mb={5}>
            <SocialButtons></SocialButtons>
          </Box>
          <Text>
            &#169; 2021 by Leon Benz |{" "}
            <Button variant="link" onClick={onOpen}>
              Impressum, Disclaimer
            </Button>
          </Text>
        </VStack>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="2xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Box py={5} px={3} overflowY="auto" maxH="100%">
              <Heading my={3} size="lg">
                Impressum
              </Heading>
              <Heading my={3} size="md">
                Angaben gemäß § 5 TMG
              </Heading>
              <Text>Leon Benz</Text>
              <Text>Weberstraße 13</Text>
              <Text>41844 Wegberg</Text>
              <Heading size="md" my={3}>
                Kontakt
              </Heading>
              <Text>Telefon: +49 (0) 178 4935503</Text>
              <Text>
                E-Mail:{" "}
                <Link href="mailto:benzleon02@gmail.com" isExternal>
                  benzleon02@gmail.com
                </Link>
              </Text>
              {/* <Heading size="md" my={3}>
                Umsatzsteuer-ID
              </Heading>
              <Text>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
              </Text>
              <Text>DE999999999</Text> */}
              <Heading size="md" my={3}>
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </Heading>
              <Text>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </Text>

              <Heading size="md" my={3}>
                Haftung für Inhalte
              </Heading>
              <Text>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </Text>
              <Text>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </Text>
              <Heading size="md" my={3}>
                Haftung für Links
              </Heading>
              <Text>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </Text>
              <Text>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </Text>
              <Heading size="md" my={3}>
                Urheberrecht
              </Heading>
              <Text>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </Text>
              <Text>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </Text>
              <Text>
                Quelle:{" "}
                <Link href="https://www.e-recht24.de/" isExternal>
                  eRecht24
                </Link>
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Schließen
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
