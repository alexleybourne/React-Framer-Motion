class CredentialsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def login
        @users = [
            { email: "jim@jimmail.com", password: "Jimmyjimmles", name: "Jim Jimmles"},
            { email: "female@email.com", password: "girly", name: "girly girl"}
        ]
        user = @users.find{|user| user[:email] == params[:email]}
        if user && user[:password] == params[:password]
            render plain: "Logged in as #{user[:name]}!"
        else
            render plain: "Wrong email or password!"
        end
    end
end
