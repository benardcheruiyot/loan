jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: { access_token: 'test-token', expires_in: 3600 } }),
  post: jest.fn().mockResolvedValue({
    data: {
      ResponseCode: '0',
      CheckoutRequestID: 'ws_CO_TEST',
      MerchantRequestID: 'mr_TEST',
    },
  }),
}));

describe('DarajaService STK payload', () => {
  beforeEach(() => {
    process.env.DARAJA_CONSUMER_KEY = 'consumer-key';
    process.env.DARAJA_CONSUMER_SECRET = 'consumer-secret';
    process.env.DARAJA_BUSINESS_SHORTCODE = '3700945';
    process.env.DARAJA_PARTYB_SHORTCODE = '5416814';
    process.env.DARAJA_PASSKEY = 'passkey';
    process.env.DARAJA_CALLBACK_URL = 'https://loan-eeuj.onrender.com/api/payments/callback';
    process.env.DARAJA_ENVIRONMENT = 'production';
    jest.resetModules();
  });

  it('always sends the configured application till as PartyB', async () => {
    const axios = require('axios');
    const darajaService = require('./darajaService');

    await darajaService.initiatePayment('0712345678', 120);

    const payload = axios.post.mock.calls[0][1];
    expect(payload.TransactionType).toBe('CustomerBuyGoodsOnline');
    expect(payload.BusinessShortCode).toBe(3700945);
    expect(payload.PartyB).toBe(3072401);
  });
});