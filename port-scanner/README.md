# Port Scanner

⚠️ If you’re working in a team, you can commit `.envmaster.local`; otherwise, it’s recommended to keep it local.  
Your environment variables are safe—only authenticated users can access them.

## Quick Start

```bash
cd port-scanner       # if not already here
envmaster init         # select project & environment
# create env vars on https://envmaster.dev
npm install
npm run dev           # or npm run start
```

## Environment Variables

| Variable    | Default  | Description                          |
|------------|----------|--------------------------------------|
| `PORT`     | 3000     | Port the server listens on           |
| `TIMEOUT`  | 2000     | Timeout per port in milliseconds |

## Usage

Send a POST request to `/scan` with a host/IP and an array of ports:

```bash
curl -X POST http://localhost:3000/scan \
  -H "Content-Type: application/json" \
  -d '{"host":"example.com","ports":[80,443,22]}'
```

### Example Response
```
{
    "host": "example.com",
    "results": [
        { "port": 80, "status": "open" },
        { "port": 443, "status": "open" },
        { "port": 22, "status": "closed" }
    ]
}
```
