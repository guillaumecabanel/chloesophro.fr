activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :directory_indexes

set :css_dir, "assets/stylesheets"
set :fonts_dir, "assets/fonts"
set :images_dir, "assets/images"
set :js_dir, "assets/javascripts"

activate :external_pipeline,
  name: :tailwind,
  command: "npx tailwindcss -i ./source/assets/stylesheets/site.css -o ./#{ build? ? 'build' : 'dist'}/assets/stylesheets/site.css #{ build? ? '--minify' : '--watch'}",
  latency: 2,
  source: "./#{ build? ? 'build' : 'dist'}"

configure :build do
  activate :gzip
  activate :asset_hash
  activate :minify_html
  activate :minify_javascript, inline: true, compressor: -> { Uglifier.new(harmony: true) }
  activate :imageoptim
end

helpers do
  def truncate_words(text, words_count, options = {})
    sep = options[:separator] || /\s+/
    sep = Regexp.escape(sep.to_s) unless Regexp === sep
    if text =~ /\A((?>.+?#{sep}){#{words_count - 1}}.+?)#{sep}.*/m
      $1 + (options[:omission] || "...")
    else
      text.dup
    end
  end
end
