export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Subscription failed');
    }

    return {
      success: true,
      message: 'Thank you for subscribing! Please check your email (including spam folder) to confirm your subscription.',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An error occurred. Please try again later.',
    };
  }
}