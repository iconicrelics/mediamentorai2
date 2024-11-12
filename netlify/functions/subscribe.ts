import { Handler } from '@netlify/functions';

const KLAVIYO_PRIVATE_KEY = 'pk_1371b7aae972881d4ba7e3ba8b386ca62e';
const KLAVIYO_LIST_ID = 'YzKdCX';

export const handler: Handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    let body;
    try {
      body = JSON.parse(event.body || '{}');
    } catch (e) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    const { email } = body;

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Create or update profile using new API version
    const profileResponse = await fetch('https://a.klaviyo.com/api/v2/list/' + KLAVIYO_LIST_ID + '/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        api_key: KLAVIYO_PRIVATE_KEY,
        profiles: [{
          email: email
        }]
      })
    });

    if (!profileResponse.ok) {
      const errorData = await profileResponse.text();
      console.error('Klaviyo API error:', errorData);
      throw new Error('Failed to subscribe to newsletter');
    }

    const responseData = await profileResponse.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Successfully subscribed to newsletter'
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      })
    };
  }
};