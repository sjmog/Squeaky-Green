source 'https://rubygems.org'

# ruby '1.9.3'

gem 'locomotivecms_wagon', '1.3.3'

group :development do
  # Mac OS X
  gem 'rb-fsevent', '~> 0.9.1', require: RUBY_PLATFORM.include?('darwin') && 'rb-fsevent'

  # Unix
  gem 'therubyracer', require: 'v8', platforms: :ruby
  gem 'rb-inotify', '~> 0.9', require: RUBY_PLATFORM.include?('linux') && 'rb-inotify'

  # Windows
  gem 'wdm', '>= 0.1.0', require: RUBY_PLATFORM =~ /mswin|mingw/i && 'wdm'
end

group :misc do
  # Add your extra gems here
  # gem 'susy', require: 'susy'
  # gem 'redcarpet', require: 'redcarpet'
  gem 'koala' #nice Facebook API, https://github.com/arsduo/koala/wiki
  gem 'twitter', '>= 5.0.0.rc.1' #nice Twitter API, http://rdoc.info/gems/twitter
  gem 'linkedin' #nice LinkedIn API, https://github.com/hexgnu/linkedin
  gem 'rest_client' #an easy REST client for connecting to various APIs
  gem 'chronic' #tasty natural date parsing
end