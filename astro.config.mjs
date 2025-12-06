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
      favicon: './src/assets/logo-small.svg',
      customCss: ["/src/styles/custom.css"],
			title: 'Hoglin',
			sidebar: [
  			{ label: 'Introduction', link: '/introduction' },
        { label: 'Pricing', link: '/pricing' },
        { label: 'Contribute', link: '/contribute' },
        {
            label: 'Guides',
            items: [
              { label: 'Create a Hoglin Server', link: '/guides/create-hoglin-server' },
              { label: 'Exploring Your Data', link: '/guides/exploring-your-data' },
              { label: 'Visualizations', link: '/guides/visualizations' },
              { label: 'Experiments', link: '/guides/experiments' },
            ],
        },
        {
            label: 'Public Plugins',
            items: [
              {
                label: 'PlayerTracker Plugin',
                items: [
                  { label: 'What is PlayerTracker', link: '/public-plugins/playertracker/what-is-playertracker' },
                  { label: 'Installation', link: '/public-plugins/playertracker/installation' },
                  { label: 'Configuration', link: '/public-plugins/playertracker/configuration' },
                ],
              },
            ],
        },
        {
            label: 'Developer SDK',
            items: [
              { label: 'Installation', link: '/developer-sdk/installation' },
              { label: 'Creating Your Instance', link: '/developer-sdk/creating-your-instance' },
              {
                label: 'Tracking Analytics',
                items: [
                  { label: 'Introduction To Tracking', link: '/developer-sdk/tracking-analytics/introduction-to-tracking' },
                  { label: 'Tracking with Maps', link: '/developer-sdk/tracking-analytics/tracking-with-maps' },
                  { label: 'Analytic and NamedAnalytic', link: '/developer-sdk/tracking-analytics/analytic-and-namedanalytic' },
                  { label: 'Overriding Timestamps', link: '/developer-sdk/tracking-analytics/overriding-timestamps' },
                  { label: 'Custom Types and Serializers', link: '/developer-sdk/tracking-analytics/custom-types-and-serializers' },
                ],
              },
              { label: 'Evaluating Experiments', link: '/developer-sdk/evaluating-experiments' },
              { label: 'Importing Visualizations', link: '/developer-sdk/importing-visualizations' },
              { label: 'Safely Shutting Down', link: '/developer-sdk/safely-shutting-down' },
            ],
        },
			],
		}),
	],
});
