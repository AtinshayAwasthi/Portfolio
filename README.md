# Atinshay Awasthi | Terminal Portfolio

A terminal-style portfolio with a boot sequence, a robot companion (Byte), a CI/CD `deploy` animation,
project screenshots, a photo gallery, certificates, a contact form and a Recruiter view.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page shell |
| `style.css` | All styling (colors are variables at the top) |
| `script.js` | All content and behavior |
| `assets/` | Resume PDF and images |

## Run locally

Open `index.html` in a browser. That's it.

## Put it online (GitHub Pages)

1. Create a new repository on GitHub and upload everything in this folder.
2. Repository **Settings > Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

Vercel also works: import the repository and deploy with the default settings.

## Updating your content

**Updated your resume?** The site does not read the PDF, so change two things:

1. Replace `assets/Atinshay_Awasthi_Resume.pdf` with the new file (keep the same name).
2. Edit the matching text in `script.js`.

Everything a visitor reads lives near the top of `script.js`:

- `YOUR LINKS` (GitHub, LinkedIn, email, live demo links)
- `YOUR CONTENT`: the `S` object has one function per command: `about`, `skills`, `projects`, `experience`, `education`, `achievements`, `contact`
- `P.f` and `P.e`: the FindIt and EffiSphere project details
- `G`: gallery images and certificates. Add a photo to `assets/img/` and a line here, then show it with `TH(['key'],'label')`
- `R`, `TIPS`: what Byte says

**Add a project:** copy `P.f`, change the text, put its screenshot in `assets/img/`, and add it to the `projects` function.

**Add a skill:** add it to the list in the `skills` function.

## Notes

- The contact form opens the visitor's email app with the message filled in. It does not store anything on a server.
- There is no visitor counter. To count unique visitors you need a database such as Supabase.
