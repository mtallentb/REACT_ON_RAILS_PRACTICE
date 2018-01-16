class ButtonsController < ApplicationController
    layout "buttons"

  def index
    @buttons_props = { name: "Matt" }
  end
end
