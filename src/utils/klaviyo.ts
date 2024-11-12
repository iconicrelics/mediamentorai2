export interface KlaviyoResponse {
  success: boolean;
  error?: string;
}

export const subscribeToNewsletter = async (email: string): Promise<KlaviyoResponse> => {
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
      throw new Error(data.error || 'Failed to subscribe');
    }

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
};