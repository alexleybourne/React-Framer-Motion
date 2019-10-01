class CredentialsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
        render json: params
    end
end
