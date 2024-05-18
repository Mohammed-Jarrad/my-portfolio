import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

const CreateFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio</Preview>
        <Tailwind>
            <Body className="py-5 bg-gray-100 rounded-xl selection:bg-violet-300">
                <Container>
                    <Section className="py-6 px-4 border border-black/20 rounded-xl bg-white">
                        <Heading className="leading-tight text-gray-800 text-2xl">You received the following message from the contact form</Heading>
                        <Text className="font-comfortaa tracking-tight py-10">{message}</Text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default CreateFormEmail
