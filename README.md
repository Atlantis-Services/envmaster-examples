# Envmaster Examples

Contains `.envmaster` templates for our microservices.

---

## Quick Start

1. **Clone the repo**

    ```bash
    git clone https://github.com/Atlantis-Services/envmaster-examples.git
    cd envmaster-examples
    ```

2. **Install Envmaster** (if not already installed)

    - Get it here: [github.com/Atlantis-Services/envmaster-cli](https://github.com/Atlantis-Services/envmaster-cli)

3. **Go into a service folder** (e.g., `url-validator`) and follow the instructions in its README:

---

## Team Notes

- ⚠️ If you’re working in a team, you **can commit `.envmaster.local`**.  
  Otherwise, it’s recommended to keep it local.
- Your environment variables are safe—only authenticated users can access them.

---

## .gitignore

```gitignore
*/node_modules/
*/.envmaster.local
