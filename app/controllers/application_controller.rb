class ApplicationController < ActionController::Base
  # for POSTman requests, comment out later
  skip_before_action :verify_authenticity_token
end
