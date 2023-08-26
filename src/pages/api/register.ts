import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  try {
    if (request.method === 'POST') {
      const resultStatus = await writeRow2(request.body.email);
      return response.status(200).json({ success: resultStatus === 200, resultStatus });
    }
  } catch (error) {
    return response.status(500).json({ error: 'Internal server error' });
  }

  return response.status(200).json({ success: true });
}

export const writeRow2 = async (email: string) => {
  const now = new Date();
  const dateString = `${now.toDateString()} ${now.toTimeString()}`;
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: 'seojinseojin@sopt-33-pre-register-emails.iam.gserviceaccount.com',
      client_id: '116668579617501740828',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgj799ihynJnbD\nVZJrTYsnT830B6aNllhd7raCuC6lfeL7TrQKdhELQB75gcTqmjYr1duOcrA9k2qq\nAVwJ23egWmEeCZ1lLTaUngdzqdM0htY/Gi1wYcgeEVL/B+HvmE+jU8JOCANk0WBi\nTmGLR7ozNnrW+9cssOd94/tOrQWyWQED4MEy2YDxclXnxdyqjrLms8p6LGeZaC2H\nGpBnU4Rx80HCwkosRhf2t344kMHtBQ8upzTrj4gKFKnDoIH359S1AcjVDX/0kdb2\n8NhArG2ut8vrVxe5ipGwM9YUySUKQ72j+JKqiS95CzqGuSsE1dI/OPzaOZzN4u93\nIEnKJtuhAgMBAAECggEATE/WDwhQEv+8jZ2DwF00KKSM+hGSzxOof0igVSPOA9j/\nwzrGZnx0IFlC/4p2eZx+57m2pw8KhdGlbhTEVmkJg9zA8OJX/QkOuncbipUqLXpy\npL4/33yR/Px16oGoGFTXcQSzwpubZVUATuj7ApQ+Qu3/V2OOAw83j0WGoX+px/g1\nofBPfR6TubFi838hPNiVCS/Ma/K+6hQ92LRvtL3gcdR4AfYRx72mZ0RcuZFd1eGL\n3ZyrWu3g5/4yFHW6iRv2E6xEBWqJkl8aZ7qGTOeldvgZV2GKkvVBRou1v43B4z95\nIJsC8w2ap71yxu1ZB1730bIur09zznjw5dNcm8xuuwKBgQDSV3Nw2rNh4j9GcNsi\nZ9UGhur71UN7mN35JxOJZh67/rg6CYCOrjRaqRlBcpl1xtyj/EJ30d7YYVRnpj0h\nKW6aoBvzNs3Yy2/pv9zufIzPhXSnoNvTdhpI8vhgppVlqNw+wrgXmP30tDBG5O5k\n7oDG2LFTlDTqvZIVfRMd474jWwKBgQDDagyXvZ7Xx9CoI9qgD0T/Y5QlIKH4lQ8A\nu77pxPRKFPZ+7Z0C5vLZK1s2yVwNHR5Idp3ZxC9g8hkQlFbEP/18FKxOXJKUZvoN\nJWqYcVU6vA0+wE5A0/lWUGJNTO/aejvt6e8MqYPq1dFcPqL5oQTCNz5gSIlHUNru\nQy3kAXTZswKBgB7O3kK2VbXNjJUFrKMCcEovcrWGDAdLYZ+/oHXsdi305gjiIWlE\njLiGsgNLBL0ibmi6ZwXjwG8S+mjgCW4VAnU1ZEKgUVAio/apunNX3Mv8cRSoU+pK\nDxmGNOj7HUCxlei/XnVeXDv+NF/94gj4gfYeAQML3yBOudnZ4vXqyIunAoGADMPL\nqMnZK21BAwq8iEIXFruxfK9iBTPvc/PPp8OW1ZQC+g2ZeQwPBwKfBbgnjC+/v6oH\n66a2FZYa7wtRk6Y+b7GGA+RmKs2DPgKYsPaOQ7TvBI9ZTUDLg8jicvw4msPrUEI8\nvE4CcP+gmm75BGdxQSKMr4ttdDwi4PeAculpcaMCgYEAt4jwFivYnzTNDkmVQQm7\njGtigbNOK2bC9w7eH7chW8gPsejvFZJDtoJC+Y/5Ze95J+Iu39yOtROLhB0uTa4d\nQQlvXDa8AT2Ya4y0l86c408ixO0MdYTRlQ7jWVDfOFrzjzykEnhOQt5yDxDR4U2c\nsdr6VaFax1KcySyKrX2hMo0=\n-----END PRIVATE KEY-----\n',
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  // google spread sheet api 가져오기
  const googleSheet = google.sheets({
    version: 'v4',
    auth,
  });
  const result = await googleSheet.spreadsheets.values.append({
    spreadsheetId: '1u1gRgpx7PEKYkG8VPfqQZQ2BI5c2OHaj0UnYs5uaQ6E',
    range: 'A:B',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [[email, dateString]] },
  });
  return result.status;
};
