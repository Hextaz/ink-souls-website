# Ink Souls Website

This is a Next.js 14 project scaffolded for the Ink Souls esports team.

Features:
- Next.js App Router (src/app)
- TypeScript
- Tailwind CSS
- ESLint

Quick start (PowerShell):

```powershell
cd ink-souls-website
npm install
npm run dev
```

## 🛠️ Configuration

Ce projet utilise **Supabase** pour la base de données et l'authentification.

1. Copiez le fichier d'exemple de variables d'environnement :
   ```bash
   cp .env.example .env.local
   ```
2. Remplissez `.env.local` avec vos propres clés Supabase (URL et Anon Key).

## 📝 Notes
- Replace placeholder styles in `src/app/globals.css` with your custom 'ink splatter' assets.
- Project was scaffolded by an automated assistant; verify dependency versions before production.
