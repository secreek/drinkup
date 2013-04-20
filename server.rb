require 'sinatra'
require './attendee'
require './github'

get '/summary' do
  response.headers['Access-Control-Allow-Origin'] = '*'

  drinkup_name = params['place'] + "-" + params['date']
  summary = []
  sheets = Github.get_sheets(drinkup_name)
  return "{}" unless sheets
  Github.get_sheets(drinkup_name).each do |sheet|
    summary << Attendee.collect(drinkup_name, sheet)
  end

  summary.to_json
end
