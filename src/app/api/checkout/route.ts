
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia', // Use a stable Stripe API version
});

export async function POST(req: Request) {
  try {
    const { cart } = await req.json();
    console.log(cart);  // Log the received cart for debugging

    if (!cart || cart.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    const line_items = cart.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
    });

    return NextResponse.json({ id: session.id }); // Return session id
  } catch (error: unknown) {  // Ensure error is of type 'unknown'
    console.error('Stripe Checkout Error:', error);

    // Type assertion to ensure it's an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }

    // If it's not an instance of Error, handle it as a generic case
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

