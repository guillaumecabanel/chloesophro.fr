activate :external_pipeline,
  name: :tailwind,
  command: "npx tailwindcss -i ./source/stylesheets/site.css -o ./dist/stylesheets/site.css #{ build? ? '--minify' : '--watch'}",
  latency: 2,
  source: "./dist/"

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

configure :build do
  activate :gzip
  activate :asset_hash
  activate :minify_javascript
end
