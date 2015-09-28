require 'bundler'
Bundler.require()


# Controllers
require './controllers/app_controller'
require './controllers/welcome_controller'
require './controllers/api/fans_controller'

# Models
require './models/fan'

# Maps
map '/' do
  run WelcomeController
end
map '/api/fans' do
  run FansController
end
