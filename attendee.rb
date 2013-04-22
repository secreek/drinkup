require 'json'
require './github'

class Attendee
  include NetworkUtils

  def self.collect drinkup_name, sheet
    attendee = Attendee.new
    raw_sheet_data = Github.get_raw_content drinkup_name, sheet['path']

    user_obj = Github.get_user_info_from_id raw_sheet_data['github-id']
    user_obj ||= Github.get_user_info_from_login raw_sheet_data['github-id'] # if not id, then try login name
    attendee.target_json = user_obj
    raw_sheet_data.each_pair do |key, value|
      attendee.target_json[key] = value if key != "github-id"
    end

    attendee
  end

  attr_accessor :target_json

  def to_json(*a)
    puts @target_json
    @target_json.to_json(*a)
  end
end
