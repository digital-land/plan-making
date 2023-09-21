# dluhc-component-library

This repository contains code for DLUHC components. These components are served via a CDN then can be rendered on any web page with JavaScript enabled.

The components are written using Preact + Vite but compiled to a plain JS file for use within any frontend framework.

# How to use

The DLUHC components currently only support integration via direct JavaScript but in the future could be expanded to be directly included in React application.

## Integrate with JavaScript

DLUHC components are designed to be included into existing websites.

---

### For development 
In the component library, run `npm run build` to build the library. 

In the `dist` dir you will find files called `dluhc.css` and `dluhc.js`. Move the `.css` file to `prototype-kit/.tmp/public/stylesheets`, and the `.js` file to `prototype-kit/.tmp/public/js`. You will also need to move any assets such as schemas like `siteSelectionFull.json` into the `prototype-kit/.tmp/public` dir.

Then instead of the script use the below script in the head of the html instead of the one further down. 

```
<head>
	<script 
		src="/public/js/dluhc.js"
		>
	</script>

	<link rel="stylesheet" href="/public/stylesheets/dluhc.css" />
</head>
```
---

Firstly you will need to include the dluhc-component-library JavaScript code in the head of your html. _src URL to be decided when CDN is chosen_

```
<head>
	<script
	      crossorigin="anonymous"
	      src="https://cdn.jsdelivr.net/gh/digital-land/plan-making@release/assets/index-28d3d6bd.js"
	    >
	</script>
</head>
```

Then where you want the component to be rendered you need to add a new div with a memorable id and a script tag rendering the component you want, referencing that id as shown below.

```
<body>
	<div id="siteSelectionForm" role="main"></div>
		<script>
			window.DLUHC.renderSiteSelectionForm(
				{
				schemaFilepath: "/public/siteSelectionFull.json",
				},
				document.getElementById("siteSelectionForm")
			);
		</script>
	</div>
</body>
```

# Components

## Site Selection Form

Basic information about the component can go here or link to a more detailed readme / story book for the component

## Timetable
