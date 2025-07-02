// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
  		plugins: [starlightThemeFlexoki({
   		  accentColor: "orange",
  		})],
      favicon: './src/assets/favicon.png',
      customCss: ["/src/styles/custom.css"],
			title: 'Hoglin',
			sidebar: [
  			{ label: 'Introduction', link: '/introduction' },
        { label: 'Getting Started', link: '/getting-started' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contribute', link: '/contribute' },
        {
            label: 'Guides',
            items: [
              { label: 'Create a server', link: '/guides/create-server' },
              { label: 'Track player events', link: '/guides/player-events' },
              { label: 'Explore your data', link: '/guides/explore' },
              { label: 'Learn about Experiments', link: '/guides/experiments' },
            ],
        },
        {
            label: 'Reference',
            items: [
              { label: 'SDK Reference', link: '/reference/sdk' },
            ],
        },
			],
		}),
	],
});
