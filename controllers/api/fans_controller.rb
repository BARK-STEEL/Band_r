class FansController < Sinatra::Application

  before do
    content_type :json
  end

  def fanParams
    @fan_params = @fan_params ||
    JSON.parse(request.body.read.to_s)
  end

  get '/' do
    fans = Fan.all
    fans.to_json
  end

  get '/:id' do
    fan = Fan.find(params[:id])
    fan.to_json
  end

  post '/' do
    fan = Fan.create(params[:fan] || fanParams )
    fan.to_json
  end

  delete '/:id' do
    Fan.destroy(params[:id])
    halt 202
  end
  
end
