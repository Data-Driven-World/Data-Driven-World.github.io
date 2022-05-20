
Theme adapted from: https://tianqi.name/jekyll-TeXt-theme/docs/en/quick-start

To change logo:
- replace _includes/svg/logo.svg with your file named logo.svg as well
  
To add a new content, create markdown files in any of the folders:
- collection1
- collection2
- collection3
- ...

Use the front matter template as given in the markdown samples in any of the collections, eg `overview.md`. 

Then, edit `_data/navigation.yml` to add it on the sidebar navigation. Note that the **sidebar-nav** and **nav-key** in the front matter of the new `.md` file must match the name you declare in this navigation yaml file. 

## Changing logo
Replace the .svg file inside `/_includes/svg/logo.svg` with the same name. 

## Custom CSS
Add any custom sass styling in `/_sass/custom.scss`

## Custom html for articles
Add any additional elements in `/_includes/article/footer/custom.html`. You may also add it at `/_includes/article/top/custom.html` if you want it to execute first. 
Current added features:
- Go to top button at `/_includes/article/top/custom.html`
- Collapsible answer box at `/_includes/article/footer/custom.html`
- All styling in `custom.scss`

## Code color
You can go to `_sass/common/_reset.scss` and change the color under `code`.
```
code {
  color: rgba(<color>, 1.0);
  font-size: map-get($base, font-size-xs);
  line-height: map-get($base, line-height-sm);
}
```

Otherwise, edit the highlight theme itself in `/skins/highlight/tomorrow/`
