# Answority website

Deployment package for https://github.com/Answority/answority-web.

The repository root contains the Answority marketing website. The interactive product demo is at `/dashboard/index.html`. Its logo returns to `../index.html`. Contact and feedback links use `support@answority.com` and open the visitor's email application; there is no form backend.

## Upload to GitHub

1. Extract the ZIP on your computer.
2. Open https://github.com/Answority/answority-web.
3. Choose **Add file > Upload files** (or **uploading an existing file** for an empty repository).
4. Upload the extracted contents, including the `assets` and `dashboard` folders. `index.html` and `package.json` must be directly at the repository root, not inside an extra `answority-web` folder. Do not upload the ZIP itself.
5. Commit to `main`. If files already exist in the repository, review conflicts before replacing them.

For a Git-based upload, copy these contents into a clone of the repository, review `git diff`, then add, commit and push. No `.git` directory, credentials, personal email address, source product documents or previous demos are included in this package.

## Cloudflare Pages

In Cloudflare, choose **Workers & Pages > Create application > Pages > Import an existing Git repository / Connect to Git**. Authorize access to the Answority organization repository and select `Answority/answority-web`.

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | None |
| Root directory | Leave blank (repository root) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Environment variables | None required |

Deploy, then test the assigned `pages.dev` URL. Add `answority.com` and `www.answority.com` under the Pages project's **Custom domains** and complete DNS activation. If either is already attached to another hosting project, review the existing association before moving it.

Use `dist` as the output directory for THIS package; the old `demo/answority` setting belonged to the Relay repository.

Official guidance: https://developers.cloudflare.com/pages/get-started/git-integration/ and https://developers.cloudflare.com/pages/configuration/custom-domains/.

## Preview locally

Install Node.js 20 or later, open a terminal in the extracted directory, and run:

```sh
npm run build
npm start
```

Open http://127.0.0.1:4174. No third-party npm dependencies are required. The build copies only public website assets into `dist`; setup documentation and scripts are not deployed.

## Verify after deployment

- `/` shows the Answority website with styling and product screenshot.
- `/dashboard/index.html` opens Answority Dashboard.
- Clicking the dashboard logo returns to the website.
- Contact and feedback links address `support@answority.com`.
- Workflow tabs, example audit, FAQ and mobile navigation work.

## Product status

This remains an interactive demo with fictional company data and sample metrics. Dashboard changes are stored locally in the visitor's browser. No live AI engines, DataForSEO, Otterly, CRM, login or external publishing integrations are connected. Google Fonts is an external typography dependency with system-font fallbacks.

Created 24 September 2026.
