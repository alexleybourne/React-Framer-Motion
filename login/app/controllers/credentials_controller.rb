class CredentialsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
        @users = [
            { email: "jim@jimmail.com", password: "Jimmyjimmles"},
            { email: "female@email.com", password: "girly"}
        ]
        user = @users.find{|user| user[:email] == params[:email]}
        if user and user[:password] == params[:password]
            render plain: "Logged in as #{user[:email]}!"
        else
            render plain: "Wrong email or password!"
        end
    end
end
