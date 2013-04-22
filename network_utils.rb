require 'json'
require 'net/http'

module NetworkUtils

  def self.do_request uri_str, params={}
    uri = URI(uri_str)
    uri.query = URI.encode_www_form(params)

    Net::HTTP.start(uri.host, uri.port,
      :use_ssl => uri.scheme == 'https') do |http|
      request = Net::HTTP::Get.new uri.request_uri

      response = http.request request # Net::HTTPResponse object
      return response.body if response.is_a?(Net::HTTPSuccess)
    end

    nil
  end

  def self.do_request_returning_json uri_str, params={}
    result = self.do_request(uri_str, params)
    return JSON.load result if result
    nil
  end

end
