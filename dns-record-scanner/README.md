# DNS Record Scanner

⚠️ If you’re working in a team, you can commit `.envmaster.local`; otherwise, it’s recommended to keep it local.  
Your environment variables are safe—only authenticated users can access them.

## Quick Start

```bash
cd dns-record-scanner       # if not already here
envmaster init         # select project & environment
# create env vars on https://envmaster.dev
npm install
npm run dev           # or npm run start
```

## Environment Variables

| Variable    | Default  | Description                          |
|------------|----------|--------------------------------------|
| `PORT`     | 3000     | Port the server listens on           |
| `DNS_TIMEOUT`  | 5000     | Timeout for each DNS query (ms) |
| `RECORD_TYPES`| A,AAAA,MX,CNAME,TXT        | Comma-separated list of DNS record types to scan |

## Usage

Send a POST request to `/scan` with a JSON body containing the URL:

```bash
curl -X POST http://localhost:3000/scan \
  -H "Content-Type: application/json" \
  -d '{"domain":"envmaster.dev"}'
```

### Example Response
```
{
    "domain": "envmaster.dev",
    "records": {
        "A": [
            "216.198.79.1"
        ],
        "AAAA": [],
        "MX": [],
        "CNAME": [],
        "TXT": [
            [
                "google-site-verification=0pPJRs4BbUkctSkwVLUT0YRqgJGejlJvSybJpMOf6SY"
            ]
        ]
    }
}
```
