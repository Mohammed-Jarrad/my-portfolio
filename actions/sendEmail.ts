'use server'
import ContactFormEmail from '@/email/CreateFormEmail'
import { getErrorMessage, validateString } from '@/lib/utils'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
	const senderEmail = formData.get('senderEmail')
	const message = formData.get('message')

	if (!validateString(senderEmail, 500)) {
		return { error: 'Invalid sender email' }
	}

	if (!validateString(message, 5000)) {
		return { error: 'Invalid message' }
	}
    let data
	try {
		data = await resend.emails.send({
			from: 'Portfolio Contact Form <onboarding@resend.dev>',
			to: 'mohammed.w.jarrad@gmail.com',
			subject: 'Message From Mohammed Jarrad Portfolio',
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				senderEmail: senderEmail as string,
				message: message as string,
			}),
		})
	} catch (error) {
		return {
			error: getErrorMessage(error),
		}
	}

    return {
        data
    }
}
