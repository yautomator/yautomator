import { SECRET_STRIPE_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import Stripe from 'stripe';

const stripe = new Stripe(SECRET_STRIPE_KEY);

export async function POST({ request }) {
	const { priceId, currentPageUrl } = await request.json();

	const session = await stripe.checkout.sessions.create({
		line_items: [{ price: priceId, quantity: 1 }],
		mode: 'payment',
		success_url: `${currentPageUrl}?checkout_success=true`,
		cancel_url: `${currentPageUrl}?checkout_success=false`
	});

	return json({ sessionId: session.id });
}
