class HomepageController < ApplicationController
    layout 'homepage'

    def index
        @homepage_props = { name: "Matt" }
    end
end
