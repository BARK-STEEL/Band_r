class WelcomeController < AppController
  get '/' do
    erb :index
  end

  get '/sign_up' do
    erb :sign_up
  end
end
