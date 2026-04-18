import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email coordinates provided.' },
        { status: 400 }
      );
    }

    // MOCK: Simulate network latency for the UI effect
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // MOCK: Here is where you would integrate Resend, Mailchimp, or your Database
    console.log(`[STEALTH_SYS] New node added to waitlist: ${email}`);

    return NextResponse.json(
      { message: 'Node registered successfully.' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal system failure.' },
      { status: 500 }
    );
  }
}
