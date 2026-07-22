# Widgemo Docs

Documentation site for the Widgemo product family, with primary coverage of `@widgemo/widgemo-core`.

Live site: https://docs.widgemo.com

## Requirements

- Node.js 20+
- npm 9+

## Local Development

1. Install dependencies:

	```bash
	npm install
	```

2. Start the local docs server (port 3004):

	```bash
	npm run start
	```

## Build

```bash
npm run build
```

The static site output is generated in `build/`.

## Useful Scripts

- `npm run start` - run local docs server
- `npm run build` - create production static output
- `npm run serve` - serve built static output locally
- `npm run typecheck` - run TypeScript checks

## Repository Notes

- Built with Docusaurus 3
- Local search uses `@cmfcmf/docusaurus-search-local`
- The docs consume local `@widgemo/widgemo-core` via `file:../widgemo-core` in this workspace
