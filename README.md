# Envmaster Examples

Contains `.envmaster` templates for our microservices.

> ⚠️ **Never commit `.envmaster.local`**

---

## Quick Start

1. **Clone repo**

    ```bash
    git clone https://github.com/Atlantis-Services/envmaster-examples.git
    cd envmaster-examples
    ```

2. **Init Envmaster**

    ```bash
    envmaster init
    ```

3. **Select project & environment**

4. **Run project**

    ```bash
    npm install
    npm run dev    # or
    npm run start
    ```

Or with Envmaster:
    ```
    envmaster run -- <your-command>
    ```

---

## .gitignore

```gitignore
*/node_modules/
*/.envmaster.local
