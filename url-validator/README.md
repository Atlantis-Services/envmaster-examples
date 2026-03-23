# URL Validator

⚠️ If you’re working in a team, you can commit `.envmaster.local`; otherwise, it’s recommended to keep it local.  
Your environment variables are safe—only authenticated users can access them.

## Quick Start

```bash
cd url-validator       # if not already here
envmaster init         # select project & environment
# create env vars on https://envmaster.dev
npm install
npm run dev           # or npm run start
```

## Environment Variables

| Variable    | Default  | Description                          |
|------------|----------|--------------------------------------|
| `PORT`     | 3000     | Port the server listens on           |
| `TIMEOUT`  | 5000     | Timeout for URL validation requests (ms) |
| `PROXY_URL`| —        | Optional proxy URL for outgoing requests |

## Usage

Send a POST request to `/validate` with a JSON body containing the URL:

```bash
curl -X POST http://localhost:3000/validate \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

### Example Response
```
{
  "url": "https://example.com",
  "status": 200,
  "statusText": "OK"
}
```
