import {
    Column,
    Flex,
    Heading,
    RevealFx,
    Text,
    Media,
    Row,
    Schema,
    Meta,
    Button,
} from "@once-ui-system/core";
import { about, person, baseURL } from "@/resources";

export async function generateMetadata() {
    return Meta.generate({
        title: about.title,
        description: about.description,
        baseURL: baseURL,
        path: about.path,
        image: about.image,
    });
}

export default function Home() {
    return (
        <Column fillWidth horizontal="center" gap="m">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path={about.path}
                title={about.title}
                description={about.description}
                image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
                author={{
                    name: person.name,
                    role: person.role,
                    avatar: person.avatar,
                }}
            />
            <Column maxWidth="m" fillWidth gap="xl" paddingY="l">
                <Column fillWidth gap="m">
                    <RevealFx translateY="4">
                        <Heading variant="display-strong-s">{about.headline}</Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            {about.subline}
                        </Text>
                    </RevealFx>
                </Column>

                <RevealFx translateY="12" delay={0.4}>
                    <Flex fillWidth direction="column" gap="s">
                        {/* 1. SOLUCIÓN AL ERROR 'reading map': Usamos encadenamiento opcional ?. */}
                        {about.sections?.map((section, index) => (
                            <Column key={index} gap="m">
                                <Heading variant="display-strong-xs">{section.title}</Heading>
                                <Text variant="body-default-m" onBackground="neutral-weak">
                                    {section.content}
                                </Text>
                                {section.images && (
                                    <Row gap="m" wrap>
                                        {section.images.map((image, imgIndex) => (
                                            <Column
                                                key={imgIndex}
                                                border="neutral-medium"
                                                radius="m"
                                                // 2. SOLUCIÓN AL ERROR DE VERCEL: Cast 'as any' para width/height
                                                minWidth={(image as any).width || 200}
                                                height={(image as any).height || 200}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <Media
                                                    src={(image as any).src}
                                                    alt={(image as any).alt}
                                                    aspectRatio="16 / 9"
                                                />
                                            </Column>
                                        ))}
                                    </Row>
                                )}
                            </Column>
                        ))}
                    </Flex>
                </RevealFx>

                <RevealFx translateY="16" delay={0.6}>
                    <Column fillWidth gap="m">
                        <Heading variant="display-strong-xs">Mis Redes</Heading>
                        <Row gap="s" wrap>
                            {/* 3. MEJORA: Validación para el mapeo de redes sociales */}
                            {person.social?.map((social, index) => (
                                <Button
                                    key={index}
                                    href={social.link}
                                    variant="secondary"
                                    size="m"
                                    prefixIcon={social.icon}
                                >
                                    {social.name}
                                </Button>
                            ))}
                        </Row>
                    </Column>
                </RevealFx>
            </Column>
        </Column>
    );
}